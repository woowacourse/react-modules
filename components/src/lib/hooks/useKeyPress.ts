import { useEffect } from 'react';

type KeyboardKey = 'Escape' | 'Enter' | ' ' | 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

const useKeyPress = ({
  targetKey,
  callback,
  isActive,
}: {
  targetKey: KeyboardKey;
  callback: () => void;
  isActive: boolean;
}) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey) callback();
    };

    return () => {
      document.addEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);
};

export default useKeyPress;
