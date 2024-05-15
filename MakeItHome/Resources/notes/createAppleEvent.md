To create an event on a particular day in the user's calendar using EventKit in Swift for macOS, follow these steps:

1. **Import EventKit**: First, you need to import the EventKit framework.

    ```swift
    import EventKit
    ```

2. **Request Access**: Before you can create an event, you must request and gain permission to access the user's calendar.

3. **Create an Event**: If access is granted, you can proceed to create and configure the event.

4. **Save the Event**: Finally, you save the event to the user's calendar.

Here's an example function that demonstrates these steps:

```swift
func createEvent(title: String, startDate: Date, endDate: Date) {
    let eventStore = EKEventStore()

    eventStore.requestAccess(to: .event) { (granted, error) in
        if granted && error == nil {
            let event = EKEvent(eventStore: eventStore)
            event.title = title
            event.startDate = startDate
            event.endDate = endDate
            event.calendar = eventStore.defaultCalendarForNewEvents

            do {
                try eventStore.save(event, span: .thisEvent)
                print("Event created successfully")
            } catch let error as NSError {
                print("Failed to create event: \(error)")
            }
        } else {
            print("Access denied or error: \(String(describing: error))")
        }
    }
}
```

To use this function, call it with the desired event title, start date, and end date:

```swift
let title = "My Event"
let startDate = Date() // for example, today
let endDate = Date().addingTimeInterval(3600) // for example, 1 hour from now

createEvent(title: title, startDate: startDate, endDate: endDate)
```

### Important Notes:
- **Asynchronous Nature**: The access request to the event store is asynchronous. Handle this appropriately in your app, especially in a user interface context.
- **User Permission**: The user must explicitly grant your app permission to access their calendar. Ensure that your app's Info.plist file contains an appropriate message for the `NSCalendarsUsageDescription` key, explaining why your app needs access to the calendar.
- **Error Handling**: The code above includes basic error handling, but you may want to expand this depending on your application's needs.
- **Date and Time**: Make sure the `startDate` and `endDate` are correctly set. The dates should be instances of `Date` and represent the exact start and end times you want for the event.