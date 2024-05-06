import styled from 'styled-components';

import { CONTENTS_CLASS_NAME } from '../constants/modal';
import { useModalContext, useToastModalAnimation } from '../hooks';
import { ModalContentsProps, ModalPosition } from '../types/modal';

interface StyleProps {
  $position: undefined | ModalPosition;
  $timeout: number;
  $isOn: boolean;
  $borderRadius: string | undefined;
  $modalBackgroundColor: string | undefined;
  $contentsPadding: string | undefined;
}

const ToastModalContents = styled.div<StyleProps>`
  position: fixed;
  opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
  transition: opacity ${({ $timeout }) => $timeout}ms ease-in-out;
  text-align: center;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ $modalBackgroundColor }) => $modalBackgroundColor};
  padding: ${({ $contentsPadding }) => $contentsPadding};
  ${({ $position }) =>
    $position &&
    `
      top: ${$position.top}px;
      right: ${$position.right}px;
      bottom: ${$position.bottom}px;
      left: ${$position.left}px;
    `};
`;

function ToastModal({ children }: ModalContentsProps) {
  const { borderRadius, backgroundColor, contentsPadding } = useModalContext();
  const { isOn, position, timeout } = useToastModalAnimation();

  return (
    <ToastModalContents
      className={CONTENTS_CLASS_NAME}
      $position={position}
      $timeout={timeout}
      $isOn={isOn}
      $borderRadius={borderRadius}
      $modalBackgroundColor={backgroundColor?.modal}
      $contentsPadding={contentsPadding}
    >
      {children}
    </ToastModalContents>
  );
}

export default ToastModal;
