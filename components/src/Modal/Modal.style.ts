import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  background: var(--grey-100);
  color: var(--grey-500);
  padding: 24px 32px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 16px;
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
  width: 24px;
  height: 24px;
  background: var(--grey-100);
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

export const FooterButton = styled.button<{ $style }>`
  background: ${(props) => (props.$style === 'primary' ? 'var(--grey-400)' : 'var(--grey-100)')};
  color: ${(props) => (props.$style === 'primary' ? 'var(--grey-100)' : 'var(--grey-200)')};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
`;
