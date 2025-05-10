import styled from "@emotion/styled";
import type { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
  isValid?: boolean;
}

const StyledInput = styled.input<{ isValid?: boolean }>`
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
  color: var(--black);
  padding: 12px 8px;
  font-size: 1rem;

  &::placeholder {
    color: var(--grey);
  }

  &:focus {
    border-color: var(--black);
  }

  ${({ isValid }) =>
    !isValid &&
    `
    border-color: var(--red);
  `}
`;

function Input({ isValid = true, ...props }: InputProps) {
  return <StyledInput isValid={isValid} {...props} />;
}

export default Input;
