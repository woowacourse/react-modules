import * as Styled from './Input.styled';

export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  labelText?: string;
  labelPosition?: LabelPosition;
  placeholder?: string;

  primaryColor?: string;
}

export type LabelPosition = 'row' | 'column';

const Input = ({
  value,
  onChange,
  labelText = '',
  labelPosition = 'row',
  placeholder = '',
  primaryColor,
}: InputProps) => {
  return (
    <Styled.Label labelPosition={labelPosition}>
      {labelText}
      <Styled.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        primaryColor={primaryColor || '#333333'}
      />
    </Styled.Label>
  );
};

export default Input;
