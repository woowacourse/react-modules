import React from "react";
import styled from "styled-components";

type ButtonDirectionType = "row" | "column";

export interface ButtonContainerProps {
  direction?: ButtonDirectionType;
  children: React.ReactNode;
}

const FLEX_DIRECTION = {
  row: "row",
  column: "column",
};

const ButtonContainer = ({
  direction = "row",
  children,
}: ButtonContainerProps) => {
  return (
    <StyledButtonContainer $direction={direction}>
      {children}
    </StyledButtonContainer>
  );
};

export default ButtonContainer;

const StyledButtonContainer = styled.div<{ $direction: ButtonDirectionType }>`
  display: flex;
  flex-direction: ${({ $direction }) => FLEX_DIRECTION[$direction]};
  gap: 12px;

  width: 100%;
`;
