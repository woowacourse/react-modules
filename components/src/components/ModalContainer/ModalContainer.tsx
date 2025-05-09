import { MouseEvent, ReactNode } from "react";
import { ModalPosition, ModalSize } from "../../../types/modal";
import { ModalColor } from "../../constants/theme";
import { ModalBox } from "./ModalContainer.styles";

interface ModalContainerProps {
  position: ModalPosition;
  size: ModalSize;
  backgroundColor: ModalColor;
  titleId: string;
  contentId: string;
  children: ReactNode;
}

const ModalContainer = ({
  position,
  size,
  backgroundColor,
  titleId,
  contentId,
  children,
}: ModalContainerProps) => {
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalBox
      $position={position}
      $size={size}
      $backgroundColor={backgroundColor}
      aria-labelledby={titleId}
      aria-describedby={contentId}
      onClick={stopPropagation}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </ModalBox>
  );
};

export default ModalContainer;
