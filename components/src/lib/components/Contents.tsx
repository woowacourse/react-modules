import { ReactNode } from 'react';
import styled from 'styled-components';

import { BASIC_BACKGROUND_COLOR, BASIC_BORDER_RADIUS, BASIC_PADDING } from '../constants/modal';
import { ModalContainerContext } from '../contexts';
import { useModalContext } from '../hooks';

export interface ModalContentsStyleProps {
  $isOn?: boolean;
  $timeout?: number;
  $borderRadius: string | undefined;
  $modalBackgroundColor: string | undefined;
  $contentsPadding: string | undefined;
}

export const ModalContents = styled.div<ModalContentsStyleProps>`
  -webkit-box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.19);
  border-radius: ${({ $borderRadius }) => $borderRadius};
  min-width: 50vw;
  max-width: 90vw;
  min-height: 12.5rem;
  max-height: 90vw;
  background-color: ${({ $modalBackgroundColor }) => $modalBackgroundColor || 'transparent'};
  padding: ${({ $contentsPadding }) => $contentsPadding};
  position: relative;

  @media screen and (max-width: 435px) {
    min-width: 80vw;
  }
`;

export default function Contents({ children }: { children: ReactNode }) {
  const {
    borderRadius = BASIC_BORDER_RADIUS,
    backgroundColor = BASIC_BACKGROUND_COLOR,
    contentsPadding = BASIC_PADDING,
  } = useModalContext(ModalContainerContext);
  return (
    <ModalContents
      $borderRadius={borderRadius}
      $modalBackgroundColor={backgroundColor?.modal}
      $contentsPadding={contentsPadding}
    >
      {children}
    </ModalContents>
  );
}
