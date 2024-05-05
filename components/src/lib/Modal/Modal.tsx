import * as S from "./Modal.style.tsx";
import BasicButton, {
  ButtonColorType,
  ButtonSizeType,
} from "@/lib/Button/Button.tsx";

export type ModalPosition = "center" | "bottom";

export interface ModalMainProps {
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

export interface StyleButtonProps {
  label: string;
  onClickEvent: () => void;
  backgroundColor: ButtonColorType | string;
  textColor?: ButtonColorType;
  size?: ButtonSizeType;
}

const StyledButton = ({
  label,
  onClickEvent,
  backgroundColor,
  textColor,
  size,
}: StyleButtonProps) => {
  return (
    <BasicButton
      onClick={onClickEvent}
      label={label}
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
    />
  );
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
  StyledButton,
  CloseButton,
});

export default Modal;
