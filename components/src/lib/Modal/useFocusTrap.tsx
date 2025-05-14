import {useEffect, useRef} from 'react';

const focusableSelector = [
  'a[href]',
  'button',
  'textarea',
  'input[type="text"]',
  'input[type="radio"]',
  'input[type="checkbox"]',
  'select',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const useFocusTrap = (onClose: () => void) => {
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;

    if (!container) return;

    const focusableElements = (container as HTMLElement).querySelectorAll(
      focusableSelector
    );

    if (!focusableElements) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
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
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  return ref;
};

export default useFocusTrap;
