import { MouseEvent, ReactNode, useEffect } from "react";
import {
  Backdrop,
  CloseButton,
  ModalBox,
  Title,
  TopWrapper,
} from "./Modal.styles";
import { IoClose } from "react-icons/io5";
import { createPortal } from "react-dom";

interface TitleProps {
  text?: string;
  color?: string;
  size?: number;
}

interface Props {
  position?: "center" | "bottom";
  title?: TitleProps;
  showCloseButton?: boolean;
  backgroundColor?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  position = "center",
  title,
  showCloseButton = true,
  backgroundColor,
  children,
  isOpen,
  onClose,
}: Props) => {
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
        $backgroundColor={backgroundColor}
        $position={position}
        onClick={stopPropagation}
      >
        <TopWrapper $titleText={title?.text}>
          {title && (
            <Title $color={title.color} $size={title.size}>
              {title.text}
            </Title>
          )}
          {showCloseButton && (
            <CloseButton type="button" onClick={onClose}>
              <IoClose
                color={backgroundColor === "#000" ? "#fff" : "#000"}
                size={30}
              />
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
