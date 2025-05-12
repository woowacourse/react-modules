import { useCallback, useEffect, useRef } from 'react';

function useFocusTrap(open: boolean, setOpen: (open: boolean) => void) {
  const contentRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const getFocusableElements = useCallback(() => {
    if (!contentRef.current) return [];

    const focusableSelectors = ['button', '[href]', 'input', 'select', 'textarea', '[tabindex]:not([tabindex="-1"])'];

    const elements = contentRef.current.querySelectorAll<HTMLElement>(focusableSelectors.join(','));

    return Array.from(elements);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

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
    },
    [getFocusableElements, setOpen],
  );

  const setupInitialFocus = useCallback(() => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else if (contentRef.current) {
      contentRef.current.setAttribute('tabindex', '-1');
      contentRef.current.focus();
    }
  }, [getFocusableElements]);

  useEffect(() => {
    if (open) {
      // 모달이 열리기 전 현재 포커스된 요소 저장
      previousFocusRef.current = document.activeElement as HTMLElement;

      // 키보드 이벤트 리스너 등록
      document.addEventListener('keydown', handleKeyDown);

      // 첫 번째 요소에 포커스 - 약간의 지연을 두어 DOM이 완전히 렌더링된 후 실행
      setTimeout(setupInitialFocus, 0);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else if (previousFocusRef.current) {
      // 모달이 닫힐 때 이전 포커스 요소로 복귀
      previousFocusRef.current.focus();
    }
  }, [open, handleKeyDown, setupInitialFocus]);

  return contentRef;
}

export default useFocusTrap;
