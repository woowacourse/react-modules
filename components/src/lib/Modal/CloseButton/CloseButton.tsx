import * as Styled from "./style";

import { closeImage } from "../../asset/index";

export interface CloseButtonProps {
  onCloseButtonClick: () => void;
}

const CloseButton = ({ onCloseButtonClick }: CloseButtonProps) => {
  return (
    <Styled.CloseButton onClick={onCloseButtonClick}>
      <Styled.CloseImg src={closeImage} alt="닫기" />
    </Styled.CloseButton>
  );
};

export default CloseButton;
