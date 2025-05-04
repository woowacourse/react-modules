import styled from "@emotion/styled";

export const ModalBackground = styled.div<{
  isModalOpen: boolean;
  position: string;
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 376px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  z-index: 10;
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
}>`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 16px;
  color: #000000;
  z-index: 2;
  position: relative;
  width: 304px;
  height: 216px;
  width:  ${({ position }) => position === "bottom" && "100%"}
  border-radius:  ${({ position }) => position === "bottom" && "10px 10px 0 0;"}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  height: 26px;
  margin: 0 auto;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
