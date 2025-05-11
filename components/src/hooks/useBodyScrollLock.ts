import { useEffect } from "react";

interface ScrollLockOptions {
  isLocked: boolean;
  restorePosition?: boolean;
}

const useBodyScrollLock = ({
  isLocked,
  restorePosition = true,
}: ScrollLockOptions): void => {
  useEffect(() => {
    if (!isLocked) return;

    const scrollY = window.scrollY;
    const originalStyle = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = originalStyle.position;
      document.body.style.top = originalStyle.top;
      document.body.style.left = originalStyle.left;
      document.body.style.width = originalStyle.width;
      document.body.style.overflow = originalStyle.overflow;

      if (restorePosition) window.scrollTo(0, scrollY);
    };
  }, [isLocked, restorePosition]);
};

export default useBodyScrollLock;
