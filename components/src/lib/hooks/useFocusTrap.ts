import { RefObject, useEffect, useRef } from 'react';

const findFocusableElements = (element: HTMLElement | ChildNode | null, result: HTMLElement[] = []) => {
  if (!element || element.childNodes.length === 0) return result;

  element.childNodes.forEach((childNode) => {
    const childElement = childNode as HTMLElement;

    if (childElement.nodeType === Node.ELEMENT_NODE && childElement.tabIndex >= 0) {
      result.push(childElement);
    }

    findFocusableElements(childElement, result);
  });

  return result;
};

const useFocusTrap = (isOpen: boolean, modalRef: RefObject<HTMLElement>) => {
  const focusableElements = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    focusableElements.current = findFocusableElements(modalRef.current);

    const firstElement = focusableElements.current[0];
    const lastElement = focusableElements.current.at(-1);

    let currentFocusIndex = -1;

    const moveFocusPrev = () => {
      const element = focusableElements.current[currentFocusIndex - 1];

      if (!element) {
        currentFocusIndex = focusableElements.current.length - 1;
        lastElement?.focus();

        return;
      }

      currentFocusIndex--;
      element.focus();
    };

    const moveFocusNext = () => {
      const element = focusableElements.current[currentFocusIndex + 1];

      if (!element) {
        currentFocusIndex = 0;
        firstElement?.focus();

        return;
      }

      currentFocusIndex++;
      element.focus();
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault();

      if (event.key === 'Tab') {
        if (event.shiftKey) moveFocusPrev();
        else moveFocusNext();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);
};

export default useFocusTrap;
