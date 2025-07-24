import { Config, UXEvent } from "../types";
import queueEvent from "./queueEvent";

export default function trackVisibilityEvent(config: Config, eventQueue: UXEvent[], socket: WebSocket) {
  document.addEventListener("visibilitychange", () => {
    const event: UXEvent = {
      type: "visibilitychange",
      timestamp: Date.now(),
      payload: {
        state: document.visibilityState,
      },
      userId: config.userId,
      sessionId: config.sessionId,
    };
    queueEvent(event, eventQueue, socket);
  });
}
