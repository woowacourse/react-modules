import styled from "@emotion/styled";

interface ModalProps {
  isOpen: boolean;
}

function Modal({ isOpen }: ModalProps) {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <p>모달열림</p>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ModalContent = styled.div`
  width: 304px;
  height: 216px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 24px 32px;
  border-radius: 8px;
  color: #000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;
