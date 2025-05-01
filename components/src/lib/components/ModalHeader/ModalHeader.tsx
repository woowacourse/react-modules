import { StyledModalHeader } from "./ModalHeader.styled";

import { ModalHeaderProps } from "./ModalHeader.types";

const ModalHeader = ({ children, ...props }: ModalHeaderProps) => {
  return <StyledModalHeader {...props}>{children}</StyledModalHeader>;
};

export default ModalHeader;
