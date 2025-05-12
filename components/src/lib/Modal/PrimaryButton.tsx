import { ReactNode } from "react";
import Button from "../common/Button";
import { useModalContext } from "../useModalContext";

const PrimaryButton = ({ children }: { children?: ReactNode }) => {
  const { onConfirm } = useModalContext();
  return (
    <Button data-testid="primary-button" onClick={onConfirm}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
