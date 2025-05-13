import { PropsWithChildren } from "react";
import * as S from "./BaseModal.styled";
import CloseIcon from "@assets/close.svg";
import { ModalLayoutProps, ModalDefaultProps } from "@/types/modal";
import usePreventScroll from "@/hooks/usePreventScroll";
import useModalCloseTriggers from "@/hooks/useModalCloseTriggers";

interface BaseModalProps
  extends ModalDefaultProps,
    Exclude<ModalLayoutProps, "size"> {}

function BaseModal({
  title,
  onRequestClose,
  hasCloseButton = true,
  position = "center",
  size = "medium",
  children,
  closeTrigger,
}: PropsWithChildren<BaseModalProps>) {
  usePreventScroll();
  const modalRef = useModalCloseTriggers<HTMLDivElement>({
    onRequestClose,
    closeTrigger,
  });

  return (
    <S.Backdrop>
      <S.Modal
        role="dialog"
        aria-modal
        ref={modalRef}
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
