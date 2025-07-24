import { Config, UXEvent } from "../types";
import queueEvent from "./queueEvent";

function trackNetworkEvents(config: Config, eventQueue: UXEvent[] = [], socket: WebSocket) {
  function sendStatus(online: boolean) {
    const connection = (navigator as any).connection || {};
    const networkEvent: UXEvent = {
      type: "network",
      timestamp: Date.now(),
      payload: {
        online,
        type: connection.type,
        effectiveType: connection.effectiveType,
      },
      userId: config.userId,
      sessionId: config.sessionId,
    };
    queueEvent(networkEvent, eventQueue, socket);
  }

  window.addEventListener("online", () => sendStatus(true));
  window.addEventListener("offline", () => sendStatus(false));

  // Optionally, send initial status
  sendStatus(navigator.onLine);
}

export default trackNetworkEvents;
