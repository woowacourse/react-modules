import styled from '@emotion/styled';

type InputProps = {
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

function Input({ inputValue, onInputChange, ...rest }: InputProps) {
  return <StyledInput value={inputValue} onChange={onInputChange} {...rest} />;
}

const StyledInput = styled.input`
  height: 28px;
  padding: 8px;

  border-radius: 2px;
  border-width: 1px;

  font-size: 15px;
  line-height: 15px;
`;

export default Input;
