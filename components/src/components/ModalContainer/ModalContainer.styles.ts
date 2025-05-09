import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ModalColor } from "../../constants/theme";
import { ModalPosition, ModalSize } from "../../types/modal";

const SIZE_MAP = {
  small: "320px",
  medium: "480px",
  large: "600px",
};

export const ModalBox = styled.div<{
  $position: ModalPosition;
  $size: ModalSize;
  $backgroundColor: ModalColor;
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 20px;
  padding: 15px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: ${({ $size }) => SIZE_MAP[$size]};

  ${({ $position }) =>
    $position === "bottom" &&
    css`
      width: 100%;
      margin: 0;
      border-radius: 10px 10px 0 0;
    `};
`;
