import { ReactNode } from "react";
import styled from "@emotion/styled";

interface ModalProps {
  position: "center" | "bottom";
  isOpen: boolean;
  showCloseButton?: boolean;
  showConfirmButton?: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({
  position,
  isOpen,
  children,
  onClose,
  showCloseButton = false,
  showConfirmButton = false,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <ModalBackDrop position={position}>
          <ModalContainer position={position}>
            {children}
            <ButtonWrap>
              {showConfirmButton && (
                <ConfirmButton onClick={onClose}>확인</ConfirmButton>
              )}
              {showCloseButton && (
                <CloseButton onClick={onClose}>닫기</CloseButton>
              )}
            </ButtonWrap>
          </ModalContainer>
        </ModalBackDrop>
      )}
    </>
  );
};

export default Modal;

const ModalBackDrop = styled.div<{ position: "center" | "bottom" }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: ${(props: { position: "center" | "bottom" }) =>
    props.position === "center" ? "center" : "flex-end"};
  padding: 0;
`;
const ModalContainer = styled.div<{ position: "center" | "bottom" }>`
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.position === "bottom" ? "100%" : "60%")};
  height: auto;
  padding: 24px 32px;
  border-radius: 8px;
  background-color: #fff;
`;

const CloseButton = styled.button`
  width: 100%;
  padding: 8px 0px;
  border: 1px solid #8b95a1;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  border-radius: 5px;
  background: #fff;
  color: #8b95a1;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 8px 0px;
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  border-radius: 5px;
  color: #fff;
  background: #333;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
