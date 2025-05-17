import { useModalContext } from "../../hooks/useModalContext";
import Button, { ButtonProps } from "../Common/Button/Button";

const ConfirmButton = ({
  children = "확인",
  onClick,
  ...props
}: ButtonProps) => {
  const { onClose } = useModalContext();

  const handleConfirmClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onClose();
  };

  return (
    <Button variant="primary" onClick={handleConfirmClick} {...props}>
      {children}
    </Button>
  );
};

export default ConfirmButton;
