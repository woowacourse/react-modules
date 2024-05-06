import { useEffect } from 'react';

const useEscKeyDown = (callback: () => void) => {
  const handleKeyDownEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      callback();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDownEsc);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDownEsc);
    };
  }, []);
};

export default useEscKeyDown;
