import ModalButton from './ModalButton';
import styled from 'styled-components';

interface ModalFooterProps {
  direction?: 'column' | 'row';
  children: React.ReactNode;
}

export default function ModalFooter({ direction = 'column', children }: ModalFooterProps) {
  return <Footer $direction={direction}>{children}</Footer>;
}

ModalFooter.Button = ModalButton;

const Footer = styled.footer<{ $direction: ModalFooterProps['direction'] }>`
  display: flex;
  gap: 12px;

  ${(props) => {
    if (props.$direction === 'column') {
      return `
        flex-direction: column;
      `;
    }
    if (props.$direction === 'row') {
      return `
        flex-direction: row;
        justify-content: flex-end;
      `;
    }
  }}
`;
