export type Config = {
  serverUrl: string;
  userId?: string;
  sessionId?: string;
  capture: (
    | "click"
    | "navigation"
    | "scroll"
    | "input"
    | "resize"
    | "keydown"
    | "visibilitychange"
    | "mousemove"
  )[];
};

export type navigationType = "pushState" | "replaceState" | "popstate" | "hashchange" | "mutation";
export type UXEvent =
  | {
    type: "click" | "scroll" | "mousemove";
    timestamp: number;
    payload: {
      x?: number;
      y?: number;
      tagName?: string;
      scrollX?: number;
      scrollY?: number;
    };
    userId?: string;
    sessionId?: string;
  }
  | {
    type: "input";
    timestamp: number;
    payload: {
      tagName: string;
      inputType: string;
      name: string;
    };
    userId?: string;
    sessionId?: string;
  }
 | {
    type: "navigation";
    timestamp: number;
    payload: {
      url: string;
      navigationType: navigationType;
    };
    userId?: string;
    sessionId?: string;
  }
  | {
    type: "resize";
    timestamp: number;
    payload: {
      width: number;
      height: number;
    };
    userId?: string;
    sessionId?: string;
  }
  | {
    type: "keydown";
    timestamp: number;
    payload: {
      key: string;
    };
    userId?: string;
    sessionId?: string;
  }
  | {
    type: "visibilitychange";
    timestamp: number;
    payload: {
      state: DocumentVisibilityState;
    };
    userId?: string;
    sessionId?: string;
  };
