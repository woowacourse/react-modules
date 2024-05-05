import * as Styled from "./style";

export type ButtonDirectionType = "row" | "column";

export interface ButtonContainerProps {
  direction?: ButtonDirectionType;
  children: JSX.Element;
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
