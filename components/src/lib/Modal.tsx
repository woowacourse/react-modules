import { XIcon } from './assets';
import type { StrictPropsWithChildren, ModalProps, ModalButtonProps, ModalCloseButtonProps } from './Modal.type';

import GlobalStyles from './Global.style';
import * as S from './Modal.style';

const ModalTitle = ({ children }: StrictPropsWithChildren) => {
  return <S.ModalTitleWrapper>{children}</S.ModalTitleWrapper>;
};

const ModalButton = ({ mode, text, ...rest }: ModalButtonProps) => {
  return (
    <S.ModalButton $mode={mode} {...rest}>
      {text}
    </S.ModalButton>
  );
};

const ModalCloseButton = ({ close }: ModalCloseButtonProps) => {
  return (
    <button onClick={close}>
      <img width="20" height="20" src={XIcon}></img>
    </button>
  );
};

const ModalMain = ({ position, isOpen, close, children }: StrictPropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return (
    <div>
      <GlobalStyles />
      <S.ModalLayout $position={position}>
        <S.ModalBackdrop onClick={close} />
        <S.ModalContainer $position={position}>{children}</S.ModalContainer>
      </S.ModalLayout>
    </div>
  );
};

export const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Button: ModalButton,
  CloseButton: ModalCloseButton,
});
