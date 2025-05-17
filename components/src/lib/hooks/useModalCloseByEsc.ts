import { useEffect } from 'react';

const useModalCloseByEsc = (onClose: () => void) => {
  useEffect(() => {
    const handleCloseByEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  }, [onClose]);
};

export default useModalCloseByEsc;
