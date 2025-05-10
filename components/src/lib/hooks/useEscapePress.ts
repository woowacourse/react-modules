import { useEffect } from 'react';

const useEscapeKeyClose = (closeOnEscape: boolean, isOpen: boolean, onClose: () => void) => {
  if (!closeOnEscape) return;

  useEffect(() => {
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
