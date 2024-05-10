import React from "react";
import styled from "styled-components";

type ModalInputProps = React.HTMLAttributes<HTMLInputElement>;

const ModalInput = ({ ...props }: ModalInputProps) => {
  return <StyledInput {...props} />;
};

export default ModalInput;

const StyledInput = styled.input`
  height: 32px;
  width: 100%;

  border-radius: 4px;
  outline: none;
  text-indent: 8px;
  line-height: 15px;
  font-size: 11px;
`;
