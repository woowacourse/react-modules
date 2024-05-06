import { MouseEvent, useEffect } from 'react';
import styled from 'styled-components';

import { CONTENTS_CLASS_NAME } from '../constants/modal';
import { useModalContext } from '../hooks';

const ModalBackdrop = styled.div<{ $backgroundColor: string | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  width: 100%;
  height: 100%;
`;

export default function Backdrop({ handleCloseModal }: { handleCloseModal: () => void }) {
  const { isCloseOnBackdrop, isCloseOnEsc, backgroundColor } = useModalContext();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!isCloseOnBackdrop) return;
    const { target } = e;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest(`.${CONTENTS_CLASS_NAME}`)) return;
    handleCloseModal();
  };

  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    if (event.key === 'Escape' && isCloseOnEsc) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ModalBackdrop className="modal-backdrop" $backgroundColor={backgroundColor?.backdrop} onClick={handleClick} />
  );
}
