import styled from '@emotion/styled';
import { ModalFooterProps, ModalPosition, ModalSizeType } from '../type/Modal.types';
import { justifyMap } from '../constants';
export const BackDrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const ModalWrapper = styled.div<{
  position?: ModalPosition;
  size?: ModalSizeType;
}>`
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: fixed;
  top: ${({ position }) => (position === 'bottom' ? 'auto' : '50%')};
  bottom: ${({ position }) => (position === 'bottom' ? '5%' : 'auto')};
  left: 50%;
  padding: 24px 32px;
  border-radius: 8px;
  background-color: white;
  transform: ${({ position }) => (position === 'bottom' ? 'translateX(-50%)' : 'translate(-50%, -50%)')};
  z-index: 1;
  width: ${({ size }) => (size === 'small' ? '320px' : size === 'large' ? '600px' : '480px')};
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

export const CustomBackDrop = styled(BackDrop)`
  background-color: rgba(0, 0, 0, 0.35);
`;
export const StyledFooter = styled.div<{ align?: ModalFooterProps['align'] }>`
  display: flex;
  justify-content: ${({ align = 'right' }) => justifyMap[align]};
  gap: 12px;
`;
