import S from './Modal.style.tsx';
import BasicButton from '../Button.tsx';

/**
 * 1. ModalMain - default
 *  - backdrop
 *  - container
 * 2. Title
 * 3. IconButton
 * 4. Content
 * 5. Confirm button
 * 6. Close button
 */

export type ModalPosition = 'center' | 'bottom';

interface ModalMainProps {
  children?: React.ReactNode;
  isOpen: boolean;
  position: ModalPosition;
  onClose: () => void;
}

export const ModalMain = ({
  children,
  isOpen,
  position,
  onClose,
}: ModalMainProps) => {
  return (
    <S.ModalWrapper open={isOpen}>
      <S.ModalBackground onClick={onClose} />
      <S.ModalContainer $position={position}>{children}</S.ModalContainer>
    </S.ModalWrapper>
  );
};

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <S.Title>{children}</S.Title>;
};

interface CloseIconProps {
  children: React.ReactNode;
  onClick: () => void;
}

const CloseIcon = ({ children, onClick }: CloseIconProps) => {
  return <S.CloseIcon onClick={onClick}>{children}</S.CloseIcon>;
};

interface ContentsProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentsProps) => {
  return <S.Content>{children}</S.Content>;
};

interface ConfirmButtonProps {
  label: string;
  onConfirm: () => void;
}

const ConfirmButton = ({ label, onConfirm }: ConfirmButtonProps) => {
  return <BasicButton onClick={onConfirm} label={label} colorType="black" />;
};

interface CloseButtonProps {
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
