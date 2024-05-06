import React, { CSSProperties } from "react";
import "./ModalCloseButton.css";

interface ModalCloseButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  customStyle?: CSSProperties;
}

const ModalCloseButton = ({ onClick, customStyle = {} }: ModalCloseButtonProps) => {
  return (
    <button
      className="modal-close-btn"
      onClick={onClick}
      style={customStyle}
    />
  );
};

export default ModalCloseButton;
