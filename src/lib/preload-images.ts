/** Warm the browser cache and decode images so slider swaps are instant. */
export function preloadImages(urls: string[]) {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.decoding = "async";
          img.onload = () => {
            if (typeof img.decode === "function") {
              img.decode().then(() => resolve()).catch(() => resolve());
              return;
            }
            resolve();
          };
          img.onerror = () => resolve();
          img.src = url;
        }),
    ),
  ).then(() => undefined);
}
