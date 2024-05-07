import styled from 'styled-components';

import { useToastModalAnimation } from '../hooks';
import { ToastModalProps } from '../types/modal';

import { ModalContents, ModalContentsStyleProps } from './Contents';
import ModalContainer from './ModalContainer';

const ToastModalContents = styled(ModalContents)<ModalContentsStyleProps>`
  position: fixed;
  opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
  transition: opacity ${({ $timeout }) => $timeout}ms ease-in-out;
  -webkit-box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.21);
  min-height: initial;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $position }) =>
    $position &&
    `
      top: ${$position.top}px;
      right: ${$position.right}px;
      bottom: ${$position.bottom}px;
      left: ${$position.left}px;
    `};
`;

function ToastModal(props: ToastModalProps) {
  const {
    openModal,
    setOpenModal,
    children,
    borderRadius,
    backgroundColor,
    contentsPadding,
    animationDuration,
    position,
    isNeedAnimation,
    toastDuration,
  } = props;

  if (!position) {
    throw new Error('position을 지정해주세요.');
  }

  const closeModal = () => setOpenModal(false);
  const { isOn, timeout } = useToastModalAnimation({
    closeModal,
    animationDuration,
    isNeedAnimation,
    toastDuration,
    openModal,
  });

  return (
    <ModalContainer {...props} closeModal={closeModal}>
      <ToastModalContents
        $position={position}
        $timeout={timeout}
        $isOn={isOn}
        $borderRadius={borderRadius}
        $backgroundColor={backgroundColor}
        $contentsPadding={contentsPadding}
      >
        {children}
      </ToastModalContents>
    </ModalContainer>
  );
}

export default ToastModal;
