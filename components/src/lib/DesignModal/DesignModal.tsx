import React from "react";
import "./DesignModal.css";

type ModalType = "alert" | "prompt" | "confirm";
type ModalSize = "small" | "medium" | "large";

interface DesignModalProps {
  type: ModalType;
  size: ModalSize;
  title: string;
  children: React.ReactNode;
  confirmClick: () => void;
  cancelClick?: () => void;
}

const DesignModal = ({
  type,
  size,
  title,
  children,
  confirmClick,
  cancelClick,
}: DesignModalProps) => {
  return (
    <div className="soha-design-modal">
      <div
        className="soha-design-modal-backdrop"
        onClick={type === "alert" ? confirmClick : cancelClick}
      ></div>
      <div className={`soha-design-modal-inner ${size}`}>
        <h1 className="soha-design-modal-title">{title}</h1>
        <div className="soha-design-modal-content">
          {children}
          {type === "prompt" && <input className="soha-design-modal-input" type="text" />}
        </div>
        <div className="soha-design-modal-bottom">
          {type === "alert" || (
            <button className="soha-design-modal-btn cancel" onClick={cancelClick}>
              취소
            </button>
          )}
          <button className="soha-design-modal-btn confirm" onClick={confirmClick}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignModal;
