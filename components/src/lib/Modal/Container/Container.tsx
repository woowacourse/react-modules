import * as Styled from "./style";

export type ContainerPositionType = "top" | "bottom" | "center";

export interface ContainerProps {
  position: ContainerPositionType;
  children: React.ReactNode;
}

const Container = ({ position, children }: ContainerProps) => {
  return <Styled.Container $position={position}>{children}</Styled.Container>;
};

export default Container;
