import styled from "@emotion/styled";

const InputContainer = styled.input<{ height?: string }>`
  width: 100%;
  ${({ height }) => `height:${height}`}
`;

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  height?: string;
}

export default function Input({
  height,
  value,
  onChange,
  ...rest
}: InputInterface) {
  return (
    <InputContainer
      height={height}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}
