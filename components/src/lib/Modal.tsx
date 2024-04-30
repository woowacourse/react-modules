import { XIcon } from './assets';
import type { StrictPropsWithChildren, ModalProps, ModalButtonProps, ModalCloseButtonProps } from './Modal.type';

import * as S from './Modal.style';

const ModalTitle = ({ children }: StrictPropsWithChildren) => {
  return <S.ModalTitleWrapper>{children}</S.ModalTitleWrapper>;
};

const ModalButton = ({ mode, text, ...rest }: ModalButtonProps) => {
  return (
    <S.ModalButtonWrapper $mode={mode} {...rest}>
      {text}
    </S.ModalButtonWrapper>
  );
};

const ModalCloseButton = ({ close }: ModalCloseButtonProps) => {
  return (
    <S.ModalCloseButtonWrapper onClick={close} aria-label="모달 닫기">
      <img width="20" height="20" src={XIcon} alt="모달 닫기 아이콘"></img>
    </S.ModalCloseButtonWrapper>
  );
};

const ModalHeader = ({ children }: StrictPropsWithChildren) => {
  return <S.ModalHeaderWrapper>{children}</S.ModalHeaderWrapper>;
};

const ModalBody = ({ children }: StrictPropsWithChildren) => {
  return <S.ModalBodyWrapper>{children}</S.ModalBodyWrapper>;
};

const ModalMain = ({ position, size, isOpen, close, children }: StrictPropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return (
    <S.ModalLayout $position={position}>
      <S.ModalBackdrop onClick={close} />
      <S.ModalContainer $position={position} $size={size}>
        {children}
      </S.ModalContainer>
    </S.ModalLayout>
  );
};

export const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Button: ModalButton,
  CloseButton: ModalCloseButton,
  Header: ModalHeader,
  Body: ModalBody,
});
