/** @jsxImportSource @emotion/react */
import React from "react";
import { confirmButtonStyle } from "./ConfirmButton.styles";

interface ConfirmButtonProps {
  handleClose: () => void;
  onConfirm?: () => void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ handleClose, onConfirm }) => {
  return (
    <button
      css={confirmButtonStyle}
      onClick={() => {
        handleClose();
        if (onConfirm) onConfirm();
      }}
    >
      확인 버튼입니다.
    </button>
  );
};

export default ConfirmButton;
