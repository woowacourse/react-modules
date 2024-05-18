import { useModalContext } from "../../../hooks/useModalContext";
import { ButtonWrapper } from "./CloseButton.style";

const CloseButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { closeModal } = useModalContext();

  return <ButtonWrapper onClick={closeModal}>{children}</ButtonWrapper>;
};

export default CloseButton;
