import { ButtonHTMLAttributes } from 'react';
import { XIcon } from './assets';

import GlobalStyles from './Global.style';
import * as S from './Modal.style';

type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: string;
  text: string;
}

interface ModalProps {
  position: 'center' | 'bottom';
  isOpen: boolean;
  close: () => void;
}

interface ModalCloseButtonProps {
  onClose: () => void;
}

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

const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <button onClick={onClose}>
      <img width="20" height="20" src={XIcon}></img>
    </button>
  );
};

const ModalMain = ({ position, isOpen, close, children }: StrictPropsWithChildren<ModalProps>) => {
  if (!isOpen) return <div></div>;

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
