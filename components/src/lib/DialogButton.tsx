import { ComponentProps } from "react";
import { StyledButton } from "./DialogButton.css";

type DialogButtonProps = Omit<ComponentProps<"button">, "type"> & {
  type: "primary" | "basic";
  text: string;
};

export default function DialogButton({
  type,
  text,
  ...rest
}: DialogButtonProps) {
  return (
    <StyledButton $type={type} {...rest}>
      {text}
    </StyledButton>
  );
}
