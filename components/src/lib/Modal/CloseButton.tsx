import styled from "styled-components";

import { closeImage } from "../asset/index";

export interface CloseButtonProps {
  onCloseButtonClick: () => void;
}

const CloseButton = ({ onCloseButtonClick }: CloseButtonProps) => {
  return (
    <StyledCloseButton
      src={closeImage}
      alt="닫기"
      onClick={onCloseButtonClick}
    />
  );
};

export default CloseButton;

const StyledCloseButton = styled.img`
  width: 14px;
  height: 14px;

  margin: 0 10px;
`;
