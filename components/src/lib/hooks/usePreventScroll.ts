import { useEffect } from "react";
import styles from "../backdrop.module.css";

const usePreventScroll = (isOpen = true) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.no_scroll);
    } else {
      document.body.classList.remove(styles.no_scroll);
    }

    return () => {
      document.body.classList.remove(styles.no_scroll);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
};

export default usePreventScroll;
