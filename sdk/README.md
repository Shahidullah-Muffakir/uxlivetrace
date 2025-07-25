
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
* 🚧 Visual session replay (https://github.com/Shahidullah-Muffakir/uxlivetrace/blob/main/dashboard.html)
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

* SDK: TypeScript + ESBuild
* Server: Node.js + WebSocket (ws)
* Dev Tools: tsx, nodemon

---

## ✅ Features Implemented   
* [x] Capture `click, navigation, scroll, input, resize, keydown, visibilitychange, mousemove, and network` events in browser
* [x] WebSocket connection to server
* [x] Event batching and throttling
* [x] Real-time event logging on server
* [x] TypeScript build/watch with `esbuild`
* [x] Published SDK as npm package (`ux-events-inspector`)


## 🛠️ Running Locally

### 1. Start the WebSocket Server

```
npm run dev
```

This runs `server.ts` using `tsx` and restarts on changes using `nodemon`.

### 2. Watch and Build the SDK

```
npm run watch:sdk
```

This uses `esbuild` to bundle your SDK and watches for changes.

### 3. Embed SDK in a Web Page

If you want to test the local SDK build without npm install, use:

```

  import { initInspector } from './sdk/dist/index.js'

  initInspector({
    serverUrl: 'ws://localhost:3000',
    userId: 'test-user',
    capture: ['click']
  })

```

Use `npx http-server` or any static file server to serve this HTML.

---

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
```