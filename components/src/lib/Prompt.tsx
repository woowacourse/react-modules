import { InputHTMLAttributes } from "react";

type PromptProps = InputHTMLAttributes<HTMLInputElement>;

const Prompt = ({ ...rest }: PromptProps) => {
  return <input {...rest} />;
};

export default Prompt;
