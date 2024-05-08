import { StyledModalInput } from "./ModalInputField.styled";

interface ModalInputField<T> {
  placeholder: string;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInputField = <T extends string>({ placeholder, value, onChange }: ModalInputField<T>) => {
  return (
    <StyledModalInput placeholder={placeholder} value={value} onChange={onChange} />
  )
}

export default ModalInputField;
