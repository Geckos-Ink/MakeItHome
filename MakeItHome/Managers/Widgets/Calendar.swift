//
//  Calendar.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 14/01/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation
import EventKit

func combineDateWithTimeString(date: Date, withTime timeString: String) -> Date? {
    // Date formatter to parse the time string
    let timeFormatter = DateFormatter()
    timeFormatter.dateFormat = "HH:mm"

    // Get the time components from the time string
    guard let timeDate = timeFormatter.date(from: timeString) else {
        print("Invalid time format")
        return nil
    }

    // Extract hour and minute components from the parsed time
    let calendar = EventKit.Calendar.current
    let timeComponents = calendar.dateComponents([.hour, .minute], from: timeDate)
    guard let hour = timeComponents.hour, let minute = timeComponents.minute else {
        print("Error extracting time components")
        return nil
    }

    // Extract year, month, and day components from the original date
    let dateComponents = calendar.dateComponents([.year, .month, .day], from: date)
    
    // Combine date and time components to create a new Date object
    var combinedComponents = DateComponents()
    combinedComponents.year = dateComponents.year
    combinedComponents.month = dateComponents.month
    combinedComponents.day = dateComponents.day
    combinedComponents.hour = hour
    combinedComponents.minute = minute

    // Create the new Date object with combined components
    let combinedDate = calendar.date(from: combinedComponents)
    
    return combinedDate
}

class Calendar {
    var calendars : [String:EKCalendar] = [:]
    
    func receive(msg : JSMessage){
        if msg.value == "eventRange"{
            // Create a DateFormatter with the desired date format
            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "dd/MM/yyyy"
            
            if msg.firstDate == nil || msg.lastDate == nil {
                print("debug")
                return
            }

            let firstDate = dateFormatter.date(from: msg.firstDate!)
            let lastDate = dateFormatter.date(from: msg.lastDate!)

            if firstDate != nil && lastDate != nil {
                fetchEvents(from: firstDate!, to: lastDate!)
            }
            else {
                print("debug")
            }
        }
        
        if msg.value == "newEvent" {
            let eventStore = EKEventStore()
            let event = EKEvent(eventStore: eventStore)
            event.title = msg.title
            
            let dateFormatter = ISO8601DateFormatter()
            let day = dateFormatter.date(from: msg.day!)
            
            event.startDate = combineDateWithTimeString(date: day!, withTime: msg.startTime!)
            event.endDate = combineDateWithTimeString(date: day!, withTime: msg.endTime!)
            
            event.url = msg.url
            event.location = msg.location
            event.notes = msg.notes
            
            event.calendar = calendars[msg.calendar!]

            do {
                try eventStore.save(event, span: .thisEvent)
                print("Event created")
            } catch let error as NSError {
                print("Failed to save event with error: \(error)")
            }
        }
        
        if msg.value == "updateEvent" {
            let eventStore = EKEventStore()
            if let event = eventStore.event(withIdentifier: msg.strId!) {
                event.title = msg.title
                
                let dateFormatter = ISO8601DateFormatter()
                let day = dateFormatter.date(from: msg.day!.replacingOccurrences(of: "\\.\\d+", with: "", options: .regularExpression))
                
                event.startDate = combineDateWithTimeString(date: day!, withTime: msg.startTime!)
                event.endDate = combineDateWithTimeString(date: day!, withTime: msg.endTime!)
                
                event.url = msg.url
                event.location = msg.location
                event.notes = msg.notes
                
                event.calendar = calendars[msg.calendar!]

                do {
                    try eventStore.save(event, span: .thisEvent)
                    print("Event updated")
                } catch let error as NSError {
                    print("Failed to save event with error: \(error)")
                }
            } else {
                print("Event not found")
            }
        }
    }
    
    func fetchEvents(from startDate: Date, to endDate: Date) {
        // Update calendars
        listCalendars()
        
        // Create an instance of the event store
        let eventStore = EKEventStore()

        // Request access to the calendar
        var isAccessGranted = false
        eventStore.requestAccess(to: .event) { (granted, error) in
            isAccessGranted = granted
            print("granting error: ", error)
            
            // Check if access is granted
            if !isAccessGranted {
                print("Access to the calendar is denied")
            }

            // Create a predicate to search for events
            let eventsPredicate = eventStore.predicateForEvents(withStart: startDate, end: endDate, calendars: nil)

            // Fetch events matching the predicate
            let events = eventStore.events(matching: eventsPredicate)
            
            for e in events {
                self.extractEventDetails(event: e)
            }
        }
    }
    
    func listCalendars() {
        self.calendars = [:]
        let eventStore = EKEventStore()
        
        var msg = JSMessage()
        msg.type = "toApp"
        msg.value = "calendar"
        msg.op = "calendarsList"
        
        msg.calendarsTitles = []
        msg.calendarsColors = []
        
        let calendars = eventStore.calendars(for: .event)
        for calendar in calendars {
            print("Calendar Title: \(calendar.title)")
            print("Calendar Color: \(calendar.cgColor)")
            
            self.calendars[calendar.title] = calendar
            
            msg.calendarsTitles?.append(calendar.title)
            msg.calendarsColors?.append(calendar.cgColor.components ?? [200,200,200])
        }
        
        Static.TopBarWebView?.sendMessage(obj: msg)
    }
    
    func extractEventDetails(event: EKEvent) {
        // DateFormatter to format the date and time
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "HH:mm" // 24-hour format
        
        // 2019-01-01T00:00:00
        let dayFormatter = DateFormatter()
        dayFormatter.dateFormat = "yyyy-MM-dd"

        // Extracting basic details
        let title = event.title ?? ""
        
        let day = dayFormatter.string(from: event.startDate)
        let startDate = dateFormatter.string(from: event.startDate)
        let endDate = dateFormatter.string(from: event.endDate)
        let isAllDay = event.isAllDay

        // Additional details (optional)
        let location = event.location ?? ""
        let notes = event.notes ?? ""
        

        var msg = JSMessage()
        msg.type = "toApp"
        msg.value = "calendar"
        msg.op = "setEvent"
        
        msg.strId = event.eventIdentifier
        
        msg.title = title
        msg.day = day
        msg.startTime = startDate
        msg.endTime = endDate
        msg.allDay = isAllDay
        msg.location = location
        msg.notes = notes
        msg.calendar = event.calendar.title
        msg.color = event.calendar.cgColor.components
        msg.url = event.url
        
        Static.TopBarWebView?.sendMessage(obj: msg)
    }
    
    // Unused function, but it's a model example
    func createEvent(eventStore: EKEventStore, title: String, startDate: Date, endDate: Date) {
        let event = EKEvent(eventStore: eventStore)
        event.title = title
        event.startDate = startDate
        event.endDate = endDate
        event.calendar = eventStore.defaultCalendarForNewEvents

        do {
            try eventStore.save(event, span: .thisEvent)
            print("Event created")
        } catch let error as NSError {
            print("Failed to save event with error: \(error)")
        }
    }
    
    func editEvent(eventStore: EKEventStore, eventIdentifier: String, newTitle: String) {
        if let event = eventStore.event(withIdentifier: eventIdentifier) {
            event.title = newTitle

            do {
                try eventStore.save(event, span: .thisEvent)
                print("Event updated")
            } catch let error as NSError {
                print("Failed to save event with error: \(error)")
            }
        } else {
            print("Event not found")
        }
    }
}
