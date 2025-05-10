import { ComponentProps } from "react";
import { ButtonVarient } from "../../../constants/theme";
import Button from "../Button/Button";
import { ButtonGroupWrapper } from "./ButtonGroup.styles";

interface ButtonProps extends ComponentProps<"button"> {
  varient?: ButtonVarient;
}

export interface ButtonGroupProps {
  left: ButtonProps;
  right: ButtonProps;
}

const ButtonGroup = ({ left, right }: ButtonGroupProps) => {
  const { varient: leftVarient, children: leftChildren, ...leftProps } = left;
  const {
    varient: rightVarient,
    children: rightChildren,
    ...rightProps
  } = right;

  return (
    <ButtonGroupWrapper>
      <Button varient={left.varient} {...leftProps}>
        {left.children}
      </Button>
      <Button varient={right.varient} {...rightProps}>
        {right.children}
      </Button>
    </ButtonGroupWrapper>
  );
};

export default ButtonGroup;
