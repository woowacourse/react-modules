import { forwardRef } from "react";
import { InputBox } from "./Input.style";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError: boolean;
  maxLength?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isError, maxLength, ...restProps }, ref) => {
    return (
      <InputBox
        ref={ref}
        $isError={isError}
        maxLength={maxLength}
        {...restProps}
      />
    );
  }
);

export default Input;
