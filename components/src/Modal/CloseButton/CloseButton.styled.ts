import styled from "styled-components";
import closeIcon from "../../assets/close-icon.png";

export const CloseIcon = styled.img.attrs({
  src: closeIcon,
  alt: "Close Icon",
})`
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
`;
