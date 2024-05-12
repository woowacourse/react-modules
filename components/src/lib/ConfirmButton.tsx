import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ConfirmButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onConfirm: () => void;
}

const ConfirmButton = ({
  children,
  onConfirm,
  ...rest
}: PropsWithChildren<ConfirmButtonProps>) => {
  return (
    <button onClick={onConfirm} {...rest}>
      {children}
    </button>
  );
};

export default ConfirmButton;
