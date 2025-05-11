import { useModalContext } from "../../hooks/useModalContext";
import Button, { ButtonProps } from "../Common/Button/Button";

const CancelButton = ({ children = "취소", ...props }: ButtonProps) => {
  const { onClose } = useModalContext();

  return (
    <Button varient="secondary" onClick={onClose} {...props}>
      {children}
    </Button>
  );
};

export default CancelButton;
