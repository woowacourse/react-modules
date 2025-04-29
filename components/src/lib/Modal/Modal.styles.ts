import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Backdrop = styled.div<{
  $isOpen: boolean;
  $position: "center" | "bottom";
}>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
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
  $backgroundColor?: string;
  $position: "center" | "bottom";
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#fff"};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${({ $position }) =>
    $position === "bottom" &&
    css`
      width: 100%;
      border-radius: 10px 10px 0 0;
    `}
`;

export const Title = styled.h1<{ $titleColor?: string }>`
  margin: 0;
  color: ${({ $titleColor }) => $titleColor ?? "#000"};
`;
