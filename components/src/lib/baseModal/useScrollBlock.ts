import { useEffect } from 'react';

const useScrollBlock = (active: boolean = true) => {
  useEffect(() => {
    if (!active) return;

    const originalStyle = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle || '';
    };
  }, [active]);
};

export default useScrollBlock;
