import styled from '@emotion/styled';
import { ButtonVariantType } from './type';

export const StyledButton = styled.button<{ variant: ButtonVariantType }>`
  font-weight: 700;
  font-size: 16px;
  padding: 0 20px;
  height: 36px;
  border: ${({ variant }) =>
    variant === 'primary' ? 'none' : '1px solid #33333340'};
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#333333' : '#ffffff'};
  color: ${({ variant }) => (variant === 'primary' ? '#ffffff' : '#8b95a1')};
  border-radius: 4px;

  cursor: pointer;

  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  }
`;
