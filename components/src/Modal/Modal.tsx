import { useEffect } from "react";
import { createContext } from "react";
import { createPortal } from "react-dom";
import { BackDrop } from "./BackDrop/BackDrop";
import { Frame } from "./Frame/Frame";
import { Title } from "./Title/Title";
import { Button } from "./Button/Button";
import { CloseButton } from "./CloseButton/CloseButton";
import { Body } from "./Body/Body";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: "center" | "bottom";
};

export const ModalContext = createContext<ModalProps>({
  isOpen: true,
  onClose: () => {},
  children: <></>,
  position: "center",
});

const Modal = ({
  isOpen = true,
  onClose,
  children,
  position = "center",
}: ModalProps) => {
  const value = {
    isOpen,
    onClose,
    children,
    position,
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen &&
        createPortal(
          <ModalContext.Provider value={value}>
            {children}
          </ModalContext.Provider>,
          document.getElementById("root") as HTMLElement
        )}
    </>
  );
};

Modal.Backdrop = BackDrop;
Modal.Frame = Frame;
Modal.Title = Title;
Modal.CloseButton = CloseButton;
Modal.Body = Body;
Modal.Button = Button;

export default Modal;
