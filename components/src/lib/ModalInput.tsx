import { useState } from 'react';
import { ModalInput as ModalInputStyle } from './styles/ModalStyle';

interface ModalInputProps {
  placeholder?: string;
  initialValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInput = ({
  placeholder = '입력해주세요.',
  initialValue = '',
  onChange,
}: ModalInputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  return (
    <ModalInputStyle>
      <input type="text" value={value} onChange={handleInputChange} placeholder={placeholder} />
    </ModalInputStyle>
  );
};

export default ModalInput;
