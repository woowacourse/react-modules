import styled from 'styled-components';

export const Input = styled.input<{ $isError: boolean }>`
  width: 100%;
  height: 32px;
  padding: 8px;
  font-size: 11px;
  border-radius: 2px;
  border: ${(props) => (props.$isError ? `1px solid #FF0000` : `1px solid #000000`)};
`;

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 6px;
  display: inline-block;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  margin-top: 6px;
  color: #ff0000;
`;
