
# ux-events-inspector

[![npm version](https://img.shields.io/npm/v/ux-events-inspector.svg)](https://www.npmjs.com/package/ux-events-inspector)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


> Real-time UX tracking SDK and WebSocket backend for developers, capture user actions in the browser and stream them to a live server. Lightweight, open-source, and perfect for debugging and UX insights.

---

## 🚀 What is ux-events-inspector?

`ux-events-inspector` is a plug-and-play JavaScript SDK and backend combo that helps developers track user interactions (like clicks, navigation, etc) in real time.
---

## 📦 Install from npm

You can install the SDK via npm:

```
npm install ux-events-inspector
```

Import and initialize it in your project like this:

```
import { initInspector } from 'ux-events-inspector';

initInspector({
  serverUrl: 'ws://localhost:3000', //websocket sever url
  userId: 'your-user-id',
  capture: ['click']
});
```

---

## 🎯 Project Goals

* ✅ Capture real-time user events (clicks, navigation, etc.)
* ✅ Stream those events to a backend via WebSocket
* ✅ Enable live debugging and insight into real user behavior
* 🚧 Visual session replay
* 🚧 NPM package + CDN support (npm package published!)

---

## 🧩 Architecture

```
[ Browser (SDK) ]
     |
     | WebSocket
     v
[ Server (Node.js/ws) ]
     |
     | (future: DB / File storage)
     v
[ Viewer UI / Replay Tool]
```

---

## 📦 Tech Stack

* SDK: TypeScript +WebScoket
* A Simple Server: Node.js + WebSocket (ws)

---

## ✅ Features Implemented   
* [x] Capture `click, navigation, scroll, input, resize, keydown, visibilitychange, mousemove, and network` events in browser
* [x] WebSocket connection to server
* [x] Event batching and throttling
* [x] Real-time event logging on server
* [x] TypeScript build/watch with `esbuild`
* [x] Published SDK as npm package (`ux-events-inspector`)


## 🛠️ Running


### 1. Start the WebSocket Server

First, start your WebSocket server to receive socket events:
A simple example server: https://github.com/Shahidullah-Muffakir/uxlivetrace/blob/main/server.ts

### 2. Use the SDK Package in Your Project

Install the published SDK package 

```
npm install ux-events-inspector
```

### 3. Import and Initialize the SDK

In your web app, import the SDK from the npm package and initialize it using your WebSocket server URL:

```
import { initInspector } from 'ux-events-inspector';

initInspector({
  serverUrl: 'ws://localhost:3000',  // Use your WebSocket server URL here
  userId: 'your-user-id',
  capture: ['click, navigation'] // add all the events you want to track
});
```

### 4. Dashboard for visual session replay

Your web page that includes the SDK will connect to the WebSocket server and stream real-time UX events.

Now, your dashboard or any viewer UI should subscribe to the **same WebSocket server URL** to receive the user interaction events live. This setup enables the dashboard to listen for and display incoming events from users as they happen
A simple dashboard example:https://github.com/Shahidullah-Muffakir/uxlivetrace/blob/main/dashboard.html


## 🔍 Example Server Output

```
Client connected
Received event batch: [{ type: 'click', ... }]
[click] from test-user at (x, y)
```

---

## 🧠 Why This Project?

* Developers need fast, plug-and-play tools to debug UX issues.
* Existing tools are often bloated, expensive, or closed-source.
* `ux-events-inspector` aims to give you full control and minimal friction.

---

## 📬 Contributing & Ideas

Have ideas? Want to build the visual replay tool, dashboard, or improve packaging/CDN support? PRs welcome — open an issue or submit a pull request!

---

## 📜 License

MIT — use it freely, improve it, fork it, share it.

---

## 🗣️ Elevator Pitch

> A real-time, open-source UX inspector for devs. Capture user clicks, stream via WebSocket, and see what your users are doing — live. 