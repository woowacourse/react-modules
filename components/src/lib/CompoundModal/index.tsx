import * as React from 'react';

import COLOR_HEXES from '../constants/colorHexes';
import CompoundModalButton from './CompoundModalButton';
import CompoundModalCloseButton from './CompoundModalCloseButton';
import { CompoundModalContext } from './useCompoundModalContext';
import CompoundModalDimmer from './CompoundModalDimmer';
import CompoundModalTitle from './CompoundModalTitle';
import CompoundModalTitleBar from './CompoundModalTitlebar';
import { ModalPosition } from '../types/type';
import styled from '@emotion/styled';
import { useEffect } from 'react';

interface CompoundModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onConfirm?: () => void;
  position?: ModalPosition;
  hasDimmer?: boolean;
}

const CompoundModal = ({
  onClose,
  onConfirm,
  position = 'center',
  hasDimmer = true,
  children,
}: CompoundModalProps) => {
  const value = {
    onClose,
    onConfirm,
  };

  useEffect(() => {
    if (!onClose) return;
    const handleModalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleModalKeyDown);
  }, []);

  return (
    <CompoundModalContext.Provider value={value}>
      {hasDimmer && <CompoundModalDimmer />}
      <ModalContent position={position}>{children}</ModalContent>
    </CompoundModalContext.Provider>
  );
};

const MODAL_CONTENT_STYLE: {
  [key in ModalPosition]: React.CSSProperties;
} = {
  center: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  bottom: {
    boxSizing: 'border-box',
    bottom: 0,
    left: 0,
    width: '100%',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },
};

const ModalContent = styled.aside<{ position: ModalPosition }>(
  ({ position }) => {
    return {
      borderRadius: '8px',
      position: 'fixed',
      backgroundColor: COLOR_HEXES.white,
      padding: '24px 32px',
      ...MODAL_CONTENT_STYLE[position],
    };
  }
);

CompoundModal.titleBar = CompoundModalTitleBar;
CompoundModal.title = CompoundModalTitle;
CompoundModal.button = CompoundModalButton;
CompoundModal.closeButton = CompoundModalCloseButton;

export default CompoundModal;
