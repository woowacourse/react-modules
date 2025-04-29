import styled from "@emotion/styled";

interface ModalProps {
  isOpen: boolean;
}

function Modal({ isOpen }: ModalProps) {
  return (
    <ModalContainer isOpen={isOpen}>
      <p>모달열림</p>
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
