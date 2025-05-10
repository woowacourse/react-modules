import { useEffect } from 'react';

const useModalCloseByEsc = (onClose: () => void) => {
  const handleCloseByEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  }, [handleCloseByEsc]);
};

export default useModalCloseByEsc;
