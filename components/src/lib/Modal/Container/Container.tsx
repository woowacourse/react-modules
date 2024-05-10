import * as Styled from "./style";

export type ContainerPositionType = "top" | "bottom" | "center";
export type ModalContainerSizeType = "small" | "medium" | "large";
export interface ContainerProps {
  position: ContainerPositionType;
  size: ModalContainerSizeType;
  children: JSX.Element;
}

const Container = ({ position, size, children }: ContainerProps) => {
  return (
    <Styled.Container $position={position} $size={size}>
      {children}
    </Styled.Container>
  );
};

export default Container;
