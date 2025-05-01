import styled from "@emotion/styled";
import { ModalPositionType } from ".";

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 500px;
  height: 100vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
`;

export const Modal = styled.div<{ position: ModalPositionType }>`
  position: fixed;
  background: #fff;
  padding: 1.5rem 2rem;
  min-height: 220px;
  ${({ position }) =>
    position === "center"
      ? `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
        width: 350px;
      `
      : `
        width: 100%;
        bottom: 0;      
        border-radius: 8px 8px 0 0;
      `}
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
`;
