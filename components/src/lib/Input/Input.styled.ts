import { LabelPosition } from './Input';
import styled from 'styled-components';

export const Label = styled.label<{ labelPosition: LabelPosition }>`
  display: flex;
  flex-direction: ${(props) => props.labelPosition};
  align-items: ${(props) => (props.labelPosition === 'row' ? 'center' : '')};

  gap: 8px;
  color: #333333;

  width: 100%;

  input::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Input = styled.input<{ primaryColor: string }>`
  border: 1px solid #333333;
  outline: none;

  border-radius: 4px;
  padding: 4px;
  margin: 4px 0;

  box-sizing: border-box;
  width: 100%;

  &:hover,
  &:focus {
    border: ${(props) => `1px solid ${props.primaryColor}`};
  }
`;
