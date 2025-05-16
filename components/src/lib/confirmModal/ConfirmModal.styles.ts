import styled from '@emotion/styled';
import Modal from '../baseModal/Modal';

export const CustomTitle = styled(Modal.Title)`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const CustomContent = styled(Modal.Content)`
  background-color: white;
  border-radius: 8px;
  padding: 24px 32px;
`;

export const CustomDescription = styled.div`
  margin: 1rem 0;
`;

export const CustomButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const CustomCancelButton = styled(Modal.CloseButton)`
  font-size: 16px;
  font-weight: bold;
  color: #333333bf;
  border: 1px solid#33333340;
  border-radius: 4px;
  padding: 8px 22px;
  cursor: pointer;
  background-color: transparent;
`;

export const CustomConfirmButton = styled(Modal.Button)`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border-radius: 4px;
  border: none;
  padding: 8px 22px;
  cursor: pointer;
`;
