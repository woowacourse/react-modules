import { forwardRef } from "react";
import * as S from "./Input.style";
export interface InputProps extends React.ComponentProps<"input"> {
  isError: boolean;
  maxLength?: number;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isError, maxLength, label, ...restProps }, ref) => {
    return (
      <S.FlexBox>
        <span>{label}</span>
        <S.InputBox
          ref={ref}
          $isError={isError}
          maxLength={maxLength}
          {...restProps}
        />
      </S.FlexBox>
    );
  }
);

export default Input;
