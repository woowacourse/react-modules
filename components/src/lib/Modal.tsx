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
      <div css={ModalWrapperStyle(show)} onClick={onHide} {...props}>
        {children}
      </div>
    </ModalContext.Provider>
  );
};

Modal.BackDrop = (props: Omit<BaseProps, "children">) => {
  return <div css={backGroundStyle} {...props}></div>;
};

Modal.Container = ({ position = "center", gap = 16, children, ...props }: ModalContainerProps) => {
  return (
    <div css={ModalContainerStyle(position, gap)} onClick={(e: React.MouseEvent) => e.stopPropagation()} {...props}>
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
