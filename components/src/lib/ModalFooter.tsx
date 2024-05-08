import { ReactNode } from 'react';
import styled from 'styled-components';

type Position = 'row' | 'column';

interface Props {
  position?: Position;
  children: ReactNode;
}

function ModalFooter({ position = 'row', children }: Props) {
  return <Footer $position={position}>{children}</Footer>;
}

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
