import { StyledModalContent } from "./ModalContent.styled";

export interface ModalContentProps {
  children: React.ReactNode;
  position?: "center" | "bottom";
}

const ModalContent = ({ children, position = "center" }: ModalContentProps) => {
  return (
    <StyledModalContent position={position}>{children}</StyledModalContent>
  );
};

export default ModalContent;
