import { useEffect } from "react";

const useBlockScroll = (condition: boolean) => {
  useEffect(() => {
    const originalScrollStyle = window.getComputedStyle(document.body).overflow;

    if (condition) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalScrollStyle;
    };
  }, [condition]);
};

export default useBlockScroll;
