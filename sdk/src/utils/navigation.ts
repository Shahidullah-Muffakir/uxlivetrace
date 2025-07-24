import { Config, navigationType, UXEvent } from "../types";
import queueEvent from "./queueEvent";
/**
 * 


1. **`pushState`**: Called when the user clicks on a link that has a `href` attribute, or when JavaScript code calls `pushState` explicitly.
    <a href="https://www.example.com">Visit example.com</a>
2. **`replaceState`**: Called when the user clicks on a link that has a `href` attribute and the `replace` attribute is set to `true`, or when JavaScript code calls `replaceState` explicitly.
3. **`popstate`**: Called when the user navigates back or forward using the browser's back and forward buttons.
4. **`onhashchange`**: Called when the URL's hash changes, such as when the user clicks on an anchor link.
    <a href="#top">Go to top</a>
    <div id="top">Top of the page</div>
5. **`MutationObserver`**: Called when the `window.location` object changes, such as when the user navigates to a new page.

Note that these methods can also be called programmatically by JavaScript code, in addition to being triggered by user interactions.
 */

function trackNavigationEvents(config: Config, eventQueue: UXEvent[] = [], socket: WebSocket) {
    const sendEvent = (type: navigationType) => {
        const event: UXEvent = {
            type: "navigation",
            timestamp: Date.now(),
            payload: {
                url: window.location.href,
                navigationType: type,
            },
            userId: config.userId,
            sessionId: config.sessionId,
        };
        queueEvent(event, eventQueue, socket);
    };

    // Override pushState
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
        const result = originalPushState.apply(this, args);
        sendEvent("pushState");
        return result;
    };

    // Override replaceState
    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
        const result = originalReplaceState.apply(this, args);
        sendEvent("replaceState");
        return result;
    };

    // Listen for back/forward
    window.addEventListener("popstate", () => sendEvent("popstate"));

    // Listen for anchor hash changes (e.g. #top)
    window.addEventListener("hashchange", () => sendEvent("hashchange"));

    // Optional: MutationObserver (not typically needed for URL tracking)
    const observer = new MutationObserver(() => {
        sendEvent("mutation");
    });

    observer.observe(document, { childList: true, subtree: true });
}

export default trackNavigationEvents;
