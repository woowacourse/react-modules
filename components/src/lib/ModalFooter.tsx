import { ReactNode } from 'react';
import styled from 'styled-components';

export type FooterLayout = 'row' | 'column';

export interface ModalFooterProps {
  position?: FooterLayout;
  children: ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  position = 'row',
  children,
}: ModalFooterProps) => {
  return <Footer $position={position}>{children}</Footer>;
};

const Footer = styled.footer<{ $position: string }>`
  display: flex;
  flex-direction: ${(props) => props.$position};
  background-color: white;
  gap: 5px;
  border-radius: 8px;
  justify-content: flex-end;
  align-items: center;
`;

export default ModalFooter;
