import { Config, UXEvent } from "../types";
import queueEvent from "./queueEvent";

export default function trackScrollEvent(config: Config, eventQueue: UXEvent[], socket: WebSocket) {
  window.addEventListener("scroll", () => {
    const event: UXEvent = {
      type: "scroll",
      timestamp: Date.now(),
      payload: {
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      },
      userId: config.userId,
      sessionId: config.sessionId,
    };
    queueEvent(event, eventQueue, socket);
  });
}
