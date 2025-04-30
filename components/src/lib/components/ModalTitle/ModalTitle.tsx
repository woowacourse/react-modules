import { JSX, ReactNode } from "react";

import createStyledModalTitle from "./ModalTitle.styled";

export interface ModalTitleProps {
  children: ReactNode;
  fontSize: string;
  fontWeight: string;
  tag?: keyof JSX.IntrinsicElements;
}

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
