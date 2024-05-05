import { useEffect } from 'react';

const useEscapeKey = (isOpen: boolean, close: () => void) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);
};

export default useEscapeKey;
