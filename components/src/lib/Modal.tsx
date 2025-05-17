import React, { createContext, useContext, useRef } from "react";
import useKeyEscClose from "./hooks/useKeyEscClose";
import {
  backGroundStyle,
  ModalBodyStyle,
  ModalCloseStyle,
  ModalContainerStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
  ModalTitleStyle,
  ModalWrapperStyle,
} from "./styles";
import { useFocusTrap } from "./hooks/useFocusTrap";
import {
  ChildrenProps,
  ModalContextType,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
  ModalTitleProps,
} from "./types/Modal.types";

const ModalContext = createContext<ModalContextType>({
  onHide: () => {
    throw new Error("ModalContext must be used within a ModalProvider");
  },
});

const Modal = ({ show, onHide, showBackdrop = true, position = "center", size = "medium", children }: ModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useFocusTrap(containerRef, show);
  useKeyEscClose(onHide);

  return (
    <ModalContext.Provider value={{ onHide }}>
      <div css={ModalWrapperStyle(show)}>
        <div css={backGroundStyle(showBackdrop)} onClick={onHide}></div>
        <div ref={containerRef} css={ModalContainerStyle(position, size)}>
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

Modal.Header = ({ closeButton = false, children }: ModalHeaderProps) => {
  const { onHide } = useContext(ModalContext);

  return (
    <div css={ModalHeaderStyle}>
      <span>{children}</span>
      {closeButton && (
        <button css={ModalCloseStyle} onClick={onHide}>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.4922 1.41L13.0822 0L7.49219 5.59L1.90219 0L0.492188 1.41L6.08219 7L0.492188 12.59L1.90219 14L7.49219 8.41L13.0822 14L14.4922 12.59L8.90219 7L14.4922 1.41Z"
              fill="black"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

Modal.Body = ({ children }: ChildrenProps) => {
  return <div css={ModalBodyStyle}>{children}</div>;
};

Modal.Footer = ({ buttonAlign = "left", children }: ModalFooterProps) => {
  return <div css={ModalFooterStyle(buttonAlign)}>{children}</div>;
};

Modal.Title = ({ color = "#000", children }: ModalTitleProps) => {
  return <span css={ModalTitleStyle(color)}>{children}</span>;
};

export default Modal;
