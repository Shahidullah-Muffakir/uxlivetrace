import { Config, UXEvent } from "../types";
import queueEvent from "./queueEvent";

export default function trackResizeEvent(config: Config, eventQueue: UXEvent[], socket: WebSocket) {
  window.addEventListener("resize", () => {
    const event: UXEvent = {
      type: "resize",
      timestamp: Date.now(),
      payload: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      userId: config.userId,
      sessionId: config.sessionId,
    };
    queueEvent(event, eventQueue, socket);
  });
}
