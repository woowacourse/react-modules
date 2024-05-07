import { useEffect } from 'react';

const useEscapeKey = (isOpen: boolean, close: () => void) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', handleEscapePress);

    return () => document.removeEventListener('keydown', handleEscapePress);
  }, [isOpen, close]);
};

export default useEscapeKey;
