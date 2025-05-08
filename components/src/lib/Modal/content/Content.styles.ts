import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
`;

export const Button = styled.button``;

export const CancelButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
`;
