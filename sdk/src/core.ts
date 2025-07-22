import { openSocket } from "./socket";
import type { Config, UXEvent } from "./types";

let socket: WebSocket;
let eventQueue: UXEvent[] = [];

export function startTracking(config: Config) {
  socket = openSocket(config.serverUrl);

  if (config.capture.includes("click")) {
    document.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const event: UXEvent = {
        type: "click",
        timestamp: Date.now(),
        payload: {
          x: e.clientX,
          y: e.clientY,
          tagName: target.tagName,
        },
        userId: config.userId,
        sessionId: config.sessionId,
      };
      queueEvent(event);
    });
  }

  // TODO: Add router event support
}

function queueEvent(event: UXEvent) {
  eventQueue.push(event);
  if (eventQueue.length >= 5) flushEvents();
}

function flushEvents() {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(eventQueue));
    eventQueue = [];
  }
}
