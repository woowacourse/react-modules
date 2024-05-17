import * as Styled from "./style";

export type ButtonDirectionType = "row" | "column";
export type ButtonContainerPositionType = "left" | "right" | "center";
export interface ButtonContainerProps {
  direction?: ButtonDirectionType;
  position: ButtonContainerPositionType;
  children: JSX.Element;
}

const ButtonContainer = ({
  direction = "row",
  position = "center",
  children,
}: ButtonContainerProps) => {
  return (
    <Styled.ButtonContainer $direction={direction} $position={position}>
      {children}
    </Styled.ButtonContainer>
  );
};

export default ButtonContainer;
