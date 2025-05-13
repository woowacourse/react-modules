import { createContext } from "react";
import { BackDrop } from "./BackDrop/BackDrop";
import { Frame } from "./Frame/Frame";
import { Title } from "./Title/Title";
import { Button } from "./Button/Button";
import { CloseButton } from "./CloseButton/CloseButton";
import { Body } from "./Body/Body";
import { Input } from "./Input/Input";
import { useKeyPress } from "./hooks/useKeyPress";
import DualButtons from "./Button/variants/DualButtons";

type ModalProps = {
  /** 모달 열림/닫힘 상태 */
  isOpen: boolean;
  /** 모달 닫기 함수 */
  onClose: () => void;
  /** 모달 내용 */
  children: React.ReactNode;
  /** ESC 키 입력 시 자동으로 닫힘 여부 (기본값: true) */
  autoCloseOnESC?: boolean;
  /** 모달 위치 */
  position?: "center" | "bottom";
  /** 모달 크기 */
  size?: "small" | "medium" | "large";
};

export const ModalContext = createContext<ModalProps>({
  isOpen: true,
  onClose: () => {},
  children: <></>,
  position: "center",
  size: "medium",
});

const Modal = ({
  isOpen = true,
  onClose,
  children,
  autoCloseOnESC = true,
  position = "center",
  size = "medium",
}: ModalProps) => {
  const value = {
    isOpen,
    onClose,
    children,
    position,
    size,
  };

  useKeyPress("Escape", onClose, autoCloseOnESC);

  return (
    <>
      {isOpen && (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
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
Modal.DualButtons = DualButtons;
Modal.Input = Input;

export default Modal;
