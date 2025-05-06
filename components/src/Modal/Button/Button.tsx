import { ModalButton, ModalButtonContainer } from "./Button.styled";

type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  styled?: React.CSSProperties;
};

export const Button = ({
  title,
  variant = "primary",
  size = "medium",
  onClick,
  styled,
}: ButtonProps) => {
  return (
    <ModalButtonContainer>
      <ModalButton
        $variant={variant}
        $size={size}
        onClick={onClick}
        style={styled}
      >
        {title}
      </ModalButton>
    </ModalButtonContainer>
  );
};
