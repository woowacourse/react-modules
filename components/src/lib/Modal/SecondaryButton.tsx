import Button from "../common/Button";
import { useModalContext } from "../useModalContext";

const SecondaryButton = ({ children }: { children: string }) => {
  const { onClose } = useModalContext();
  return (
    <Button
      data-testid="secondary-button"
      onClick={onClose}
      color="#8b95a1"
      backgroundColor="transparent"
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
