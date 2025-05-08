import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

type SizeProps = "small" | "medium" | "large";
type ButtonTypeProps = "cancel" | "confirm";

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
    transform: translate(-50%,50%);
  }
  to {
    opacity: 1;
    transform: translate(-50%,0);
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
  left: 50%;
  transform: translateX(-50%);
  right: 20px;
  animation: 0.5s ease ${slideUpBottom};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
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

export const ModalContainer = styled.div<{
  $position: string;
  $size: SizeProps;
}>`
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  position: fixed;
  z-index: 100;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 16px;

  ${({ $position }) => $position === "center" && positionCenter};
  ${({ $position }) => $position === "bottom" && positionBottom};

  ${({ $size }) => $size === "small" && "max-width: 320px"}
  ${({ $size }) => $size === "medium" && "max-width: 480px"}
  ${({ $size }) => $size === "large" && "max-width: 600px"}
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

const cancelButton = css`
  border: 1px solid #cccccc;
  background-color: #fff;
`;

const confirmButton = css`
  background-color: #333333;
  color: #ffffff;
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

export const ModalButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: right;
`;

export const ModalButton = styled.button<{
  $size: SizeProps;
  $type: ButtonTypeProps;
}>`
  width: 100%;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;

  ${({ $type }) => $type === "cancel" && cancelButton}
  ${({ $type }) => $type === "confirm" && confirmButton}

  ${({ $size }) => $size === "small" && "max-width: 80px"}
  ${({ $size }) => $size === "large" && "max-width: 100%"}
`;

export const ModalContent = styled.main`
  flex: 1;
`;
