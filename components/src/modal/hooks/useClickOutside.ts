import { useEffect, useRef } from 'react';

function useClickOutside<T extends HTMLElement = HTMLElement>(
  callback: (event: Event) => void,
  enabled: boolean = true
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

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
