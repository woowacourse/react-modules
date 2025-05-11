import { ComponentProps } from 'react';

type InputAttribute = Pick<ComponentProps<'input'>, 'type' | 'name'>;

export interface InputProps extends InputAttribute {
  value: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValidInput: boolean;
}

function Input({
  type,
  name,
  value,
  handleInputChange,
  isValidInput,
}: InputProps) {
  function onChangeInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(e);
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChangeInputHandler}
      className={`input tx-md ${
        !isValidInput && value !== '' ? 'isNotValid' : ''
      }`}
    />
  );
}

export default Input;
