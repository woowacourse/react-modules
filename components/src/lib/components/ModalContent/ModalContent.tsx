import { StyledModalContent } from "./ModalContent.styled";

import { ModalContentProps } from "./ModalContent.types";

const ModalContent = ({ children, position = "center" }: ModalContentProps) => {
  return (
    <StyledModalContent position={position}>{children}</StyledModalContent>
  );
};

export default ModalContent;
