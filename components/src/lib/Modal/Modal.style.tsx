import styled, { css } from "styled-components";

export type ModalPosition = "center" | "bottom";

export const ModalWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

export const ModalContainer = styled.div<{ $position: ModalPosition }>`
  position: fixed;
  left: 50%;
  min-height: 150px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;

  ${({ $position }) => {
    if ($position === "bottom") {
      return css`
        top: 50%;
        transform: translate(-50%, 0%);
        min-width: 100%;
        border-radius: 8px 8px 0px 0px;
      `;
    } else if ($position === "center") {
      return css`
        bottom: 0;
        transform: translate(-50%, -50%);
        min-width: 300px;
        border-radius: 8px;
      `;
    }
  }}
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ModalHeader = styled.div`
  width: 100%;
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
`;

export const Content = styled.div`
  margin-bottom: 10px;
`;

export const ConfirmButton = styled.button``;
