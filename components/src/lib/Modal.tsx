import styled from '@emotion/styled';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    addEventListener('keydown', handleKeyDown);

    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div id="modal">
          <ModalOverlay data-testid="modal-overlay" onClick={onClose} />
          <ModalContent>
            <p>모달열림</p>
            <div data-testid="modal-close" onClick={() => onClose()}>
              모달닫기
            </div>
          </ModalContent>
        </div>
      )}
    </>
  );
};

export default Modal;

const ModalContent = styled.div`
  height: 216px;
  width: 304px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 24px 32px;
  border-radius: 8px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;
