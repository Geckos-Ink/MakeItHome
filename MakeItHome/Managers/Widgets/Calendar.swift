//
//  Calendar.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 14/01/24.
//  Copyright © 2024 geckos.ink. All rights reserved.
//

import Foundation
import EventKit

class Calendar {
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
    }
    
    func fetchEvents(from startDate: Date, to endDate: Date) {
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
        
        msg.title = title
        msg.day = day
        msg.startTime = startDate
        msg.endTime = endDate
        msg.allDay = isAllDay
        msg.location = location
        msg.notes = notes
        
        Static.TopBarWebView?.sendMessage(obj: msg)
    }
}
