import styled from "styled-components";
import { ReactNode } from "react";
import {
  ButtonPosition,
  ButtonSize,
  ModalButtonLayout,
  ModalPosition,
  ModalSize,
} from "./modalType";
import ModalHeader from "./ModalHeader";
import ButtonBox from "./ButtonBox";

interface Props {
  position?: ModalPosition;
  title: string;
  children?: ReactNode;
  modalSize?: ModalSize;

  hasXButton?: boolean;
  xButtonContent?: string;

  buttonLayout?: ModalButtonLayout;
  closeButtonContent?: string;
  confirmButtonContent?: string;
  buttonPosition?: ButtonPosition;
  buttonSize?: ButtonSize;

  handleConfirmEvent?: (e: React.MouseEvent) => void;
  handleCloseEvent: (e: React.MouseEvent) => void;
}

const Modal = ({
  position,
  title,
  children,
  modalSize,

  hasXButton = true,
  xButtonContent,

  buttonLayout = "row",
  closeButtonContent,
  confirmButtonContent = "확인",
  buttonSize = "MAX",
  buttonPosition = "center",

  handleConfirmEvent,
  handleCloseEvent,
}: Props) => {
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
    <>
      {
        <ModalBackDrop
          $position={position === "bottom" ? "flex-end" : "center"}
          onClick={(e) => isClickBackDrop(e) && handleCloseEvent(e)}
        >
          <ModalContainer $width={getContainerWidth()}>
            <ModalHeader
              title={title}
              hasXButton={hasXButton}
              handleCloseEvent={handleCloseEvent}
              xButtonContent={xButtonContent}
            />
            <ContentWrapper>{children}</ContentWrapper>
            <ButtonBox
              buttonLayout={buttonLayout}
              closeButtonContent={closeButtonContent}
              confirmButtonContent={confirmButtonContent}
              handleCloseEvent={handleCloseEvent}
              handleConfirmEvent={handleConfirmEvent}
              buttonSize={buttonSize}
              buttonPosition={buttonPosition}
            />
          </ModalContainer>
        </ModalBackDrop>
      }
    </>
  );
};

const ModalBackDrop = styled.div<{ $position: string }>`
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

const ModalContainer = styled.div<{ $width: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width};
  max-height: 90%;
  background-color: white;
  padding: 24px 32px;
  gap: 5px;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: auto;
`;

const ContentWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

export default Modal;
