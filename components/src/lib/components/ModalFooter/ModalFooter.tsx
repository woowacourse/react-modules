import { StyledModalFooter } from "./ModalFooter.styled";

import { ModalFooterProps } from "./ModalFooter.types";

const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  return <StyledModalFooter {...props}>{children}</StyledModalFooter>;
};

export default ModalFooter;
