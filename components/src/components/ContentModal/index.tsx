import BaseModal from "@/components/BaseModal";
import type { ModalDefaultProps } from "../../types/modal";
import Button from "@/components/Button";
import * as S from "./ContentModal.styled";
import type { ReactElement, ReactNode, ElementType } from "react";

interface ContentModalProps extends ModalDefaultProps {
  containerAs?: ElementType;
  content: ReactNode;
  buttonElements: ReactElement<typeof Button>[];
}

function ContentModal({
  title,
  onRequestClose,
  size,
  hasCloseButton,
  closeTrigger,
  containerAs = "div",
  content,
  buttonElements,
}: ContentModalProps) {
  return (
    <BaseModal
      title={title}
      onRequestClose={onRequestClose}
      size={size}
      hasCloseButton={hasCloseButton}
      closeTrigger={closeTrigger}
    >
      <S.StyledPolymorphic as={containerAs}>
        <S.ContentBox>{content}</S.ContentBox>
        <S.ButtonBox>{buttonElements}</S.ButtonBox>
      </S.StyledPolymorphic>
    </BaseModal>
  );
}

export default ContentModal;
