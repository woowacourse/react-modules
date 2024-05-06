import classnames from "classnames";
import useModalContext, { ModalContext } from "./hooks/useModalContext";
import useKeyDown from "./hooks/useKeyDown";
import {
  ModalButtonProps,
  ModalCloseButtonProps,
  ModalContentProps,
  ModalDimmerProps,
  ModalMainProps,
} from "./types/modalProps";
import style from "./Modal.module.css";
import { ReactComponent as CloseIcon } from "./assets/closeIcon.svg";

interface IModal extends React.FC<ModalMainProps> {
  Dimmer: React.FC<ModalDimmerProps>;
  Content: React.FC<ModalContentProps>;
  CloseButton: React.FC<ModalCloseButtonProps>;
  Button: React.FC<ModalButtonProps>;
}

const Modal: IModal = Object.assign(ModalMain, {
  Dimmer: ModalDimmer,
  Content: ModalContent,
  CloseButton: ModalCloseButton,
  Button: ModalButton,
});

export default Modal;

function ModalMain({ children, isOpen, onClose }: ModalMainProps) {
  useKeyDown("Escape", onClose);

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div className={classnames(style.ModalContainer, { [style.isOpen]: isOpen })}>{children}</div>
    </ModalContext.Provider>
  );
}

function ModalDimmer(attributes: ModalDimmerProps) {
  const { onClose } = useModalContext();

  return <div className={style.ModalDimmer} onClick={onClose} {...attributes}></div>;
}

function ModalContent({ position = "center", children, ...attributes }: ModalContentProps) {
  return (
    <div className={classnames(style.ModalContent, style[position])} {...attributes}>
      {children}
    </div>
  );
}

function ModalCloseButton(attributes: ModalCloseButtonProps) {
  const { onClose } = useModalContext();

  return (
    <CloseIcon
      role="button"
      aria-label="모달창 닫기"
      className={style.ModalCloseButton}
      onClick={onClose}
      {...attributes}
    />
  );
}

function ModalButton({ children, theme = "dark", ...attributes }: ModalButtonProps) {
  return (
    <button className={classnames([style.ModalButton, style[theme]])} {...attributes}>
      {children}
    </button>
  );
}
