/// <reference types="react" />
export type ContainerPositionType = "top" | "bottom" | "center";
export type ContainerSizeType = "small" | "medium" | "large";
export interface ContainerProps {
    position: ContainerPositionType;
    size: ContainerSizeType;
    children: JSX.Element;
}
declare const Container: ({ position, size, children }: ContainerProps) => import("react/jsx-runtime").JSX.Element;
export default Container;
