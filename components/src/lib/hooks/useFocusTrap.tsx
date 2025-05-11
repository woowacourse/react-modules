import { useCallback, useEffect, useRef } from 'react';

/**
 * @description
 * useFocusTrap 훅은 모달이나 드롭다운과 같은 컴포넌트에서 포커스를 제한하는 기능을 제공합니다.
 * 이 훅은 포커스가 컴포넌트 내부에만 머물도록 하여 사용자가 키보드로 탐색할 때
 * 외부 요소로 포커스가 이동하지 않도록 합니다.
 *
 * @param {boolean} isOpen - 모달이나 드롭다운이 열려 있는지 여부
 * @property {React.RefObject<HTMLElement>} refContainer - 포커스를 제한할 요소의 ref
 * @property {function} handleKeyDown - 키보드 이벤트 핸들러
 * @returns {object} refContainer, handleKeyDown
 */
export const useFocusTrap = (isOpen: boolean) => {
  const refContainer = useRef<HTMLElement>(null);
  const firstFocusableRef = useRef<HTMLElement | null>(null);
  const lastFocusableRef = useRef<HTMLElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const getFocusableElements = useCallback(() => {
    if (!refContainer.current) return [];

    return Array.from(
      refContainer.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute('disabled') && el.offsetWidth > 0);
  }, []);

  const updateFocusableRefs = useCallback(() => {
    const focusableElements = getFocusableElements();

    if (focusableElements.length !== 0) {
      firstFocusableRef.current = focusableElements[0];
      lastFocusableRef.current = focusableElements[focusableElements.length - 1];
    }
  }, [getFocusableElements]);

  const preventFocusEscape = useCallback(
    (e: FocusEvent) => {
      if (refContainer.current && !refContainer.current.contains(e.target as Node) && isOpen) {
        e.preventDefault();
        if (!firstFocusableRef.current) updateFocusableRefs();
        firstFocusableRef.current?.focus();
      }
    },
    [isOpen, updateFocusableRefs]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (!firstFocusableRef.current || !lastFocusableRef.current) {
        updateFocusableRefs();
        if (!firstFocusableRef.current || !lastFocusableRef.current) return;
      }

      if (e.shiftKey && document.activeElement === firstFocusableRef.current) {
        e.preventDefault();
        lastFocusableRef.current.focus();
      }

      if (!e.shiftKey && document.activeElement === lastFocusableRef.current) {
        e.preventDefault();
        firstFocusableRef.current.focus();
      }
    },
    [updateFocusableRefs]
  );

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    document.addEventListener('focusin', preventFocusEscape);

    return () => {
      document.removeEventListener('focusin', preventFocusEscape);
      if (!isOpen) {
        previousActiveElement.current?.focus();
      }
    };
  }, [isOpen, preventFocusEscape]);

  return { refContainer, handleKeyDown };
};
