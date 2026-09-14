(() => {
  'use strict';

  const blockedHosts = [
    'doubleclick.net',
    'googlesyndication.com',
    'googleadservices.com',
    'adservice.google.com',
    'ads.yahoo.com',
    'adnxs.com',
    'taboola.com',
    'outbrain.com',
  ];

  const blockedSelectors = [
    'iframe[src*="doubleclick"]',
    'iframe[src*="googlesyndication"]',
    'iframe[src*="adservice"]',
    'script[src*="doubleclick"]',
    'script[src*="googlesyndication"]',
    'script[src*="googleadservices"]',
    '[id^="google_ads"]',
    '[class*="advertisement"]',
    '[class*="ad-container"]',
  ];

  const isBlockedUrl = (value) => {
    try {
      const url = new URL(value, window.location.href);
      return blockedHosts.some(
        (host) => url.hostname === host || url.hostname.endsWith(`.${host}`),
      );
    } catch {
      return false;
    }
  };

  const removeBlockedElements = (root = document) => {
    root.querySelectorAll(blockedSelectors.join(',')).forEach((element) => {
      element.remove();
    });
  };

  const blockAdResources = (event) => {
    const element = event.target;
    if (
      element instanceof HTMLScriptElement ||
      element instanceof HTMLIFrameElement ||
      element instanceof HTMLImageElement
    ) {
      const source = element.src || element.currentSrc;
      if (isBlockedUrl(source)) {
        element.remove();
      }
    }
  };

  removeBlockedElements();
  document.addEventListener('beforescriptexecute', blockAdResources, true);

  new MutationObserver((mutations) => {
    mutations.forEach(({ addedNodes }) => {
      addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          removeBlockedElements(node);
          blockAdResources({ target: node });
        }
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
