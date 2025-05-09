import styled from '@emotion/styled';

interface ButtonProps {
  isFixed?: boolean;
  variant?: 'outline' | 'primary';
  isExpanded?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.isExpanded ? '100%' : '100px')};
  height: 48px;
  background-color: ${(props) => (props.variant === 'outline' ? 'transparent' : '#000')};
  color: ${(props) => (props.variant === 'outline' ? '#333333BF' : '#fff')};
  border: ${(props) => (props.variant === 'outline' ? '1px solid #000' : 'none')};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  ${({ isFixed }) =>
    isFixed &&
    `
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0;
    z-index: 1;
  `}

  &:hover {
    background-color: #333;
  }

  &:active {
    background-color: #666;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
