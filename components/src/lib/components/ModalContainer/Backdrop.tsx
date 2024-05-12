import { MouseEvent, useEffect } from 'react';
import styled from 'styled-components';

import { BASIC_BACKGROUND_COLOR } from '@/lib/constants/modal';
import { ModalContainerContext } from '@/lib/contexts';
import { useModalContext } from '@/lib/hooks';

const ModalBackdrop = styled.div<{ $backgroundColor: string | undefined }>`
  position: absolute;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  width: 100%;
  height: 100%;
`;

export default function Backdrop({ handleCloseModal }: { handleCloseModal: () => void }) {
  const {
    isCloseOnBackdrop = true,
    isCloseOnEsc = true,
    backgroundColor = BASIC_BACKGROUND_COLOR,
  } = useModalContext(ModalContainerContext);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!isCloseOnBackdrop) return;

    if (e.target !== e.currentTarget) return;
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
