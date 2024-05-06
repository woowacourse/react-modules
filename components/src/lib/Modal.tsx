import React from "react";
import "./Modal.css";
import Close from "./asset/Close.svg";

type ModalPosition = "center" | "bottom";
type ModalCloseBtnType = "text" | "img";

interface ModalProps {
  position: ModalPosition;
  title: string;
  children: React.ReactNode;
  closeButton: ModalCloseBtnType;
  closeModalClick: () => void;
  buttonText?: string;
  buttonClick?: () => void;
}

const Modal = ({
  position,
  children,
  closeButton,
  closeModalClick,
  title,
  buttonText,
  buttonClick,
}: ModalProps) => {
  return (
    <div className="soha-modal">
      <div className="soha-modal-backdrop" onClick={closeModalClick}></div>
      <div className={`soha-modal-inner ${position}`}>
        <div className="soha-modal-top">
          <h1 className="soha-modal-title">{title}</h1>
          {closeButton === "img" && (
            <button className="soha-modal-close-btn" onClick={closeModalClick}>
              <img className="soha-modal-close-img" src={Close} alt="모달 닫기 버튼" />
            </button>
          )}
        </div>
        <div className="soha-modal-content">{children}</div>
        <div className="soha-modal-bottom">
          {buttonText && (
            <button className="soha-modal-confirm-btn" onClick={buttonClick}>
              {buttonText}
            </button>
          )}
          {closeButton === "text" && (
            <button className="soha-modal-close-text-btn" onClick={closeModalClick}>
              닫기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
