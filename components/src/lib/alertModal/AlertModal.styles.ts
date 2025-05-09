import styled from '@emotion/styled';
import Modal from '../baseModal/Modal';

export const CustomTitle = styled(Modal.Title)`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const CustomContent = styled(Modal.Content)<{ size?: 'small' | 'medium' | 'large' }>`
  width: ${(props) => (props.size === 'small' ? '320px' : props.size === 'medium' ? '480px' : '600px')};
  background-color: white;
  border-radius: 8px;
  padding: 24px 32px;
`;

export const CustomCloseButton = styled(Modal.CloseButton)`
  position: absolute;
  right: 32px;
  top: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const CustomDescription = styled.div`
  margin: 1rem 0;
`;

export const CustomButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const CustomButtonConfirm = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border-radius: 4px;
  border: none;
  padding: 8px 22px;
  cursor: pointer;
`;
