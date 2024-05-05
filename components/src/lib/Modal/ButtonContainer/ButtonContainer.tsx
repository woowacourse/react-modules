import React from "react";
import * as Styled from "./style";

export type ButtonDirectionType = "row" | "column";

export interface ButtonContainerProps {
  direction?: ButtonDirectionType;
  children: React.ReactNode;
}

const ButtonContainer = ({
  direction = "row",
  children,
}: ButtonContainerProps) => {
  return (
    <Styled.ButtonContainer $direction={direction}>
      {children}
    </Styled.ButtonContainer>
  );
};

export default ButtonContainer;
