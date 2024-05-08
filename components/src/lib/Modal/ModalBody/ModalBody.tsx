import { StyledModalBody } from "./ModalBody.styled";

interface ModalBodyProps {
  children: React.ReactNode
}

const ModalBody = ({ children }: ModalBodyProps) => {
  return (
    <StyledModalBody>
      {children}
    </StyledModalBody>
  )
}

export default ModalBody;
