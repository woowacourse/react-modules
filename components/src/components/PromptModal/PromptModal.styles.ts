import styled from '@emotion/styled';

export const MainContainer = styled.div`
  width: 100%;
  flex: 1;
  text-align: start;
  padding: 20px 0;
`;

export const InputField = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  border: 1px solid #333333bf;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: end;
`;

export const CancelButton = styled.button`
  outline: 1px solid #333333bf;
  background-color: #ffffff;
  color: #333333bf;
  margin-right: 10px;
`;

export const ConfirmButton = styled.button`
  background-color: #333333;
  color: #ffffff;
`;
