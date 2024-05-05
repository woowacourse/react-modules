import styled from "styled-components";
import ModalBox from "./ModalBox";
import { ReactNode } from "react";
import { modalButtonLayout, modalPosition } from "./modalType";

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
        <ModalContainer
          $position={position === "bottom" ? "flex-end" : "center"}
          onClick={(e) => isClickBackDrop(e) && handleCloseEvent(e)}
        >
          <ModalBox
            title={title}
            position={position}
            hasXButton={hasXButton}
            handleCloseEvent={handleCloseEvent}
            buttonLayout={buttonLayout}
            confirmButtonContent={confirmButtonContent}
            handleConfirmEvent={handleConfirmEvent}
            closeButtonContent={closeButtonContent}
            xButtonContent={xButtonContent}
          >
            {children}
          </ModalBox>
        </ModalContainer>
      }
    </>
  );
};

const ModalContainer = styled.div<{ $position: string }>`
  position: fixed;
  display: flex;
  align-items: ${(props) => props.$position};
  inset: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
`;

export default Modal;
