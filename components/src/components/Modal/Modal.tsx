import { ReactNode, useId } from "react";
import { THEME_MAP, ThemeMode } from "../../constants/theme";
import useEscapeKey from "../../hooks/useEscapeKey";
import { ModalPosition, ModalSize } from "../../types/modal";
import Portal from "../Common/Portal/Portal";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalContent from "../ModalContent/ModalContent";
import ModalHeader from "../ModalHeader/ModalHeader";
import { ModalBackdrop } from "./Modal.styles";

interface TitleProps {
  text?: string;
  size?: number;
}

export interface ModalProps {
  position?: ModalPosition;
  size?: ModalSize;
  theme?: ThemeMode;
  title?: TitleProps;
  showCloseButton?: boolean;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({
  position = "center",
  size = "medium",
  theme = "light",
  title,
  showCloseButton = true,
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  useEscapeKey(onClose);
  const currentTheme = THEME_MAP[theme];
  const id = useId();
  const titleId = `modal-title-${id}`;
  const contentId = `modal-content-${id}`;

  return (
    <>
      {isOpen && (
        <Portal>
          <ModalBackdrop
            $position={position}
            onClick={onClose}
            role="presentation"
          >
            <ModalContainer
              position={position}
              size={size}
              backgroundColor={currentTheme.background}
              titleId={titleId}
              contentId={contentId}
            >
              <ModalHeader
                titleId={titleId}
                titleText={title?.text}
                titleSize={title?.size}
                titleColor={currentTheme.title}
                iconColor={currentTheme.icon}
                showCloseButton={showCloseButton}
                onClose={onClose}
              />
              <ModalContent contentId={contentId}>{children}</ModalContent>
            </ModalContainer>
          </ModalBackdrop>
        </Portal>
      )}
    </>
  );
};

export default Modal;
