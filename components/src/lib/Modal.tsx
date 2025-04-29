import styled from "@emotion/styled";
import Close from "/Close.svg";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ isOpen, setIsOpen }: ModalProps) {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <CloseButton
          src={Close}
          alt="닫기 버튼"
          onClick={() => setIsOpen(false)}
        />
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

const CloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
