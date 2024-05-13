import { ButtonHTMLAttributes } from '../../../../node_modules/react';

export type ButtonColorType = "dark" | "light";
export type ButtonSizeType = "large" | "small";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: ButtonColorType;
    size: ButtonSizeType;
    onClick: () => void;
    children: JSX.Element;
}
declare const Button: ({ color, size, onClick, children, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
