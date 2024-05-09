import styled, { css } from "styled-components";

export type ModalPosition = "center" | "bottom";

export type ModalSize = "small" | "medium" | "large" | "full";

export const MODAL_WIDTH_MAP: Record<ModalSize, string> = {
  small: "320px",
  medium: "480px",
  large: "600px",
  full: "100vw",
};

export const ModalWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  display: ${({ open }) => (open ? "flex" : "none")};
  z-index: 10;
`;

export const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

export const ModalOuter = styled.div<{
  $position: ModalPosition;
  $size: ModalSize;
}>`
  position: fixed;
  left: 50%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 150px;
  width: ${({ $size: size }) => MODAL_WIDTH_MAP[size]};

  ${({ $position }) => {
    if ($position === "bottom") {
      return css`
        top: auto;
        transform: translate(-50%);
        bottom: 0;
        border-radius: 8px 8px 0px 0px;
      `;
    }
    if ($position === "center") {
      return css`
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
      `;
    }
  }};
`;

export const ModalInner = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CloseIcon = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  color: black;
`;

export const Content = styled.div`
  margin-bottom: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;
