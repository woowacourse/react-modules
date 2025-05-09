import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color?: "light" | "dark";
  size?: "small" | "medium" | "large";
}
