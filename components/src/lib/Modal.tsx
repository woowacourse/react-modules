import React from "react";
import "./Modal.css";
import Close from "./asset/Close.svg";

type ModalPosition = "center" | "bottom";
type ModalCloseBtn = "text" | "img";

interface ModalProps {
  position: ModalPosition;
  title: string;
  children: React.ReactNode;
  closeButton: ModalCloseBtn;
  closeModal: () => void;
  buttonText?: string;
  buttonClick?: () => void;
}

const Modal = ({
  position,
  children,
  closeButton,
  closeModal,
  title,
  buttonText,
  buttonClick,
}: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={closeModal}></div>
      <div className={`modal-inner ${position}`}>
        <div className="modal-top">
          <h1 className="modal-title">{title}</h1>
          {closeButton === "img" && (
            <button className="modal-close-btn" onClick={closeModal}>
              <img className="modal-close-img" src={Close} alt="모달 닫기 버튼" />
            </button>
          )}
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-bottom">
          {buttonText && (
            <button className="modal-confirm-btn" onClick={buttonClick}>
              {buttonText}
            </button>
          )}
          {closeButton === "text" && (
            <button className="modal-close-text-btn" onClick={closeModal}>
              닫기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
