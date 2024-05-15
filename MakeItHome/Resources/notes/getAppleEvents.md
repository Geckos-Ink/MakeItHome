To write a Swift code for macOS that retrieves a list of events from the user's calendar within a given range of days, you need to use the EventKit framework provided by Apple. This framework allows you to access and manipulate calendars and events on macOS and iOS.

Here's a basic example of how you could implement this functionality in Swift for macOS:

First, make sure to import the EventKit framework:

```swift
import EventKit
```

Then, you can create a function that retrieves the events:

```swift
func fetchEvents(from startDate: Date, to endDate: Date) -> [EKEvent]? {
    // Create an instance of the event store
    let eventStore = EKEventStore()

    // Request access to the calendar
    var isAccessGranted = false
    eventStore.requestAccess(to: .event) { (granted, error) in
        isAccessGranted = granted
    }

    // Check if access is granted
    guard isAccessGranted else {
        print("Access to the calendar is denied")
        return nil
    }

    // Create a predicate to search for events
    let eventsPredicate = eventStore.predicateForEvents(withStart: startDate, end: endDate, calendars: nil)

    // Fetch events matching the predicate
    let events = eventStore.events(matching: eventsPredicate)
    return events
}
```

This function takes two `Date` objects representing the start and end of the range you want to query. It requests access to the user's calendar, checks if access is granted, and then fetches the events within the given date range.

Keep in mind that requesting access to the calendar is an asynchronous operation. In a real-world application, you should handle the asynchronous nature of this operation appropriately, possibly using callbacks, closures, or other asynchronous patterns.

Also, don't forget to handle the user's privacy and permissions correctly. The user must grant your application access to their calendar data, and you should inform them about how you intend to use this data. 

Lastly, you need to add the `NSCalendarsUsageDescription` key to your app's Info.plist file to describe why your app needs access to the user’s calendar.