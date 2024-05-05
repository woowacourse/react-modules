/** @jsxImportSource @emotion/react */

import useThemeContext from "../../hooks/useThemeContext";
import COLOR_PALETTE from "../../colorPalette";
import { closeButton } from "./CloseButton.styles";
import { useModalAction } from "../Modal/Modal";

interface CloseButtonProps {
  handleClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleClick }) => {
  const theme = useThemeContext();
  const action = useModalAction();

  const onClick = () => {
    action.handleClose();
    if (handleClick) handleClick();
  };

  return (
    <button css={closeButton(theme)} onClick={onClick}>
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.8167 1.41L13.4067 0L7.81665 5.59L2.22665 0L0.81665 1.41L6.40665 7L0.81665 12.59L2.22665 14L7.81665 8.41L13.4067 14L14.8167 12.59L9.22665 7L14.8167 1.41Z"
          fill={COLOR_PALETTE[theme].color}
        />
      </svg>
    </button>
  );
};

export default CloseButton;
