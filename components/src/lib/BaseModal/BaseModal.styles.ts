import styled from "@emotion/styled";
import { css } from "@emotion/react";

const sizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return css`
        width: 320px;
      `;

    case "medium":
      return css`
        width: 480px;
      `;

    case "large":
      return css`
        width: 600px;
      `;

    default:
      return css``;
  }
};

export const ModalBackground = styled.div<{
  isModalOpen: boolean;
  position: "center" | "bottom";
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  visibility: hidden;
  visibility: ${({ isModalOpen }) => isModalOpen === true && "visible"};
  opacity: ${({ isModalOpen }) => isModalOpen === true && "1"}
  transition: opacity 0.3s ease, visibility 0.3s ease;
  margin: 0 auto;
  align-items: ${({ position }) => {
    switch (position) {
      case "center":
        return "center";
      case "bottom":
        return "flex-end";
    }
  }};
      `;

export const ModalContainer = styled.div<{
  position: string;
  size: string;
}>`
  min-width: 300px;
  background-color: white;
  color: #000000;
  position: relative;
  ${({ size }) => sizeStyles(size)};
  border-radius: 8px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${({ position }) => position === "bottom" && "100%"};
  border-radius: ${({ position }) => position === "bottom" && "10px 10px 0 0;"};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h4 {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CloseButton = styled.button`
  font-size: 18px;
  cursor: pointer;
`;
