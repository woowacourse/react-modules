import { useRef } from "react";
import useKeyEscClose from "./hooks/useKeyEscClose";
import IconClose from "./components/IconClose";
import { BaseProps, ModalHeaderProps, ModalProps, ModalContainerProps } from "./types";
import {
  backGroundStyle,
  ModalBodyStyle,
  ModalCloseStyle,
  ModalContainerStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
  ModalTitleStyle,
  ModalWrapperStyle,
} from "./Modal.style";
import ModalContext, { useModalContext } from "./contexts/ModalContext";

const Modal = ({ show, onHide, children, ...props }: ModalProps) => {
  useKeyEscClose(onHide);
  return (
    <ModalContext.Provider value={{ onHide }}>
      <div css={ModalWrapperStyle(show)} {...props}>
        {children}
      </div>
    </ModalContext.Provider>
  );
};

Modal.Background = ({ children, ...props }: BaseProps) => {
  const { onHide } = useModalContext();
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === ref.current) onHide();
  };

  return (
    <div ref={ref} css={backGroundStyle} onClick={handleClick} {...props}>
      {children}
    </div>
  );
};

Modal.Container = ({ position = "center", gap = 16, children, ...props }: ModalContainerProps) => {
  return (
    <div css={ModalContainerStyle(position, gap)} {...props}>
      {children}
    </div>
  );
};

Modal.Header = ({ closeButton = false, children, ...props }: ModalHeaderProps) => {
  const { onHide } = useModalContext();
  return (
    <div css={ModalHeaderStyle} {...props}>
      <span>{children}</span>
      {closeButton && <IconClose css={ModalCloseStyle} onClick={onHide} />}
    </div>
  );
};

Modal.Body = ({ children, ...props }: BaseProps) => {
  return (
    <div css={ModalBodyStyle} {...props}>
      {children}
    </div>
  );
};

Modal.Footer = ({ children, ...props }: BaseProps) => {
  return (
    <div css={ModalFooterStyle} {...props}>
      {children}
    </div>
  );
};

Modal.Title = ({ children, ...props }: BaseProps) => {
  return (
    <span css={ModalTitleStyle} {...props}>
      {children}
    </span>
  );
};

export default Modal;
