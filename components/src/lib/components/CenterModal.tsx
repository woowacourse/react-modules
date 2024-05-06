import styled from 'styled-components';

import { CONTENTS_CLASS_NAME } from '../constants/modal';
import { useModalContext } from '../hooks';
import { ModalContentsProps } from '../types/modal';

import Backdrop from './Backdrop';

interface StyleProps {
  $borderRadius: string | undefined;
  $modalBackgroundColor: string | undefined;
  $contentsPadding: string | undefined;
}

const CenterModalContents = styled.div<StyleProps>`
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

function CenterModal({ children }: ModalContentsProps) {
  const { closeModal, borderRadius, backgroundColor, contentsPadding } = useModalContext();
  return (
    <>
      <Backdrop handleCloseModal={closeModal} />

      <CenterModalContents
        className={CONTENTS_CLASS_NAME}
        $borderRadius={borderRadius}
        $modalBackgroundColor={backgroundColor?.modal}
        $contentsPadding={contentsPadding}
      >
        {children}
      </CenterModalContents>
    </>
  );
}

export default CenterModal;
