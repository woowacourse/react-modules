import useKeyEscClose from "./hooks/useKeyEscClose";
import IconClose from "./components/IconClose";
import { BaseProps, ModalHeaderProps, ModalProps } from "./types";
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

const Modal = ({ show, onHide, background = true, position = "center", gap = 16, children }: ModalProps) => {
  useKeyEscClose(onHide);
  return (
    <ModalContext.Provider value={onHide}>
      <div css={ModalWrapperStyle(show)}>
        <div css={backGroundStyle(background)} onClick={onHide}></div>
        <div css={ModalContainerStyle(position, gap)}>{children}</div>
      </div>
    </ModalContext.Provider>
  );
};

Modal.Header = ({ closeButton = false, children, ...props }: ModalHeaderProps) => {
  const onHide = useModalContext();
  return (
    <div css={ModalHeaderStyle} {...props}>
      <span>{children}</span>
      {closeButton && <IconClose css={ModalCloseStyle} onClick={onHide} />}
    </div>
  );
};

Modal.Body = ({ children, ...props }: BaseProps) => {
  console.log(props);
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
