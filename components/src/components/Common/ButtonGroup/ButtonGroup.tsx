import { ButtonVarient } from "../../../constants/theme";
import Button from "../Button/Button";
import { ButtonGroupWrapper } from "./ButtonGroup.styles";

export interface ButtonGroupProps {
  left: {
    varient: ButtonVarient;
    text: string;
  };
  right: {
    varient: ButtonVarient;
    text: string;
  };
}

const ButtonGroup = ({ left, right }: ButtonGroupProps) => {
  return (
    <ButtonGroupWrapper>
      <Button varient={left.varient} text={left.text} />
      <Button varient={right.varient} text={right.text} />
    </ButtonGroupWrapper>
  );
};

export default ButtonGroup;
