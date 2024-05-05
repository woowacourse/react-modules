import { useEffect } from 'react';
import { preventScroll, allowScroll } from '../utils/scroll';

const usePreventScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (!isOpen) return;

    const prevScrollY = preventScroll();

    return () => allowScroll(prevScrollY);
  }, [isOpen]);
};

export default usePreventScroll;
