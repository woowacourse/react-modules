import React, { CSSProperties } from "react";
import "./ModalCloseButton.css";

interface ModalCloseButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  customStyle?: CSSProperties;
  className?: string;
}

const ModalCloseButton = ({ onClick, customStyle = {}, className = "" }: ModalCloseButtonProps) => {
  return (
    <button
      className={`modal-close-btn ${className}`}
      onClick={onClick}
      style={customStyle}
    />
  );
};

export default ModalCloseButton;
