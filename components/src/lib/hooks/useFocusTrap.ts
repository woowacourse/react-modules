import { RefObject, useEffect, useRef } from 'react';

const FOCUSABLE_SELECTORS =
  'button:not([disabled]), input:not([disabled]), select:not([disabled], textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

const useFocusTrap = (isOpen: boolean, modalRef: RefObject<HTMLElement>) => {
  const focusableElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    focusableElements.current = Array.from(modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));

    if (focusableElements.current.length === 0) return;

    const moveFocusIndexPrev = (currentIndex: number) =>
      currentIndex === 0 ? focusableElements.current.length - 1 : currentIndex - 1;

    const moveFocusIndexNext = (currentIndex: number) =>
      currentIndex === focusableElements.current.length - 1 ? 0 : currentIndex + 1;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        event.preventDefault();

        const currentIndex = focusableElements.current.findIndex((el) => el === document.activeElement);
        const nextIndex = event.shiftKey ? moveFocusIndexPrev(currentIndex) : moveFocusIndexNext(currentIndex);

        focusableElements.current[nextIndex].focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, modalRef]);
};

export default useFocusTrap;
