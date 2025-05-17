interface InputProps {
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

function Input({ type, onChange }: InputProps) {
  return <input type={type} onChange={onChange} />;
}
export default Input;
