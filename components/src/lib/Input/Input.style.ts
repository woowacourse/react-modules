import styled from "styled-components";

export const InputBox = styled.input<{ $isError: boolean }>`
  flex: 1;
  border: 1px solid #999999;
  padding: 8px;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 400;
  opacity: 0.8;
  background-color: white;
  min-width: 10px;
  color: black;
  &:focus {
    border: 1px solid black;
  }
`;
