import { StyleDirection, StyleAlign } from '../../types';
import styled from 'styled-components';
import { JUSTIFY_CONTENT } from '../../constants/styles';

export interface ModalFooterProps {
  $direction?: StyleDirection;
  $align?: StyleAlign;
  children?: React.ReactNode;
}

function ModalFooter({
  $direction = 'row',
  $align = 'end',
  children,
}: ModalFooterProps) {
  return (
    <FooterContainer $direction={$direction} $align={$align}>
      {children}
    </FooterContainer>
  );
}

export default ModalFooter;

interface ContentContainerStyleProps {
  $direction: StyleDirection;
  $align: StyleAlign;
}

const FooterContainer = styled.div<ContentContainerStyleProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $align }) => JUSTIFY_CONTENT[$align]};
  align-items: center;
  gap: 2rem;
`;
