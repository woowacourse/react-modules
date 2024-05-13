import { StyleDirection } from '../../types';
import styled from 'styled-components';

export interface ModalContentProps {
  basicDescription?: string;
  $direction?: StyleDirection;
  children?: React.ReactNode;
}

function ModalContent({
  basicDescription,
  $direction = 'column',
  children,
}: ModalContentProps) {
  return (
    <ContentContainer $direction={$direction}>
      {basicDescription && (
        <BasicDescription>{basicDescription}</BasicDescription>
      )}
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

const BasicDescription = styled.div`
  width: 100%;
  font-size: var(--font-size-sm);
`;
