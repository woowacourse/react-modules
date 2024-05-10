import React from 'react';
import styled from 'styled-components';

const ModalInputStyle = styled.input`
  width: 100%;
  padding: 0.8rem;
  gap: 0.8rem;
  border-radius: 0.4rem;
  border: 0.1rem 0 0 0;
  opacity: 0px;
  border: 0.1rem solid var(--black-color);

  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 14.88px;
  text-align: left;

  color: var(--black-color);
`;

interface ModalInputType {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ModalInput({ onChangeInput }: ModalInputType) {
  return <ModalInputStyle onChange={onChangeInput} />;
}

export default ModalInput;
