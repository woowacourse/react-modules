import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const slideUpCenter = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -30%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const slideUpBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const positionCenter = css`
  width: 80%;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  animation: 0.5s ease ${slideUpCenter};
`;

const positionBottom = css`
  width: 100vw;
  bottom: 0;
  left: 0;
  right: 20;
  animation: 0.5s ease ${slideUpBottom};
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: black;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalContainer = styled.div<{ position: string }>`
  height: 216px;
  border-radius: 8px;
  background-color: #fff;
  position: fixed;
  z-index: 100;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 16px;

  ${({ position }) =>
    position === "center" ? positionCenter : positionBottom};
`;

export const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

export const ModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
`;

export const ModalContent = styled.main`
  flex: 1;
`;
