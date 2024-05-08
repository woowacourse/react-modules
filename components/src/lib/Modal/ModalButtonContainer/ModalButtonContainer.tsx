import { StyledButtonContainer } from "./ModalButtonContainer.styled";

interface ModalButtonContainerProps {
  buttonPosition: ButtonPosition;
  children: React.ReactNode
}

const ModalButtonContainer = ({ buttonPosition, children }: ModalButtonContainerProps) => {
  return (
    <StyledButtonContainer buttonPosition={buttonPosition}>
      {children}
    </StyledButtonContainer>
  )
}

export default ModalButtonContainer;
