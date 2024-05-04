import COLOR_HEXES from './constants/colorHexes';
import CloseIcon from './assets/close-icon.png';
import styled from '@emotion/styled';
import { useEffect } from 'react';

type ModalPosition = 'center' | 'bottom';
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  buttonText?: string;
  hasCloseButton?: boolean;
  position?: ModalPosition;
}

export default function Modal({
  onClose,
  onConfirm,
  title,
  buttonText,
  children,
  hasCloseButton = true,
  position = 'center',
}: ModalProps) {
  useEffect(() => {
    const handleModalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleModalKeyDown);
  }, []);

  return (
    <div>
      <ModalDimmer onClick={onClose} />
      <ModalContent position={position}>
        <ModalHeader>
          {title && <ModalTitle>{title}</ModalTitle>}
          {hasCloseButton && <ModalCloseButton onClick={onClose} />}
        </ModalHeader>
        {children}
        {buttonText && (
          <ModalConfirmButton onClick={onConfirm ?? onClose}>
            {buttonText}
          </ModalConfirmButton>
        )}
      </ModalContent>
    </div>
  );
}

const ModalDimmer = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: COLOR_HEXES.blackTransparent1,
});

const ModalHeader = styled.div({
  height: '20px',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  marginBottom: '8px',
});

const ModalCloseButton = styled.button({
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  backgroundImage: `url(${CloseIcon})`,
  backgroundSize: 'contain',
  width: '14px',
  height: '14px',
  padding: '5px',
  marginLeft: '10px',

  '&:only-child': {
    position: 'absolute',
    margin: '0 auto',
    left: '100%',
  },
});

const ModalTitle = styled.p({
  fontSize: '18px',
  margin: 0,
  fontWeight: 700,
  '&:only-child': {
    position: 'absolute',
    margin: '0 auto',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

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

const ModalConfirmButton = styled.button({
  width: '100%',
  height: '44px',
  backgroundColor: COLOR_HEXES.gray1,
  border: 0,
  borderRadius: '5px',

  fontWeight: 700,
  fontSize: '15px',
  lineHeight: '21.72px',
  alignItems: 'center',
  color: COLOR_HEXES.white,
  marginTop: '10px',
  cursor: 'pointer',
});
