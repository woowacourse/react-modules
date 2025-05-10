import { KeyboardEvent } from 'react';
import getFocusableElements from './getFocusableElements';

const handleFocusWrap = (
  e: KeyboardEvent<HTMLDivElement>,
  contentRef: React.RefObject<HTMLDivElement | null>
) => {
  if (e.key !== 'Tab') return;

  const focusableElements = getFocusableElements(contentRef.current);
  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const isShift = e.shiftKey;
  const currentElement = document.activeElement;

  if (!isShift && currentElement === lastElement) {
    e.preventDefault();
    firstElement.focus();
  }

  if (isShift && currentElement === firstElement) {
    e.preventDefault();
    lastElement.focus();
  }
};

export default handleFocusWrap;
