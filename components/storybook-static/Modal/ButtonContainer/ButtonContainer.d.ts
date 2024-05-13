/// <reference types="react" />
export type ButtonDirectionType = "row" | "column";
export type ButtonContainerPositionType = "left" | "right" | "center";
export interface ButtonContainerProps {
    direction?: ButtonDirectionType;
    position: ButtonContainerPositionType;
    children: JSX.Element;
}
declare const ButtonContainer: ({ direction, position, children, }: ButtonContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonContainer;
