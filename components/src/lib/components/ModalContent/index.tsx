import { StyledModalContent } from "./ModalContent.styled";

import { ModalContentProps } from "./ModalContent.types";

const ModalContent = ({ children, position, size }: ModalContentProps) => {
  return (
    <StyledModalContent position={position} size={size}>
      {children}
    </StyledModalContent>
  );
};

export default ModalContent;
