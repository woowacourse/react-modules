import { ModalButton, ModalButtonContainer } from "./Button.styled";

type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  styled?: React.CSSProperties;
  position?: "left" | "right" | "center";
};

export const Button = ({
  title,
  variant = "primary",
  size = "medium",
  onClick,
  styled,
  position = "center",
}: ButtonProps) => {
  return (
    <ModalButtonContainer $position={position}>
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
