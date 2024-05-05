import { useEffect } from 'react';

const useCloseOnESCKeyDown = (
  open: boolean,
  onClose: () => void,
  activeESCKeyDownClose: boolean,
) => {
  useEffect(() => {
    const onESCKeyDown = (event: KeyboardEvent) => {
      if (open && event.key === 'Escape' && activeESCKeyDownClose) {
        onClose();
      }
    };
    document.addEventListener('keydown', onESCKeyDown);
    return () => {
      document.removeEventListener('keydown', onESCKeyDown);
    };
  }, [open, onClose, activeESCKeyDownClose]);
};

export default useCloseOnESCKeyDown;
