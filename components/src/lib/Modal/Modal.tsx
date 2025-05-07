import { MouseEvent, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { THEME_MAP, ThemeMode } from "../constants/theme";
import {
  Backdrop,
  CloseButton,
  ModalBox,
  Title,
  TopWrapper,
} from "./Modal.styles";

interface TitleProps {
  text?: string;
  size?: number;
}

export interface ModalProps {
  position?: "center" | "bottom";
  title?: TitleProps;
  showCloseButton?: boolean;
  theme?: ThemeMode;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  position = "center",
  title,
  showCloseButton = true,
  theme = "light",
  children,
  isOpen,
  onClose,
}: ModalProps) => {
  const currentTheme = THEME_MAP[theme];

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return createPortal(
    <Backdrop $isOpen={isOpen} $position={position} onClick={onClose}>
      <ModalBox
        $backgroundColor={currentTheme.background}
        $position={position}
        onClick={stopPropagation}
      >
        <TopWrapper $titleText={title?.text}>
          {title && (
            <Title $color={currentTheme.title} $size={title.size}>
              {title.text}
            </Title>
          )}
          {showCloseButton && (
            <CloseButton type="button" onClick={onClose}>
              <IoClose color={currentTheme.icon} size={30} />
            </CloseButton>
          )}
        </TopWrapper>
        {children}
      </ModalBox>
    </Backdrop>,
    document.body
  );
};

export default Modal;
