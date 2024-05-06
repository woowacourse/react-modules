import { useEffect } from 'react';

const useBlockedScroll = (condition: boolean) => {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [condition]);
};

export default useBlockedScroll;
