import { PropsWithChildren } from "react";
import * as S from "./BaseModal.styled";
import CloseIcon from "@assets/close.svg";
import { ModalLayoutProps } from "../types";

interface BaseModalProps extends ModalLayoutProps {
  title: string;
  onRequestClose?: () => void;
  hasCloseButton?: boolean;
  modalRef?: React.RefObject<HTMLDivElement | null>;
}

function BaseModal({
  title,
  onRequestClose,
  hasCloseButton = true,
  position = "center",
  size = "medium",
  modalRef,
  children,
}: PropsWithChildren<BaseModalProps>) {
  return (
    <S.Backdrop>
      <S.Modal ref={modalRef} position={position} size={size}>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          {hasCloseButton && (
            <S.CloseButton type="button" onClick={onRequestClose}>
              <img src={CloseIcon} alt="닫기 버튼" />
            </S.CloseButton>
          )}
        </S.ModalHeader>
        {children}
      </S.Modal>
    </S.Backdrop>
  );
}

export default BaseModal;
