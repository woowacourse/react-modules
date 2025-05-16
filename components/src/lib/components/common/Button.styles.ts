import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: end;
`;

export const StyledButton = styled.button<{ varient: 'confirm' | 'cancel' }>`
  outline: 1px solid #333333bf;
  margin-right: 10px;
  background-color: ${({ varient }) => {
    switch (varient) {
      case 'confirm':
        return '#333333';
      case 'cancel':
        return '#ffffff';
    }
  }};
  color: ${({ varient }) => {
    switch (varient) {
      case 'confirm':
        return '#ffffff';
      case 'cancel':
        return '#333333';
    }
  }};
`;
