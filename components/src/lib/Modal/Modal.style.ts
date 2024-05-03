import styled from 'styled-components';
import { ModalButtonType, ModalPositionType } from './Modal';

const colors = {
  grey100: '#ffffff',
  grey200: '#8b95a1',
  grey300: '#666666',
  grey400: '#333333',
  grey500: '#000000',
};

export const ModalOverlay = styled.div`
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
  background: ${colors.grey100};
  min-width: 300px;
  color: ${colors.grey500};
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

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  display: inline-block;
  width: 14px;
  height: 100%;
  background: ${colors.grey100};
  border: 0;
  padding: 0;
`;

export const Main = styled.main`
  max-width: 100vw;
  max-height: 70vh;
  overflow-y: auto;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterButton = styled.button<{ $style: ModalButtonType['style'] }>`
  background: ${(props) => (props.$style === 'primary' ? colors.grey400 : colors.grey100)};
  color: ${(props) => (props.$style === 'primary' ? colors.grey100 : colors.grey200)};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;

  &:hover {
    background: ${(props) => (props.$style === 'primary' ? '#444444' : '#eeeeee')};
    transition: 0.3s ease;
  }
`;
