import { useEffect } from 'react';
import { allowScroll, preventScroll } from '../utils/scroll';

const usePreventScroll = (isPrevent: boolean) => {
  useEffect(() => {
    if (!isPrevent) return;

    const prevScrollY = preventScroll();

    return () => {
      allowScroll(prevScrollY);
    };
  }, [isPrevent]);
};

export default usePreventScroll;
