import styled from "styled-components";

import { closeImage } from "../asset/index";

export interface ModalCloseButtonProps {
  onCloseButtonClick: () => void;
}

const ModalCloseButton = ({ onCloseButtonClick }: ModalCloseButtonProps) => {
  return <StyledModalCloseButton src={closeImage} alt="닫기" onClick={onCloseButtonClick} />;
};

export default ModalCloseButton;

const StyledModalCloseButton = styled.img`
  width: 14px;
  height: 14px;

  margin: 0 10px;
`;
