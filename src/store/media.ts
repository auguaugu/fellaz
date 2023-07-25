import { readable } from 'svelte/store';

const mediaQueryStore = (mediaQueryString: string) => {
  const mediaQueryList = window.matchMedia(mediaQueryString);

  const mediaStore = readable(mediaQueryList.matches, (set) => {
    const handler = () => set(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handler);
    return () => mediaQueryList.removeEventListener('change', handler);
  });
  return mediaStore;
};

export const isMobile = mediaQueryStore('(max-width: 768px)');
export const isLaptop = mediaQueryStore('(max-width: 1280px)');
