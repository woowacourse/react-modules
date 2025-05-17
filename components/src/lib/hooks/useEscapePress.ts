import { useEffect } from 'react';

const useEscapeKeyClose = (closeOnEscape: boolean, isOpen: boolean, onClose: () => void) => {
  useEffect(() => {
    if (!closeOnEscape) return;
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    addEventListener('keydown', handleKeyDown);

    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);
};

export default useEscapeKeyClose;
