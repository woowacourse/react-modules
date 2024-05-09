import {
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { ModalProvider } from "./ModalProvider";
import { ModalContextType } from "./ModalContext";
import ModalPortal from "./ModalPortal";
import ModalBackdrop from "./ModalBackdrop";
import ModalCloseButton from "./ModalCloseButton";
import Container from "./Container";
import styles from "./container.module.css";

interface ModalProviderValue extends ModalContextType {
  closing: boolean;
  open: boolean;
  sizeClassName: string;
}

const generateFakeEvent = (ref: RefObject<HTMLDivElement>) => {
  const fakeEvent: React.SyntheticEvent = {
    preventDefault: () => {},
    stopPropagation: () => {},
    nativeEvent: new Event("close"),
    currentTarget: ref.current as HTMLDivElement,
    target: ref.current as HTMLDivElement,
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

  return fakeEvent;
};

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
  size = "",
}: PropsWithChildren<Partial<ModalContextType>>) {
  const [closing, setClosing] = useState(false);
  const [open, setOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  const sizeClassName =
    size === "large"
      ? styles.large
      : size === "medium"
        ? styles.medium
        : size === "small"
          ? styles.small
          : "";

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    } else {
      setClosing(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const fakeEvent = generateFakeEvent(modalRef);
    if (closing) {
      if (unMountAnimation) {
        const timer = setTimeout(() => {
          setClosing(false);
          setOpen(false);
          onClose(fakeEvent);
        }, animationTime);

        return () => clearTimeout(timer);
      } else {
        setClosing(false);
        setOpen(false);
        onClose(fakeEvent);
      }
    }
  }, [closing, unMountAnimation]);

  const modalProps: ModalProviderValue = {
    isOpen,
    position,
    onClose,
    mountAnimation,
    unMountAnimation,
    animationTime,
    closing,
    open,
    sizeClassName,
    size,
  };

  return open ? (
    <ModalProvider value={modalProps}>{children}</ModalProvider>
  ) : null;
}

Modal.Portal = ModalPortal;
Modal.Backdrop = ModalBackdrop;
Modal.Container = Container;
Modal.CloseButton = ModalCloseButton;
