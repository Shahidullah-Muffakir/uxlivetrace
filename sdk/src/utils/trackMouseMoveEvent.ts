import { Config, UXEvent } from "../types";
import queueEvent from "./queueEvent";

export default function trackMouseMoveEvent(config: Config, eventQueue: UXEvent[], socket: WebSocket) {
  document.addEventListener("mousemove", (e: MouseEvent) => {
    const event: UXEvent = {
      type: "mousemove",
      timestamp: Date.now(),
      payload: {
        x: e.clientX,
        y: e.clientY,
      },
      userId: config.userId,
      sessionId: config.sessionId,
    };
    queueEvent(event, eventQueue, socket);
  });
}
