import { ComponentProps } from "react";
import { ButtonVarient } from "../../../constants/theme";
import Button from "../Button/Button";

interface ButtonProps extends ComponentProps<"button"> {
  varient?: ButtonVarient;
}

export interface ButtonGroupProps {
  leftProps?: ButtonProps;
  rightProps?: ButtonProps;
}

const ButtonGroup = ({ leftProps, rightProps }: ButtonGroupProps) => {
  return (
    <>
      <Button {...leftProps} />
      <Button {...rightProps} />
    </>
  );
};

export default ButtonGroup;
