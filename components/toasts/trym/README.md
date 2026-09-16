# Random Toast Notifications

A toast notification component that displays a random message type when the user clicks the button.

## How to use

Click the **Show Toast** button to display a notification.

Each toast is randomly selected from the available notification types:

- Success
- Warning
- Error

Toasts can be closed manually using the close button, or they will automatically disappear after 4 seconds.

## Design decisions

- Toasts appear in the top-right corner of the page
- Different colours are used to distinguish success, warning, and error messages
- Toasts are created dynamically using JavaScript
- Each toast includes a close button
- Toasts automatically disappear after 4 seconds
- Multiple toasts can be displayed at the same time

## Known limitations

- Toast messages are currently predefined
- Toast types are selected randomly for demonstration purposes
- Too many notifications may extend beyond the visible page area
