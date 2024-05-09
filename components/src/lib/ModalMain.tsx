import { ReactNode } from "react";
import { ModalPosition, ModalSize } from "./modalType";
import styled from "styled-components";

interface MainModalProps {
  backgroundColor?: string;
  position?: ModalPosition;
  children?: ReactNode;
  modalSize?: ModalSize;
  setModalClose: (e: React.MouseEvent) => void;
}

const ModalMain = ({
  backgroundColor = "white",
  position,
  children,
  modalSize = "L",
  setModalClose,
}: MainModalProps) => {
  const isClickBackDrop = (e: React.MouseEvent) => {
    return e.currentTarget === e.target;
  };

  const getContainerWidth = () => {
    if (position === "bottom") return "100%";
    if (modalSize === "L") return "37.5rem";
    if (modalSize === "M") return "30rem";
    if (modalSize === "S") return "20rem";
    return "30rem";
  };

  return (
    <ModalBackDrop
      $position={position === "bottom" ? "flex-end" : "center"}
      onClick={(e) => isClickBackDrop(e) && setModalClose(e)}
    >
      <ModalContainer
        $backgroundColor={backgroundColor}
        $width={getContainerWidth()}
      >
        {children}
      </ModalContainer>
    </ModalBackDrop>
  );
};

const ModalBackDrop = styled.div<{
  $position: string;
}>`
  position: fixed;
  display: flex;
  align-items: ${(props) => props.$position};
  inset: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  background: rgba(0, 0, 0, 0.581);
  z-index: 10;
`;

const ModalContainer = styled.div<{ $backgroundColor: string; $width: string }>`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.$width};
  max-height: 90%;
  padding: 24px 32px;
  gap: 5px;

  background-color: ${(props) => props.$backgroundColor};
  border-radius: 8px;

  box-sizing: border-box;
  overflow: auto;
`;
export default ModalMain;
