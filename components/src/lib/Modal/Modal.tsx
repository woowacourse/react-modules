import { DarkButton, LightButton } from "../common/Button";
import { ModalContainer, ModalDim, ModalHeader, ModalContent } from "./Modal.style";
import { ModalProps } from "./ModalType";
import { ButtonSet } from "./ButtonSet";

export const Modal = ({
  modalPosition,
  title,
  children,
  isOpen,
  onClose,
  onConfirm,
  size,
  modalType,
  closeButtonPosition,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalDim isOpen={isOpen} onClick={onClose}>
      <ModalContainer
        modalPosition={modalPosition}
        size={size}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <h1>{title}</h1>
          {!modalType && closeButtonPosition === "top" && (
            <LightButton onClick={onClose} style={{ width: "26px", height: "26px", padding: "0" }}>
              <img src="/public/image/closeButton.png" alt="Close" />
            </LightButton>
          )}
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        {!modalType && closeButtonPosition === "bottom" && (
          <DarkButton onClick={onClose} style={{ width: "100%", height: "40px" }}>
            닫기
          </DarkButton>
        )}
        <ButtonSet modalType={modalType} onClose={onClose} onConfirm={onConfirm} />
      </ModalContainer>
    </ModalDim>
  );
};
