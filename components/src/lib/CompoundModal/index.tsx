import * as React from 'react';

import { ModalPosition, ModalSize } from '../types/type';

import COLOR_HEXES from '../constants/colorHexes';
import CompoundModalButton from './CompoundModalButton';
import CompoundModalButtonContainer from './CompoundModalButtonContainer';
import CompoundModalCloseButton from './CompoundModalCloseButton';
import { CompoundModalContext } from './useCompoundModalContext';
import CompoundModalDimmer from './CompoundModalDimmer';
import CompoundModalTextInput from './CompoundModalTextInput';
import CompoundModalTitle from './CompoundModalTitle';
import CompoundModalTitleBar from './CompoundModalTitlebar';
import styled from '@emotion/styled';
import { useEffect } from 'react';

export interface CompoundModalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  position?: ModalPosition;
  size?: ModalSize;
}

const CompoundModal = ({
  onClose,
  onConfirm,
  onCancel,
  position = 'center',
  size = 'medium',
  children,
}: CompoundModalProps) => {
  const value = {
    onClose,
    onConfirm,
    onCancel,
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
      <CompoundModalDimmer />
      <ModalContent position={position} size={size}>
        {children}
      </ModalContent>
    </CompoundModalContext.Provider>
  );
};

const MODAL_CONTENT_POSITION: {
  [key in ModalPosition]: React.CSSProperties;
} = {
  center: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  bottom: {
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',

    margin: '0 auto',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },
};

const MODAL_CONTENT_SIZE: {
  [key in ModalSize]: React.CSSProperties;
} = {
  small: { width: '320px', maxWidth: '100%' },
  medium: { width: '480px', maxWidth: '100%' },
  large: { width: '600px', maxWidth: '100%' },
  'full-width': { width: '100%' },
};

const ModalContent = styled.aside<{ position: ModalPosition; size: ModalSize }>(
  ({ position, size }) => {
    return {
      borderRadius: '8px',
      position: 'fixed',
      backgroundColor: COLOR_HEXES.white,
      padding: '24px 32px',
      ...MODAL_CONTENT_POSITION[position],
      ...MODAL_CONTENT_SIZE[size],
    };
  }
);

CompoundModal.titleBar = CompoundModalTitleBar;
CompoundModal.title = CompoundModalTitle;
CompoundModal.button = CompoundModalButton;
CompoundModal.closeButton = CompoundModalCloseButton;
CompoundModal.buttonContainer = CompoundModalButtonContainer;
CompoundModal.textInput = CompoundModalTextInput;

export default CompoundModal;
