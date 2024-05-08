import styled from 'styled-components';

export const StyledModalInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #33333340;
  padding: 0 8px;
  box-sizing: border-box;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;

  &:focus {
    border: '2px solid #000000';
  }

  &::placeholder {
    color: #33333340;
  }
`;
