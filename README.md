# uxlivetrace

> Real-time UX tracking SDK and WebSocket backend for developers — capture user actions in the browser and stream them to a live server. Lightweight, open-source, and perfect for debugging and UX insights.

---

## 🚀 What is uxlivetrace?

`uxlivetrace` is a plug-and-play JavaScript SDK and backend combo that helps developers track user interactions (like clicks) in real time. Think of it as a lightweight, open-source alternative to tools like LogRocket or Highlight.io.

---

## 🎯 Project Goals

* ✅ Capture real-time user events (clicks, navigation, etc.)
* ✅ Stream those events to a backend via WebSocket
* ✅ Enable live debugging and insight into real user behavior
* 🚧 Visual session replay (coming soon)
* 🚧 Simple dashboard for devs (coming soon)

---

## 🧩 Architecture

```txt
[ Browser (SDK) ]
     |
     | WebSocket
     v
[ Server (Node.js/ws) ]
     |
     | (future: DB / File storage)
     v
[ Viewer UI / Replay Tool (Planned) ]
```

---

## 📦 Tech Stack

* SDK: TypeScript + ESBuild
* Server: Node.js + WebSocket (ws)
* Dev Tools: tsx, nodemon

---

## ✅ Features Implemented

* [x] Capture `click` events in browser
* [x] WebSocket connection to server
* [x] Event batching and throttling
* [x] Real-time event logging on server
* [x] TypeScript build/watch with `esbuild`

---

## 📍 Next Features

* [ ] Session + user ID tracking
* [ ] Input, navigation, and error event tracking
* [ ] Persistent storage (e.g., JSON/SQLite)
* [ ] Simple web-based session viewer
* [ ] Visual session replay (like LogRocket)
* [ ] NPM package + CDN support

---

## 🛠️ Running Locally

### 1. Start the WebSocket Server

```bash
npm run dev
```

This runs `server.ts` using `tsx` and restarts on changes using `nodemon`.

### 2. Watch and Build the SDK

```bash
npm run watch:sdk
```

This uses `esbuild` to bundle your SDK and watches for changes.

### 3. Embed SDK in a Web Page

```html
<button>Click me</button>
<script type="module">
  import { initInspector } from './sdk/dist/index.js'

  initInspector({
    serverUrl: 'ws://localhost:3000',
    userId: 'test-user',
    capture: ['click']
  })
</script>
```

Use `npx http-server` or any static file server to serve this HTML.

---

## 🔍 Example Server Output

```txt
Client connected
Received event batch: [{ type: 'click', ... }]
[click] from test-user at (x, y)
```

---

## 🧠 Why This Project?

* Developers need fast, plug-and-play tools to debug UX issues.
* Existing tools are often bloated, expensive, or closed-source.
* `uxlivetrace` aims to give you full control and minimal friction.

---

## 📬 Contributing & Ideas

Have ideas? Want to build the visual replay tool or dashboard? PRs welcome, or open an issue!

---

## 📜 License

MIT — use it freely, improve it, fork it, share it.

---

## 🗣️ Elevator Pitch

> A real-time, open-source UX inspector for devs. Capture user clicks, stream via WebSocket, and see what your users are doing — live. Like LogRocket lite, but faster and fully yours.
