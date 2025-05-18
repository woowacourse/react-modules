import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
];

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS.join(',')));
}

function focusFirstElement(elements: HTMLElement[]) {
  if (elements.length > 0) {
    requestAnimationFrame(() => {
      elements[0].focus();
    });
  }
}

function handleTabKeyNavigation(event: KeyboardEvent, focusableElements: HTMLElement[]) {
  const currentIndex = focusableElements.findIndex((el) => el === document.activeElement);
  if (currentIndex === -1) return;

  const first = 0;
  const last = focusableElements.length - 1;

  if (event.shiftKey) {
    // Shift + Tab
    if (currentIndex === first) {
      event.preventDefault();
      focusableElements[last].focus();
    }
  } else {
    // Tab
    if (currentIndex === last) {
      event.preventDefault();
      focusableElements[first].focus();
    }
  }
}

export function useHandleTabKey() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const focusableElements = getFocusableElements(container);
    focusFirstElement(focusableElements);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        handleTabKeyNavigation(e, focusableElements);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return containerRef;
}
