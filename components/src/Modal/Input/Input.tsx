import { ModalInput } from "./Input.styled";

type InputProps = {
  placeHolder?: string;
  size?: "small" | "medium" | "large";
  styled?: React.CSSProperties;
};

export const Input = ({
  placeHolder = "입력해주세요.",
  size = "large",
  styled,
}: InputProps) => {
  return <ModalInput $placeHolder={placeHolder} size={size} style={styled} />;
};
