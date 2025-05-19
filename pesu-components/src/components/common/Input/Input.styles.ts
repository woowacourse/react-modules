import styled from '@emotion/styled';

export const Input = styled.input<{ isError: boolean }>`
  border: 1px solid ${({ isError }) => (isError ? '#f00' : '#d7d7d7')};
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  &::placeholder {
    color: #acacac;
  }
  ${({ isError }) => isError && `outline: 1px solid #f00`};
`;
