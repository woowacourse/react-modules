import createStyledModalTitle from "./ModalTitle.styled";

import { ModalTitleProps } from "./ModalTitle.types";

const ModalTitle = ({
  children,
  fontSize,
  fontWeight,
  tag = "h1",
}: ModalTitleProps) => {
  const StyledModalTitle = createStyledModalTitle(tag);

  return (
    <StyledModalTitle fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </StyledModalTitle>
  );
};

export default ModalTitle;
