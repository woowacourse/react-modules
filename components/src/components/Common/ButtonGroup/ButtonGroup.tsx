import { ReactNode } from "react";
import { ButtonVarient } from "../../../constants/theme";
import Button from "../Button/Button";
import { ButtonGroupWrapper } from "./ButtonGroup.styles";

export interface ButtonGroupProps {
  left: {
    varient: ButtonVarient;
    children: ReactNode;
  };
  right: {
    varient: ButtonVarient;
    children: ReactNode;
  };
}

const ButtonGroup = ({ left, right }: ButtonGroupProps) => {
  return (
    <ButtonGroupWrapper>
      <Button varient={left.varient}>{left.children}</Button>
      <Button varient={right.varient}>{right.children}</Button>
    </ButtonGroupWrapper>
  );
};

export default ButtonGroup;
