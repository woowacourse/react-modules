import * as Styled from "./style";

import { closeImage } from "../../asset/index";

export interface CloseButtonProps {
  onCloseButtonClick: () => void;
}

const CloseButton = ({ onCloseButtonClick }: CloseButtonProps) => {
  return (
    <Styled.CloseButton
      src={closeImage}
      alt="닫기"
      onClick={onCloseButtonClick}
    />
  );
};

export default CloseButton;
