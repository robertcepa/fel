# Notifications exercise

Implement a notifications panel feature in React. Typically, we want to show a list of notifications for a limited period of time. Notifications should be dismissible and this state should be persisted -- if user decides to dismiss some notification, he shouldn't see it ever again, even after refreshing the page.

An example data is in `data.js`. It is an array of data for each notification. It has the following signature:
``` javascript
{
    id: string, // Unique ID of notification
    label: string, // Text of notification (this is what we want to communicate to our users via our Notification component)
    startDate: string, // Date when a notification becomes visible
    endDate: string // Date when a notification stops being visible
}
```

You already have a pre-styled `<Notification />` component in `components/Notification.js`. It takes following props:
``` javascript 
{
    children: string, // Should be notification label
    onDismiss: () => void // Callback executed on dismiss button click
}
```

Your task is to add implement `<NotificationsPanel />` component in `components/NotificationsPanel.js`.
The data from `data.js` is injected as a prop: `this.props.data`.


