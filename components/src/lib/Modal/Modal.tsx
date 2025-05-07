import { MouseEvent, ReactNode, useId } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { THEME_MAP, ThemeMode } from "../constants/theme";
import useEscapeKey from "../hooks/useEscapeKey";
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
  useEscapeKey(onClose);
  const currentTheme = THEME_MAP[theme];

  const id = useId();
  const titleId = `modal-title-${id}`;
  const contentId = `modal-content-${id}`;

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return createPortal(
    <Backdrop
      $isOpen={isOpen}
      $position={position}
      onClick={onClose}
      role="presentation"
    >
      <ModalBox
        $backgroundColor={currentTheme.background}
        $position={position}
        onClick={stopPropagation}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={contentId}
      >
        <TopWrapper $titleText={title?.text}>
          {title && (
            <Title $color={currentTheme.title} $size={title.size} id={titleId}>
              {title.text}
            </Title>
          )}
          {showCloseButton && (
            <CloseButton type="button" onClick={onClose} aria-label="close">
              <IoClose
                color={currentTheme.icon}
                size={30}
                aria-hidden="true"
                focusable="false"
              />
            </CloseButton>
          )}
        </TopWrapper>
        <div id={contentId}>{children}</div>
      </ModalBox>
    </Backdrop>,
    document.body
  );
};

export default Modal;
