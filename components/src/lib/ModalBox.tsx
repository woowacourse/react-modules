import { ReactNode } from "react";
import styled from "styled-components";
import ModalHeader from "./ModalHeader";
import ButtonBox from "./ButtonBox";
import { modalButtonLayout, modalPosition } from "./modalType";
interface Props {
  position?: modalPosition;
  title: string;
  children?: ReactNode;

  hasXButton: boolean;
  xButtonContent?: string;

  buttonLayout: modalButtonLayout;
  closeButtonContent?: string;
  confirmButtonContent?: string;

  handleConfirmEvent: (e: React.MouseEvent) => void;
  handleCloseEvent: (e: React.MouseEvent) => void;
}
const ModalBox = ({
  title,
  position,
  hasXButton,
  buttonLayout,
  closeButtonContent,
  confirmButtonContent,
  handleConfirmEvent,
  children,
  handleCloseEvent,
  xButtonContent,
}: Props) => {
  return (
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
  );
};

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

export default ModalBox;
