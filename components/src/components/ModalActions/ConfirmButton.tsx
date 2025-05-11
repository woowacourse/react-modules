import { useModalContext } from "../../hooks/useModalContext";
import Button, { ButtonProps } from "../Common/Button/Button";

const ConfirmButton = ({ children, onClick, ...props }: ButtonProps) => {
  const { onClose } = useModalContext();

  const handleConfirmClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    onClose();
  };

  return (
    <Button varient="primary" onClick={handleConfirmClick} {...props}>
      {children}
    </Button>
  );
};

export default ConfirmButton;
