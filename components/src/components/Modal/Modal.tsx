import { ReactNode, useId } from "react";
import { THEME_MAP, ThemeMode } from "../../constants/theme";
import useEscapeKey from "../../hooks/useEscapeKey";
import { ModalPosition, ModalSize } from "../../types/modal";
import Portal from "../Common/Portal/Portal";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalHeader from "../ModalHeader/ModalHeader";
import { ModalBackdrop, ModalContent } from "./Modal.styles";
import Button from "../Common/Button/Button";
import ButtonGroup from "../Common/ButtonGroup/ButtonGroup";
import Input from "../Common/Input/Input";

interface TitleProps {
  text?: string;
  size?: number;
}

export interface ModalProps {
  /**
   * 모달 레이아웃 설정
   */
  position?: ModalPosition;
  size?: ModalSize;
  theme?: ThemeMode;

  /**
   * 모달 상태 제어
   */
  isOpen: boolean;
  onClose: () => void;

  /**
   * 모달 컨텐츠
   */
  children: ReactNode;

  /**
   * 헤더 설정
   */
  title?: TitleProps;
  showCloseButton?: boolean;
}

const Modal = ({
  position = "center",
  size = "medium",
  theme = "light",
  isOpen,
  onClose,
  children,
  title,
  showCloseButton = true,
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
              <ModalContent id={contentId}>{children}</ModalContent>
            </ModalContainer>
          </ModalBackdrop>
        </Portal>
      )}
    </>
  );
};

Modal.Button = Button;
Modal.ButtonGroup = ButtonGroup;
Modal.Input = Input;

export default Modal;
