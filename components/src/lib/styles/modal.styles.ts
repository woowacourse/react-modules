import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 36px;
  font-size: 15px;
  border-radius: 4px;
`;

export const ConfirmButton = styled(Button)`
  background-color: #333;
  color: #fff;
`;

export const CancelButton = styled(Button)`
  background-color: transparent;
  color: #333333bf;
  border: 1px solid #33333340;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #33333340;
  font-size: 15px;
  margin-top: 16px;
`;
