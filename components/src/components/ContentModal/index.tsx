import BaseModal from "@/components/BaseModal";
import type { ModalSizeType } from "../../types/modal";
import Button from "@/components/Button";
import * as S from "./ContentModal.styled";
import type { RefObject, ReactElement, ReactNode, ElementType } from "react";

interface ContentModalProps {
  title: string;
  size?: ModalSizeType;
  hasCloseButton?: boolean;
  ref?: RefObject<HTMLDivElement>;
  containerAs?: ElementType;
  content: ReactNode;
  buttonElements: ReactElement<typeof Button>[];
}

function ContentModal({
  title,
  size,
  hasCloseButton,
  ref,
  containerAs = "div",
  content,
  buttonElements,
}: ContentModalProps) {
  return (
    <BaseModal
      title={title}
      ref={ref}
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
