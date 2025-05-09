import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
`;

export const CancelButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  color: #000;
  outline: none;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 8px;
`;
