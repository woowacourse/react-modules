/** @jsxImportSource @emotion/react */

import { closeButton } from "./CloseButton.styles";
import Xmark from "/Xmark.png";

interface CloseButtonProps {
  handleClose: () => void;
  onClose?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleClose, onClose }) => {
  return (
    <button
      css={closeButton}
      onClick={() => {
        handleClose();
        if (onClose) onClose();
      }}
    >
      <img src={Xmark} />
    </button>
  );
};

export default CloseButton;
