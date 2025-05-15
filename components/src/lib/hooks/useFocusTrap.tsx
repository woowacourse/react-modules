import { useEffect, useRef } from 'react';

type FocusableSelector =
  | 'a[href]'
  | 'button'
  | 'textarea'
  | 'input'
  | 'select'
  | '[tabindex]:not([tabindex="-1"])';

export function useFocusTrap(isOpen: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen || !ref.current) return;

    const selectors: FocusableSelector[] = [
      'a[href]',
      'button',
      'textarea',
      'input',
      'select',
      '[tabindex]:not([tabindex="-1"])',
    ];
    const modalElement = ref.current;
    const nodes = Array.from(
      modalElement.querySelectorAll<HTMLElement>(selectors.join(','))
    );
    if (nodes.length === 0) return;
    const firstElement = nodes[0];
    const lastElement = nodes[nodes.length - 1];

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    modalElement.addEventListener('keydown', handleKeyDown);
    return () => {
      modalElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return ref;
}
