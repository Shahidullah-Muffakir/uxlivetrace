import { Config, UXEvent } from "../types";
import queueEvent from "./queueEvent";

export default function trackKeydownEvent(config: Config, eventQueue: UXEvent[], socket: WebSocket) {
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    const event: UXEvent = {
      type: "keydown",
      timestamp: Date.now(),
      payload: {
        key: e.key,
      },
      userId: config.userId,
      sessionId: config.sessionId,
    };
    queueEvent(event, eventQueue, socket);
  });
}
