import S from '@/lib/Modal/Modal.style.tsx';
import BasicButton from '@/lib/Button.tsx';
import {
  TitleProps,
  CloseButtonProps,
  CloseIconProps,
  ConfirmButtonProps,
  ContentsProps,
  ModalMainProps,
  PromptInputProps,
} from '@/types/modal';

const ModalMain = ({
  children,
  isOpen,
  position,
  size = 'medium',
  onClose,
}: ModalMainProps) => {
  return (
    <S.ModalWrapper open={isOpen}>
      <S.ModalBackground onClick={onClose} />
      <S.ModalContainer $position={position} $size={size}>
        {children}
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

const Title = ({ children }: TitleProps) => {
  return <S.Title>{children}</S.Title>;
};

const CloseIcon = ({ children, onClick }: CloseIconProps) => {
  return <S.CloseIcon onClick={onClick}>{children}</S.CloseIcon>;
};

const Content = ({ children }: ContentsProps) => {
  return <S.Content>{children}</S.Content>;
};

const ConfirmButton = ({
  label,
  size = 'medium',
  onConfirm,
}: ConfirmButtonProps) => {
  return (
    <BasicButton
      onClick={onConfirm}
      label={label}
      size={size}
      colorType="dark"
    />
  );
};

const CloseButton = ({ label, size = 'medium', onClose }: CloseButtonProps) => {
  return <BasicButton onClick={onClose} label={label} size={size} />;
};

const PromptInput = ({
  value,
  placeholder,
  onChange,
  ...rest
}: PromptInputProps) => {
  return (
    <S.PromptInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
};

const Modal = Object.assign(ModalMain, {
  Title,
  CloseIcon,
  Content,
  ConfirmButton,
  CloseButton,
  PromptInput,
});

export default Modal;
