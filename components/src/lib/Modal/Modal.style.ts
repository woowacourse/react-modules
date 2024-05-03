import styled from 'styled-components';
import { ModalPositionType } from './Modal';

export const COLORS = {
  grey100: '#ffffff',
  grey200: '#eeeeee',
  grey300: '#8b95a1',
  grey400: '#666666',
  grey500: '#444444',
  grey600: '#333333',
  grey700: '#000000',
};

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div<{ $position: ModalPositionType }>`
  background: ${COLORS.grey100};
  min-width: 300px;
  color: ${COLORS.grey700};
  padding: 24px 32px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 16px;

  ${(props) => {
    if (props.$position === 'center') {
      return `
        position: relative;
        margin: auto;
        border-radius: 10px;
      `;
    }
    if (props.$position === 'bottom') {
      return `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        border-radius: 10px 10px 0 0;
      `;
    }
  }}
`;
