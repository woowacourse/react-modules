import { useEffect, useRef } from 'react';

export const useHandleTabKey = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const arr = ref.current?.querySelectorAll('button,input');
    const first = arr?.[0] as HTMLButtonElement | HTMLInputElement;
    const last = arr?.[arr.length - 1] as HTMLButtonElement | HTMLInputElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };
    first?.focus();
    document.addEventListener('keydown', handleTab);
    return () => {
      document.removeEventListener('keydown', handleTab);
    };
  }, []);

  return ref;
};
