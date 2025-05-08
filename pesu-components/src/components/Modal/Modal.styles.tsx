import styled from '@emotion/styled';
import { ModalInterface } from './Modal';
import { Device } from '../../hooks/useDevice';

const getModalWidth = (size: 'small' | 'medium' | 'large', position: 'center' | 'bottom') => {
  if (position === 'center') {
    switch (size) {
      case 'small':
        return '320px';
      case 'large':
        return '600px';
      case 'medium':
      default:
        return '480px';
    }
  } else {
    return '100%';
  }
};

export const ModalContainer = styled.div<
  Pick<ModalInterface, 'position' | 'margin' | 'zIndex' | 'size'> & { device: Device }
>`
  width: ${(props) => getModalWidth(props.size ?? 'medium', props.position ?? 'center')};
  box-sizing: border-box;
  height: fit-content;

  background-color: white;
  padding: 24px 32px;

  border-radius: ${(props) => (props.position === 'center' ? '8px' : '8px 8px 0 0')};

  position: fixed;

  left: 0;
  right: 0;
  margin: 0 auto;

  top: ${(props) => (props.position === 'center' ? '50%' : 'auto')};
  transform: translateY(-50%);

  bottom: 0;

  z-index: ${(props) => props.zIndex};
`;

export const ModalTop = styled.div`
  display: flex;
`;

export const ModalContent = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-left: auto;
  justify-content: flex-end;
  width: 100%;
`;

export const ModalBottom = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const ModalBackdrop = styled.div`
  background-color: #000;
  opacity: 35%;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;

  margin-left: auto;
`;
