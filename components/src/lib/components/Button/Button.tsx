import styled from "@emotion/styled";

export type ModalButtonProps = {
  text: string;
  onClick: () => void;
  variant?: "confirm" | "cancel";
};

const Button = ({ text, onClick, variant = "confirm" }: ModalButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ variant: "confirm" | "cancel" }>`
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  border: ${({ variant }) =>
    variant === "cancel" ? "1px solid gray" : "none"};
  color: ${({ variant }) => (variant === "cancel" ? "#333333" : "white")};
  background-color: ${({ variant }) =>
    variant === "cancel" ? "white" : "#333333"};
`;
