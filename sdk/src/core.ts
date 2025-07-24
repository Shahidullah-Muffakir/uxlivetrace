import { openSocket } from "./socket";
import type { Config, UXEvent } from "./types";

import trackClickEvent from "./utils/click";
import trackNavigationEvents from "./utils/navigation";
import trackScrollEvent from "./utils/trackScrollEvent";
import trackInputEvent from "./utils/trackInputEvent";
import trackResizeEvent from "./utils/trackResizeEvent";
import trackKeydownEvent from "./utils/trackKeydownEvent";
import trackVisibilityEvent from "./utils/trackVisibilityEvent";
import trackMouseMoveEvent from "./utils/trackMouseMoveEvent";

let socket: WebSocket;
let eventQueue: UXEvent[] = [];

export default function startTracking(config: Config) {
  socket = openSocket(config.serverUrl);

  const { capture = [] } = config;

  if (capture.includes("click")) {
    trackClickEvent(config, eventQueue, socket);
  }
  if (capture.includes("navigation")) {
    trackNavigationEvents(config, eventQueue, socket);
  }
  if (capture.includes("scroll")) {
    trackScrollEvent(config, eventQueue, socket);
  }
  if (capture.includes("input")) {
    trackInputEvent(config, eventQueue, socket);
  }
  if (capture.includes("resize")) {
    trackResizeEvent(config, eventQueue, socket);
  }
  if (capture.includes("keydown")) {
    trackKeydownEvent(config, eventQueue, socket);
  }
  if (capture.includes("visibilitychange")) {
    trackVisibilityEvent(config, eventQueue, socket);
  }
  if (capture.includes("mousemove")) {
    trackMouseMoveEvent(config, eventQueue, socket);
  }
}
