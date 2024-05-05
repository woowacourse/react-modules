import { PropsWithChildren } from "react";
import { ModalProvider } from "./ModalProvider";
import { ModalContextType, useModal } from "./ModalContext";
import ModalPortal from "./ModalPortal";
import ModalBackdrop from "./ModalBackdrop";
import ModalCloseButton from "./ModalCloseButton";
import Container from "./Container";

export default function Modal({
  children,
  isOpen = false,
  onClose = (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  },
  modalContainerStyle = {},
  className = "",
  style = {},
  mountAnimation = "",
  unMountAnimation = "",
  position = "center",
}: PropsWithChildren<Partial<ModalContextType>>) {
  const contextValue = useModal();
  const handleOnClose = onClose ?? contextValue.onClose;

  const modalProps: ModalContextType = {
    isOpen: isOpen ?? contextValue.isOpen,
    position: position ?? contextValue.position,
    modalContainerStyle:
      modalContainerStyle ?? contextValue.modalContainerStyle,
    className: className ?? contextValue.className,
    style: style ?? contextValue.style,
    onClose: handleOnClose,
    mountAnimation: mountAnimation ?? contextValue.mountAnimation,
    unMountAnimation: unMountAnimation ?? contextValue.unMountAnimation,
  };

  return modalProps.isOpen ? (
    <ModalProvider value={modalProps}>{children}</ModalProvider>
  ) : null;
}

Modal.Portal = ModalPortal;
Modal.Backdrop = ModalBackdrop;
Modal.Container = Container;
Modal.CloseButton = ModalCloseButton;
