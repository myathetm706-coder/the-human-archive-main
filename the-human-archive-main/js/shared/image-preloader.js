/* ============================================================================
   THE HUMAN ARCHIVE — SHARED IMAGE WARM-UP
   Preloads the local WebP library quietly after the opening screen is ready.
   Images that become visible can promote an existing request to high priority.
   ============================================================================ */
(() => {
  "use strict";

  const IMAGE_PATHS = Object.freeze([
    "assets/images/apollo-11-flag-aldrin-as11-40-5875.webp",
    "assets/images/apollo-11-lro-landing-site.webp",
    "assets/images/apollo-14-laser-retroreflector-closeup-as14-67-9386.webp",
    "assets/images/fallen-astronaut-as15-88-11894.webp",
    "assets/images/gusev-crater-map.webp",
    "assets/images/ingenuity-flight-72-damaged.webp",
    "assets/images/ingenuity-flight-path-optimized.webp",
    "assets/images/ingenuity-mars-helicopter.webp",
    "assets/images/lunar-laser-retroreflector-array.webp",
    "assets/images/mars-surface-map.webp",
    "assets/images/opportunity-rover-greeley-panorama.webp",
    "assets/images/pioneer-plaque-artwork.webp",
    "assets/images/rtg-installation-alsep.webp",
    "assets/images/rtg-photograph-alsep.webp",
    "assets/images/sky-crane-landing-system.webp",
    "assets/images/sojourner-and-yogi.webp",
    "assets/images/sojourner-rover-mars-surface.webp",
    "assets/images/spirit-rover-gusev-crater.webp",
    "assets/images/voyager-spacecraft-golden-record.webp"
  ]);

  const warmed = new Map();
  let allImagesPromise = null;

  function preloadImage(path, priority = "low") {
    let url;
    try {
      url = new URL(path, document.baseURI || window.location.href).href;
    } catch (error) {
      console.warn("THE HUMAN ARCHIVE: invalid image path:", path, error);
      return Promise.resolve(false);
    }

    const existing = warmed.get(url);
    if (existing) {
      if (priority === "high" && existing.priority !== "high") {
        existing.priority = "high";
        try { existing.image.fetchPriority = "high"; } catch (_) { /* optional browser hint */ }
      }
      return existing.promise;
    }

    const image = new Image();
    image.decoding = "async";
    image.loading = "eager";
    try { image.fetchPriority = priority; } catch (_) { /* optional browser hint */ }

    let settle;
    let settled = false;
    const promise = new Promise((resolve) => { settle = resolve; });
    const finish = (loaded) => {
      if (settled) return;
      settled = true;
      settle(loaded);
    };

    image.onload = async () => {
      try {
        if (typeof image.decode === "function") await image.decode();
      } catch (_) {
        // A decoded-image cache is an enhancement; a successful download is enough.
      }
      finish(image.naturalWidth > 0);
    };
    image.onerror = () => finish(false);

    warmed.set(url, { image, promise, priority });
    image.src = url;
    if (image.complete && image.naturalWidth > 0) finish(true);
    return promise;
  }

  function preloadMany(paths, priority = "low") {
    return Promise.all((Array.isArray(paths) ? paths : []).map((path) => preloadImage(path, priority)));
  }

  function warmAll() {
    if (!allImagesPromise) allImagesPromise = preloadMany(IMAGE_PATHS, "low");
    return allImagesPromise;
  }

  window.THAPreloadImages = Object.freeze({ preloadImage, preloadMany, warmAll });

  function scheduleWarmUp() {
    const begin = () => { void warmAll(); };
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(begin, { timeout: 1400 });
    } else {
      window.setTimeout(begin, 320);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleWarmUp, { once: true });
  } else {
    scheduleWarmUp();
  }
})();
