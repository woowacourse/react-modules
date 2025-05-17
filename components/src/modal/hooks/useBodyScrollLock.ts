import { useEffect } from 'react';

/**
 * 모달 등 오버레이가 열렸을 때 페이지의 스크롤을 막는 훅입니다.
 *
 * @param open - true일 경우 body의 스크롤을 비활성화하고, false일 경우 다시 활성화합니다.
 */
export function useBodyScrollLock(open: boolean) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
}
