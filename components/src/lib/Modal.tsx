import useKeyEscClose from "./hooks/useKeyEscClose";
import IconClose from "./components/IconClose";
import { ChildrenProps, ModalHeaderProps, ModalProps, ModalTitleProps } from "./types";
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

Modal.Header = ({ closeButton = false, children }: ModalHeaderProps) => {
  const onHide = useModalContext();

  return (
    <div css={ModalHeaderStyle}>
      <span>{children}</span>
      {closeButton && <IconClose css={ModalCloseStyle} onClick={onHide} />}
    </div>
  );
};

Modal.Body = ({ children }: ChildrenProps) => {
  return <div css={ModalBodyStyle}>{children}</div>;
};

Modal.Footer = ({ children }: ChildrenProps) => {
  return <div css={ModalFooterStyle}>{children}</div>;
};

Modal.Title = ({ color = "#000", children }: ModalTitleProps) => {
  return <span css={ModalTitleStyle(color)}>{children}</span>;
};

export default Modal;
