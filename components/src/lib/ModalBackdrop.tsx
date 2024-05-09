import { PropsWithChildren, useCallback, useContext } from "react";
import styles from "./backdrop.module.css";
import { ModalContext } from "./ModalContext";
import usePreventScroll from "./hooks/usePreventScroll";

type Props = {
  opacity?: string;
  zIndex?: number;
};

export default function ModalBackdrop({
  children,
  opacity = "rgba(255, 255, 255, 0.1)",
  zIndex = 100,
}: PropsWithChildren<Props>) {
  const { isOpen, onClose, open } = useContext(ModalContext);

  const backdropRef = useCallback((node: HTMLDivElement) => {
    node?.focus();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && onClose) {
      onClose(event);
    }
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && onClose) {
      onClose(event);
    }
  };

  usePreventScroll(isOpen);

  return open ? (
    <div
      className={styles.back_drop}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      style={{
        background: opacity,
        zIndex: zIndex,
      }}
      role="button"
      tabIndex={0}
      ref={backdropRef}
    >
      {children}
    </div>
  ) : null;
}
