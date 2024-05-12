import * as Styled from './Input.styled';

import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  labelText?: string;

  /**
   * @defaultValue 'row'
   * @remarks type LabelPosition = "row" | "column"
   */
  labelPosition?: LabelPosition;

  /**
   * @defaultValue ''
   */
  placeholder?: string;

  /**
   * @defaultValue '#333333'
   */
  primaryColor?: string;
}

export type LabelPosition = 'row' | 'column';

const Input = ({
  value,
  onChange,
  labelText,
  labelPosition = 'row',
  placeholder = '',
  primaryColor = '#333333',
  ...props
}: InputProps) => {
  return labelText ? (
    <Styled.Label labelPosition={labelPosition}>
      {labelText}
      <Styled.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        primaryColor={primaryColor}
        {...props}
      />
    </Styled.Label>
  ) : (
    <Styled.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      primaryColor={primaryColor}
      {...props}
    />
  );
};

export default Input;
