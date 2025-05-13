import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #acacac;
  padding: 0.5rem;
  height: 2.5rem;
  font-size: 0.875rem;

  &:focus {
    border: 1px solid #000;
  }

  &::placeholder {
    color: #acacac;
  }
`;
