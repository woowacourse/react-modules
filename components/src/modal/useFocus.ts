import { useRef, useMemo } from 'react';

function useFocusTrap(open: boolean) {
  const firstRef = useRef<HTMLElement | null>(null);
  const lastRef = useRef<HTMLElement | null>(null);

  const findFocusable = (
    modal: HTMLElement,
    focusableList: HTMLElement[] = []
  ) => {
    for (const child of Array.from(modal.children) as HTMLElement[]) {
      if (child.tabIndex >= 0) {
        focusableList.push(child);
      }

      findFocusable(child, focusableList);
    }

    return focusableList;
  };

  const setRef = (modal: HTMLDialogElement) => {
    if (!modal || !open) {
      return;
    }

    const focusableList = findFocusable(modal);
    if (focusableList.length === 0) {
      return;
    }

    firstRef.current = focusableList[0];
    lastRef.current = focusableList[focusableList.length - 1];

    firstRef.current.focus();
  };

  const handleKeyDownTab = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') {
      return;
    }

    if (event.shiftKey && document.activeElement === firstRef.current) {
      event.preventDefault();
      lastRef.current?.focus();
    }

    if (document.activeElement === lastRef.current) {
      event.preventDefault();
      firstRef.current?.focus();
    }
  };

  return useMemo(() => ({ setRef, handleKeyDownTab }), [open]);
}

export default useFocusTrap;
