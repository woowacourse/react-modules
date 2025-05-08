import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ModalColor } from "../constants/theme";

export const Backdrop = styled.div<{
  $position: "center" | "bottom";
}>`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: ${({ $position }) =>
    $position === "center" ? "center" : "end"};
  background-color: rgba(0, 0, 0, 0.3);
  inset: 0;
`;

export const ModalBox = styled.div<{
  $backgroundColor: ModalColor;
  $position: "center" | "bottom";
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${({ $position }) =>
    $position === "bottom" &&
    css`
      width: 100%;
      border-radius: 10px 10px 0 0;
    `}
`;

export const TopWrapper = styled.div<{ $titleText?: string }>`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: ${({ $titleText }) =>
    $titleText ? "space-between" : "end"};
`;

export const Title = styled.h1<{ $color: ModalColor; $size?: number }>`
  margin: 0;
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => ($size ? `${$size}px` : "24px")};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;
