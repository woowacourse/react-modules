import { StyleDirection } from '../../types';
import styled from 'styled-components';

export interface ModalContentProps {
  message?: string;
  $direction?: StyleDirection;
  children?: React.ReactNode;
}

function ModalContent({
  message,
  $direction = 'column',
  children,
}: ModalContentProps) {
  return (
    <ContentContainer $direction={$direction}>
      {message && <Message>{message}</Message>}
      {children}
    </ContentContainer>
  );
}

export default ModalContent;

interface ContentContainerStyleProps {
  $direction: StyleDirection;
}

const ContentContainer = styled.div<ContentContainerStyleProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: 2rem;
`;

const Message = styled.div`
  font-size: var(--font-size-sm);
`;
