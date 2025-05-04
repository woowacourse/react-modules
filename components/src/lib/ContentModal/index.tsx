import BaseModal from "../BaseModal";
import type { ModalSizeType } from "../types";
import Button from "@/components/Button";
import * as S from "./ContentModal.styled";
import { RefObject, ReactElement, ReactNode } from "react";

interface ContentModalProps {
  title: string;
  size?: ModalSizeType;
  hasCloseButton?: boolean;
  modalRef?: RefObject<HTMLDivElement | null>;
  content: ReactNode;
  buttonElements: ReactElement<typeof Button>[];
}

function ContentModal({
  title,
  size,
  hasCloseButton,
  modalRef,
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
      <S.Container>
        <S.ContentBox>{content}</S.ContentBox>
        <S.ButtonBox>{buttonElements}</S.ButtonBox>
      </S.Container>
    </BaseModal>
  );
}

export default ContentModal;
