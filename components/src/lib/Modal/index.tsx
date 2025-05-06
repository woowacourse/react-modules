import { PropsWithChildren } from "react";
import * as S from "./Modal.styled";
import CloseIcon from "@assets/close.svg";
import useModalCloseEvent from "../../hooks/useModalCloseEvent";

export type ModalPositionType = "center" | "bottom";
interface ModalProps {
  onClose: () => void;
  position?: ModalPositionType;
}
function Modal({
  onClose,
  children,
  position = "bottom",
}: PropsWithChildren<ModalProps>) {
  useModalCloseEvent(onClose);

  return (
    <S.Backdrop id="backdrop">
      <S.Modal position={position}>{children}</S.Modal>
    </S.Backdrop>
  );
}

Modal.Header = function Header({ children }: PropsWithChildren) {
  return <S.ModalHeader>{children}</S.ModalHeader>;
};

Modal.Title = function Title({ children }: PropsWithChildren) {
  return <S.Title>{children}</S.Title>;
};

Modal.CloseButton = function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <S.CloseButton type="button" onClick={onClick}>
      <img src={CloseIcon} alt="닫기 버튼" />
    </S.CloseButton>
  );
};

Modal.Content = function Content({ children }: PropsWithChildren) {
  return <>{children}</>;
};

export default Modal;
