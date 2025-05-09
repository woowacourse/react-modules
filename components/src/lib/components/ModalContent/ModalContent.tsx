import { StyledModalContent } from "./ModalContent.styled";

import { ModalContentProps } from "./ModalContent.types";

const ModalContent = ({ children, ...props }: ModalContentProps) => {
  return <StyledModalContent {...props}>{children}</StyledModalContent>;
};

export default ModalContent;
