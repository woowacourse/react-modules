import { ComponentProps } from "react";

interface ModalContentProps extends ComponentProps<"div"> {}

function Content({ children, ...props }: ModalContentProps) {
  return <div {...props}>{children}</div>;
}
export default Content;
