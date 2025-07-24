import { UXEvent } from "../types";

function queueEvent(event: UXEvent, eventQueue: UXEvent[] = [], socket: WebSocket) {
  eventQueue.push(event);
  if (eventQueue.length >= 5) flushEvents(socket, eventQueue);
}

function flushEvents(socket: WebSocket, eventQueue: UXEvent[]) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(eventQueue));
    eventQueue = [];
  }
}

export default queueEvent;