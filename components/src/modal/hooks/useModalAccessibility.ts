import { useEffect } from 'react';

/**
 * 모달이 열릴 때 웹 접근성을 향상시키기 위한 훅입니다.
 * - 첫 번째 포커스 가능한 요소로 포커스를 이동시킵니다.
 * - 키보드 Tab 이동을 모달 내에서 순환시킵니다.
 * - Escape 키를 누르면 모달을 닫습니다.
 *
 * @param open - 모달이 열려 있는지 여부입니다.
 * @param onClose - 모달을 닫을 때 호출되는 콜백 함수입니다.
 * @param modalRef - 포커스 관리 대상이 되는 모달 요소의 ref입니다.
 */
export function useModalAccessibility(
  open: boolean,
  onClose: () => void,
  modalRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!open) return;

    const allFocusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const focusableList = Array.from(allFocusable || []).filter(
      (element) => !element.hasAttribute('disabled') && element.tabIndex !== -1
    );

    if (focusableList.length > 0) {
      const firstFocusable = focusableList[0];
      const isFirstButtonCloseButton =
        firstFocusable.getAttribute('aria-label') === '모달 닫기 버튼';

      (isFirstButtonCloseButton ? focusableList[1] : firstFocusable)?.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !focusableList.length) return;

      const firstElement = focusableList[0];
      const lastElement = focusableList[focusableList.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, modalRef]);
}
