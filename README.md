# Todo App with Progressive Web App (PWA) Capabilities

This project is a simple Todo Application that utilizes the features of Progressive Web Apps to deliver a robust, offline-first experience to its users. It's created with vanilla JavaScript, and uses the IndexedDB API for persistent data storage.

## Features

- **Add and Display Todos**: The main functionality of this app is to allow users to add tasks to their todo list and to display the list of current tasks.
- **Offline Support**: Through the use of a service worker and the Cache API, the app can be used even when the user is offline.
- **Persistent Data**: Data is stored in IndexedDB, which means the user's todos will still be there even if they close their browser or turn off their computer.
- **Installable**: Users can install this app on their device like a native app, thanks to the Web App Manifest and the service worker.

## Installation

You can clone this repository and serve the app locally using a simple HTTP server.

```
git clone https://github.com/AIbnuHIbban/pwa-example-todo-list.git todo-app
cd todo-app
```

To install an HTTP server, you can use `http-server` from npm:

```
npm install -g http-server
```

Then, to serve the app:

```
http-server
```

Now, you can go to `http://localhost:8080` in your browser to see the app.

## More Information

For more information about this project, including its development process and how the various PWA features work, check out ([Personal Blog](https://s.id/aibnuhibbanWeb)).

## Contributions

Contributions are always welcome! Feel free to open an issue or submit a pull request if you have something to add or change.