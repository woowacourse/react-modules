import S from './Modal.style.tsx';
import BasicButton from '../Button.tsx';

export type ModalPosition = 'center' | 'bottom';

export interface ModalMainProps {
  children?: React.ReactNode;
  isOpen: boolean;
  position: ModalPosition;
  onClose: () => void;
}

const ModalMain = ({ children, isOpen, position, onClose }: ModalMainProps) => {
  return (
    <S.ModalWrapper open={isOpen}>
      <S.ModalBackground onClick={onClose} />
      <S.ModalContainer $position={position}>{children}</S.ModalContainer>
    </S.ModalWrapper>
  );
};

export interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <S.Title>{children}</S.Title>;
};

export interface CloseIconProps {
  children: React.ReactNode;
  onClick: () => void;
}

const CloseIcon = ({ children, onClick }: CloseIconProps) => {
  return <S.CloseIcon onClick={onClick}>{children}</S.CloseIcon>;
};

export interface ContentsProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentsProps) => {
  return <S.Content>{children}</S.Content>;
};

export interface ConfirmButtonProps {
  label: string;
  onConfirm: () => void;
}

const ConfirmButton = ({ label, onConfirm }: ConfirmButtonProps) => {
  return <BasicButton onClick={onConfirm} label={label} colorType="black" />;
};

export interface CloseButtonProps {
  label: string;
  onClose: () => void;
}

const CloseButton = ({ label, onClose }: CloseButtonProps) => {
  return <BasicButton onClick={onClose} label={label} />;
};

const Modal = Object.assign(ModalMain, {
  Title,
  CloseIcon,
  Content,
  ConfirmButton,
  CloseButton,
});

export default Modal;
