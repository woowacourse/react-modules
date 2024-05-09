import styled from 'styled-components';

export const StyledModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledModalInput = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 32px;
  border-radius: 4px;
  border: ${(props) =>
    props.hasError ? '1px solid red' : '1px solid #33333340'};
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

export const StyledModalInputError = styled.p`
  font-family: Inter;
  font-size: 8px;
  font-weight: 400;
  text-align: left;
  color: red;
`;
