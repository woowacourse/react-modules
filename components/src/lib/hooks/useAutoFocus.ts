import { useEffect } from 'react';
import getFocusableElements from '../utils/getFocusableElements';

const useAutoFocus = (contentRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const focusableEls = getFocusableElements(contentRef.current);
    focusableEls[0]?.focus();
  }, []);
};

export default useAutoFocus;
