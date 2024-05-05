import { useEffect } from 'react';

const useCloseOnESCKeyDown = (onClose: () => void, activeESCKeyDownClose: boolean) => {
  useEffect(() => {
    const onESCKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeESCKeyDownClose) {
        onClose();
      }
    };
    document.addEventListener('keydown', onESCKeyDown);
    return () => {
      document.removeEventListener('keydown', onESCKeyDown);
    };
  }, [onClose, activeESCKeyDownClose]);
};

export default useCloseOnESCKeyDown;
