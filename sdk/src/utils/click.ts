import { Config, UXEvent } from "../types";
import queueEvent from "./queueEvent";

function trackClickEvent(config: Config, eventQueue: UXEvent[] = [], socket: WebSocket) {
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
        queueEvent(event, eventQueue, socket);
    });
}


export default trackClickEvent;