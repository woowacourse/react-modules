import { useEffect, useRef } from 'react';

function useClickOutside<T extends HTMLElement = HTMLElement>(
  callback: (event: Event) => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener('click', listener, true);
    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [ref]);

  return ref;
}

export default useClickOutside;
