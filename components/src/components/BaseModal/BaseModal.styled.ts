import styled from "@emotion/styled";
import { ModalLayoutProps } from "@/types/modal";
import {
  getModalPositionStyle,
  getModalSizeStyle,
  getModalAnimation,
} from "./utils";
import { keyframes, css } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  animation: ${fadeIn} 0.3s ease;
`;

export const Modal = styled.div<Required<ModalLayoutProps>>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 1.5rem 2rem;
  min-height: 180px;
  ${({ size }) => getModalSizeStyle(size)}
  ${({ position }) => getModalPositionStyle(position)}
  animation: ${({ position }) => {
    const { keyframes: keyframesStyle, duration } = getModalAnimation(position);

    return css`
      ${keyframes`${keyframesStyle}`} ${duration} ease
    `;
  }};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h2`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 1.125rem;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  &:focus {
    outline: 2px solid #005fcc;
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(0, 95, 204, 0.15);
  }
`;
