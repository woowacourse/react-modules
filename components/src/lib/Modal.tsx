import styled from "styled-components";
import { ReactNode } from "react";
import { modalButtonLayout, modalPosition } from "./modalType";
import ModalHeader from "./ModalHeader";
import ButtonBox from "./ButtonBox";

interface Props {
  position?: modalPosition;
  title: string;
  children?: ReactNode;

  hasXButton?: boolean;
  xButtonContent?: string;

  buttonLayout?: modalButtonLayout;
  closeButtonContent?: string;
  confirmButtonContent?: string;

  handleConfirmEvent: (e: React.MouseEvent) => void;
  handleCloseEvent: (e: React.MouseEvent) => void;
}
const Modal = ({
  position,
  title,
  children,

  hasXButton = true,
  xButtonContent,

  buttonLayout = "row",
  closeButtonContent,
  confirmButtonContent = "확인",

  handleConfirmEvent,
  handleCloseEvent,
}: Props) => {
  const isClickBackDrop = (e: React.MouseEvent) => {
    return e.currentTarget === e.target;
  };

  return (
    <>
      {
        <ModalBackDrop
          $position={position === "bottom" ? "flex-end" : "center"}
          onClick={(e) => isClickBackDrop(e) && handleCloseEvent(e)}
        >
          <ModalContainer
            $minWidth={position === "bottom" ? "100%" : "200px"}
            $maxWidth={position === "bottom" ? "100%" : "85%"}
          >
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
            />
          </ModalContainer>
          {children}
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
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div<{ $minWidth: string; $maxWidth: string }>`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => props.$minWidth};
  max-width: ${(props) => props.$maxWidth};
  max-height: 90%;
  background-color: white;
  padding: 24px 32px;
  gap: 5px;
  border-radius: 8px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

export default Modal;
