import * as S from "./Modal.style.ts";
import BasicButton, {
  ButtonColorType,
  ButtonSizeType,
} from "@/lib/Button/Button.tsx";

export type ModalPosition = "center" | "bottom";

export type ModalSize = "small" | "medium" | "large" | "full";

export interface ModalMainProps {
  children: React.ReactNode;
  buttons?: React.ReactNode;
  isOpen: boolean;
  position: ModalPosition;
  onClose: () => void;
  size?: ModalSize;
}

export const ModalMain = ({
  children,
  isOpen,
  position,
  onClose,
  size = "medium",
}: ModalMainProps) => {
  return (
    <S.ModalWrapper open={isOpen}>
      <S.ModalBackground onClick={onClose} />
      <S.ModalOuter $position={position} $size={size}>
        <S.ModalInner>{children}</S.ModalInner>
      </S.ModalOuter>
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
  backgroundColor?: ButtonColorType | string;
  textColor?: ButtonColorType;
  size?: ButtonSizeType;
}

const StyledButton = ({
  label,
  onClickEvent,
  backgroundColor = "white",
  textColor,
  size = "full",
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
  size?: ButtonSizeType;
}

const CloseButton = ({ label, onClose, size = "full" }: CloseButtonProps) => {
  return <BasicButton onClick={onClose} label={label} size={size} />;
};

export interface FooterProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return <S.Footer>{children}</S.Footer>;
};

const Modal = Object.assign(ModalMain, {
  Title,
  CloseIcon,
  Content,
  StyledButton,
  CloseButton,
  Footer,
});

export default Modal;
