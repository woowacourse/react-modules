import { ModalInput } from "./Input.styled";

type InputProps = {
  /** Input의 placeholder 텍스트 */
  $placeholder?: string;
  /** input 크기 */
  size?: "small" | "medium" | "large";
  /** input 스타일 */
  styled?: React.CSSProperties;
};

export const Input = ({
  $placeholder = "입력해주세요.",
  size = "large",
  styled,
}: InputProps) => {
  return <ModalInput $placeholder={$placeholder} size={size} style={styled} />;
};
