import styled from 'styled-components';

type ModalPosition = 'center' | 'bottom'; // TODO: 'top' 추가?

interface ModalProps {
  position: ModalPosition;
  title: string;
  children?: React.ReactNode;
  content?: string;
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export default function Modal({
  position,
  title,
  children,
  content,
  isOpen,
  onConfirm,
  onClose,
}: ModalProps) {
  const handleClose = () => {
    console.log('a??');
    onClose();
  };
  return (
    <>
      <ModalWrapper open={isOpen}>
        <ModalBackground onClick={handleClose} />
        <ModalContainer position={position}>
          <Title>{title}</Title>
          {children}
        </ModalContainer>
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: ${({ open }) => (open ? 'flex' : 'none')};
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div<{ position: ModalPosition }>`
  position: fixed;
  top: ${({ position }) => position === 'center' && '50%'};
  bottom: ${({ position }) => position === 'bottom' && '0px'};
  left: 50%;
  transform: ${({ position }) =>
    position === 'center' ? 'translate(-50%, -50%)' : 'translate(-50%, 0%)'};
  width: ${({ position }) => (position === 'bottom' ? '100%' : '500px')};
  height: 300px;
  background-color: white;
  border-radius: ${({ position }) =>
    position === 'center' ? '8px' : '8px 8px 0px 0px'};
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;
