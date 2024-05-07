import { ReactNode } from 'react';
import styled from 'styled-components';

import { BASIC_BACKGROUND_COLOR, BASIC_BORDER_RADIUS, BASIC_PADDING } from '../constants/modal';
import { ModalContainerContext } from '../contexts';
import { useModalContext } from '../hooks';
import { Background, ModalPosition } from '../types/modal';

export interface ModalContentsStyleProps {
  $borderRadius: string | undefined;
  $backgroundColor: Background | undefined;
  $contentsPadding: string | undefined;
  $isOn?: boolean;
  $timeout?: number;
  $position?: ModalPosition;
}

export const ModalContents = styled.div<ModalContentsStyleProps>`
  -webkit-box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.19);
  border-radius: ${({ $borderRadius }) => $borderRadius || BASIC_BORDER_RADIUS};
  min-width: 50vw;
  max-width: 90vw;
  min-height: 12.5rem;
  max-height: 90vw;
  background-color: ${({ $backgroundColor }) => $backgroundColor?.modal || BASIC_BACKGROUND_COLOR.modal};
  padding: ${({ $contentsPadding }) => $contentsPadding || BASIC_PADDING};
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
    <ModalContents $borderRadius={borderRadius} $backgroundColor={backgroundColor} $contentsPadding={contentsPadding}>
      {children}
    </ModalContents>
  );
}
