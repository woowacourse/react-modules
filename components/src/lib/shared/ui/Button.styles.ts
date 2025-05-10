import styled from '@emotion/styled';

const COLORS = {
  primary: '#333333',
  primaryHover: 'rgb(100, 100, 100)',
  secondary: 'rgb(220, 220, 220)',
  focusShadow: 'rgba(51, 51, 51, 0.5)',
  white: 'white',
};

const SIZES = {
  buttonWidth: '80px',
  buttonHeight: '36px',
  borderRadius: '5px',
};

const BaseButton = styled.button`
  width: ${SIZES.buttonWidth};
  height: ${SIZES.buttonHeight};
  border-radius: ${SIZES.borderRadius};
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${COLORS.focusShadow};
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border: none;

  :hover:not(:disabled) {
    background-color: ${COLORS.primaryHover};
  }
`;

export const CloseButton = styled(BaseButton)`
  color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  background-color: transparent;

  :hover:not(:disabled) {
    background-color: ${COLORS.secondary};
  }
`;
