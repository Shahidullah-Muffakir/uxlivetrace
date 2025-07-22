export type Config ={
    serverUrl: string
    userId?: string
    sessionId?: string
    capture: ("click" | "navigate" | "scroll" | "input"| "mousemove" | "navigation")[]
}
  
export type UXEvent =
  | {
      type: "click" | "scroll" | "mousemove";
      timestamp: number;
      payload: { x?: number; y?: number; tagName?: string };
      userId?: string;
      sessionId?: string;
    }
  | {
      type: "input";
      timestamp: number;
      payload: { tagName: string; value: string; name: string | null };
      userId?: string;
      sessionId?: string;
    }
  | {
      type: "navigation";
      timestamp: number;
      payload: { url: string };
      userId?: string;
      sessionId?: string;
    };
