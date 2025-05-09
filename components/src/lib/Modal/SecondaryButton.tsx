import { ReactNode } from "react";
import Button from "../common/Button";
import { useModalContext } from "../useModalContext";

const SecondaryButton = ({ children }: { children?: ReactNode }) => {
  const { onClose } = useModalContext();
  return <Button onClick={onClose}>{children}</Button>;
};

export default SecondaryButton;
