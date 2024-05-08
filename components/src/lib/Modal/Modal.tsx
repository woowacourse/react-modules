import S from './Modal.style.tsx';
import BasicButton from '../Button.tsx';

export type ModalPosition = 'center' | 'bottom';

export type Size = 'small' | 'medium' | 'large';

export interface ModalMainProps {
  children?: React.ReactNode;
  isOpen: boolean;
  position: ModalPosition;
  size?: Size;
  onClose: () => void;
}

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
  size?: Size;
  onConfirm: () => void;
}

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

export interface CloseButtonProps {
  label: string;
  size?: Size;
  onClose: () => void;
}

const CloseButton = ({ label, size = 'medium', onClose }: CloseButtonProps) => {
  return <BasicButton onClick={onClose} label={label} size={size} />;
};

export interface PromptInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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
