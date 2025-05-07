import { JSX, ReactNode } from "react";

export interface ModalTitleProps {
  children: ReactNode;
  fontSize: string;
  fontWeight: string;
  tag?: keyof JSX.IntrinsicElements;
}
