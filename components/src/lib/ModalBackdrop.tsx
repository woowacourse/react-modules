import { PropsWithChildren, useCallback, useContext, useEffect } from "react";
import styles from "./backdrop.module.css";
import { ModalContext } from "./ModalContext";
import usePreventScroll from "./hooks/usePreventScroll";

export default function ModalBackdrop(props: PropsWithChildren<object>) {
  const { children } = props;
  const { isOpen, onClose } = useContext(ModalContext);

  const backdropRef = useCallback((node: HTMLDivElement) => {
    node?.focus();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && onClose) {
      onClose(event);
    }
  };

  usePreventScroll(isOpen);

  return (
    <div
      className={styles.back_drop}
      onClick={(e) => onClose && onClose(e)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      ref={backdropRef}
    >
      {children}
    </div>
  );
}
