import * as Styled from "./style";

export type ContainerPositionType = "top" | "bottom" | "center";
export type ContainerSizeType = "small" | "medium" | "large";
export interface ContainerProps {
  position: ContainerPositionType;
  size: ContainerSizeType;
  children: JSX.Element;
}

const Container = ({
  position = "center",
  size = "large",
  children,
}: ContainerProps) => {
  return (
    <Styled.Container $position={position} $size={size}>
      {children}
    </Styled.Container>
  );
};

export default Container;
