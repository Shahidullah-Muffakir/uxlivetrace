import { Config, UXEvent } from "../types";
import queueEvent from "./queueEvent";

export default function trackInputEvent(config: Config, eventQueue: UXEvent[], socket: WebSocket) {
  document.addEventListener("input", (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (!target || !target.tagName) return;

    const event: UXEvent = {
      type: "input",
      timestamp: Date.now(),
      payload: {
        tagName: target.tagName,
        inputType: target.type,
        name: target.name,
      },
      userId: config.userId,
      sessionId: config.sessionId,
    };
    queueEvent(event, eventQueue, socket);
  });
}
