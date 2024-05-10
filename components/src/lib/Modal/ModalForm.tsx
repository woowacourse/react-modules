import React from "react";
import styled from "styled-components";

import { FLEX_DIRECTION } from "../constants/modal";

import { ElementDirection } from "../types/modal";

interface ModalFormProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLFormElement>> {
  direction?: ElementDirection;
}

const ModalForm = ({ children, direction = "row", ...props }: ModalFormProps) => {
  return (
    <StyledForm $direction={direction} {...props}>
      {children}
    </StyledForm>
  );
};

export default ModalForm;

const StyledForm = styled.form<{ $direction: ElementDirection }>`
  display: flex;
  flex-direction: ${({ $direction }) => FLEX_DIRECTION[$direction]};

  gap: 12px;
`;
