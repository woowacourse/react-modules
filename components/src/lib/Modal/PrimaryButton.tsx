import { ReactNode } from "react";
import Button from "../common/Button";
import { useModalContext } from "../useModalContext";

const PrimaryButton = ({ children }: { children?: ReactNode }) => {
  const { onConfirm } = useModalContext();
  return <Button onClick={onConfirm}>{children}</Button>;
};

export default PrimaryButton;
