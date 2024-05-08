import { StyledModalContainer } from "./ModalContainer.styled";

interface ModalContainer {
  size: ModalSize;
  modalPosition: ModalPosition;
  children: React.ReactNode
}

const ModalContainer = ({ size, modalPosition, children }: ModalContainer) => {
  return (
    <StyledModalContainer
      size={size}
      modalPosition={modalPosition}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </StyledModalContainer>
  )
}

export default ModalContainer;
