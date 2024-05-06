import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { ModalProvider } from "./ModalProvider";
import { ModalContextType } from "./ModalContext";
import ModalPortal from "./ModalPortal";
import ModalBackdrop from "./ModalBackdrop";
import ModalCloseButton from "./ModalCloseButton";
import Container from "./Container";

interface ModalProviderValue extends ModalContextType {
  closing: boolean;
  open: boolean;
}

export default function Modal({
  children,
  isOpen = false,
  onClose = (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  },
  mountAnimation = "",
  unMountAnimation = "",
  position = "center",
  animationTime = 300,
}: PropsWithChildren<Partial<ModalContextType>>) {
  const [closing, setClosing] = useState(false);
  const [open, setOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    } else {
      setClosing(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        setClosing(false);
        setOpen(false);
        const fakeEvent: React.SyntheticEvent = {
          preventDefault: () => {},
          stopPropagation: () => {},
          nativeEvent: new Event("close"),
          currentTarget: modalRef.current as HTMLDivElement,
          target: modalRef.current as HTMLDivElement,
          bubbles: false,
          cancelable: false,
          defaultPrevented: false,
          eventPhase: 2,
          isTrusted: false,
          timeStamp: Date.now(),
          type: "close",
          isDefaultPrevented: () => false,
          isPropagationStopped: () => false,
          persist: () => {},
        };
        onClose(fakeEvent);
      }, animationTime);

      return () => clearTimeout(timer);
    }
  }, [closing]);

  const modalProps: ModalProviderValue = {
    isOpen,
    position,
    onClose,
    mountAnimation,
    unMountAnimation,
    animationTime,
    closing,
    open,
  };

  return open ? (
    <ModalProvider value={modalProps}>{children}</ModalProvider>
  ) : null;
}

Modal.Portal = ModalPortal;
Modal.Backdrop = ModalBackdrop;
Modal.Container = Container;
Modal.CloseButton = ModalCloseButton;
