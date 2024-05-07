import * as S from "./Button.style";
export type ButtonColorType = "black" | "white";

export type ButtonSizeType = "small" | "medium" | "large" | "full";
interface ButtonProps {
  label: string;
  onClick: () => void;
  backgroundColor?: ButtonColorType | string;
  textColor?: ButtonColorType;
  size?: ButtonSizeType;
}

const Button = ({
  label,
  onClick,
  backgroundColor = "white",
  textColor = "black",
  size = "full",
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      onClick={onClick}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $size={size}
    >
      {label}
    </S.ButtonWrapper>
  );
};

export default Button;
