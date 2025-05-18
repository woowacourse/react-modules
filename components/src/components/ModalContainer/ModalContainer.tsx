import { forwardRef, MouseEvent, ReactNode } from "react";
import { useModalContext } from "../../hooks/useModalContext";
import { ModalPosition, ModalSize } from "../../types/modal";
import { ModalWrapper } from "./ModalContainer.styles";

interface ModalContainerProps {
  position: ModalPosition;
  size: ModalSize;
  titleId: string;
  contentId: string;
  children: ReactNode;
}

const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>(
  ({ position, size, titleId, contentId, children }, ref) => {
    const { currentTheme } = useModalContext();

    const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    };

    return (
      <ModalWrapper
        ref={ref}
        $position={position}
        $size={size}
        $backgroundColor={currentTheme.background}
        aria-labelledby={titleId}
        aria-describedby={contentId}
        onClick={stopPropagation}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </ModalWrapper>
    );
  }
);

export default ModalContainer;
