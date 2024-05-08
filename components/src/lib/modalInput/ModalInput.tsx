import { ReactNode, CSSProperties } from "react";
import "./ModalInput.css";

interface ModalInputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  placeholder?: string;
  children?: ReactNode;
  className?: string;
  customStyle?: CSSProperties;
}

const ModalInput = ({ onChange, type = "string", placeholder = "", className = "", customStyle = {}, children }: ModalInputProps) => {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`modal-input ${className}`}
      style={customStyle}
    >
      {children}
    </input>
  );
};

export default ModalInput;
