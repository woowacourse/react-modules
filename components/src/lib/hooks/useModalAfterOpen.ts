import { useEffect } from 'react';

const useModalAfterOpen = (isOpen: boolean, onAfterOpen?: () => void) => {
  useEffect(() => {
    if (isOpen && onAfterOpen) {
      onAfterOpen();
    }
  }, [isOpen, onAfterOpen]);
};

export default useModalAfterOpen;
