import { PropsWithChildren, RefObject } from "react";
import * as S from "./BaseModal.styled";
import CloseIcon from "@assets/close.svg";
import { ModalLayoutProps } from "@/types/modal";
import usePreventScroll from "@/hooks/usePreventScroll";

interface BaseModalProps extends ModalLayoutProps {
  title: string;
  onRequestClose?: () => void;
  hasCloseButton?: boolean;
  ref?: RefObject<HTMLDivElement>;
}

function BaseModal({
  title,
  onRequestClose,
  hasCloseButton = true,
  position = "center",
  size = "medium",
  ref,
  children,
}: PropsWithChildren<BaseModalProps>) {
  usePreventScroll();

  return (
    <S.Backdrop>
      <S.Modal
        role="dialog"
        aria-modal
        ref={ref}
        position={position}
        size={size}
      >
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          {hasCloseButton && (
            <S.CloseButton
              autoFocus
              type="button"
              onClick={onRequestClose}
              aria-label="닫기"
            >
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
