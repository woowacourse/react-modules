import BaseModal from "../BaseModal";
import type { ModalSizeType } from "../types";
import Button from "@/components/Button";
import * as S from "./ContentModal.styled";
import type { RefObject, ReactElement, ReactNode, ElementType } from "react";

interface ContentModalProps {
  title: string;
  size?: ModalSizeType;
  hasCloseButton?: boolean;
  modalRef?: RefObject<HTMLDivElement | null>;
  containerAs?: ElementType;
  content: ReactNode;
  buttonElements: ReactElement<typeof Button>[];
}

function ContentModal({
  title,
  size,
  hasCloseButton,
  modalRef,
  containerAs = "div",
  content,
  buttonElements,
}: ContentModalProps) {
  return (
    <BaseModal
      title={title}
      modalRef={modalRef}
      size={size}
      hasCloseButton={hasCloseButton}
    >
      <S.StyledPolymorphic as={containerAs}>
        <S.ContentBox>{content}</S.ContentBox>
        <S.ButtonBox>{buttonElements}</S.ButtonBox>
      </S.StyledPolymorphic>
    </BaseModal>
  );
}

export default ContentModal;
