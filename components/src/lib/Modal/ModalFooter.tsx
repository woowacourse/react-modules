import React from "react";
import styled from "styled-components";

import { FLEX_DIRECTION, JUSTIFY_CONTENT } from "../constants/modal";

import { ElementDirection, ElementJustify } from "../types/modal";

export interface ModalFooterProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  direction?: ElementDirection;
  justify?: ElementJustify;
}

const ModalFooter = ({ children, direction = "row", justify = "between", ...props }: ModalFooterProps) => {
  return (
    <StyledFooter $direction={direction} $justify={justify} {...props}>
      {children}
    </StyledFooter>
  );
};

export default ModalFooter;

const StyledFooter = styled.div<{ $direction: ElementDirection; $justify: ElementJustify }>`
  width: 100%;

  display: flex;
  gap: 12px;
  flex-direction: ${({ $direction }) => FLEX_DIRECTION[$direction]};
  justify-content: ${({ $justify }) => JUSTIFY_CONTENT[$justify]};
`;
