import { ChangeEvent } from "react";
import style from "./ModalPrompt.module.css";

interface InputPromptProps {
  value: string | number;
  placeholder: string;
  onChange: (e: ChangeEvent) => void;
}

export function InputPrompt({
  value,
  placeholder,
  onChange,
}: InputPromptProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={style.inputPrompt}
      tabIndex={0}
    />
  );
}
