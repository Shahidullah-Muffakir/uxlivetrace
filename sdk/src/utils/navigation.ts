import { Config, UXEvent } from "../types";
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
    // Method 1: pushState and replaceState
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
        originalPushState.apply(window.history, args);
        const url = window.location.href;
        const navigationEvent: UXEvent = {
            type: 'navigation',
            timestamp: Date.now(),
            payload: {
                url,
            },
            userId: config.userId,
            sessionId: config.sessionId,
        };
        queueEvent(navigationEvent, eventQueue, socket);
    };

    window.history.replaceState = function (...args) {
        originalReplaceState.apply(window.history, args);
        const url = window.location.href;
        const navigationEvent: UXEvent = {
            type: 'navigation',
            timestamp: Date.now(),
            payload: {
                url,
            },
            userId: config.userId,
            sessionId: config.sessionId,
        };
        queueEvent(navigationEvent, eventQueue, socket);

    };

    // Method 2: popstate event
    window.addEventListener('popstate', () => {
        const url = window.location.href;
        const navigationEvent: UXEvent = {
            type: 'navigation',
            timestamp: Date.now(),
            payload: {
                url,
            },
            userId: config.userId,
            sessionId: config.sessionId,
        };
        queueEvent(navigationEvent, eventQueue, socket);

    });

    // Method 3: window.location
    const originalHref = window.location.href;
    window.addEventListener('load', () => {
        if (window.location.href !== originalHref) {
            const url = window.location.href;
            const navigationEvent: UXEvent = {
                type: 'navigation',
                timestamp: Date.now(),
                payload: {
                    url,
                },
                userId: config.userId,
                sessionId: config.sessionId,
            };
            queueEvent(navigationEvent, eventQueue, socket);

        }
    });

    // Method 4: onhashchange event
    window.onhashchange = () => {
        const url = window.location.href;
        const navigationEvent: UXEvent = {
            type: 'navigation',
            timestamp: Date.now(),
            payload: {
                url,
            },
            userId: config.userId,
            sessionId: config.sessionId,
        };
        queueEvent(navigationEvent, eventQueue, socket);

    };

    // Method 5: MutationObserver
    const observer = new MutationObserver(() => {
        const url = window.location.href;
        const navigationEvent: UXEvent = {
            type: 'navigation',
            timestamp: Date.now(),
            payload: {
                url,
            },
            userId: config.userId,
            sessionId: config.sessionId,
        };
        queueEvent(navigationEvent, eventQueue, socket);

    });

    observer.observe(document, {
        childList: true,
        subtree: true,
    });
}

export default trackNavigationEvents;