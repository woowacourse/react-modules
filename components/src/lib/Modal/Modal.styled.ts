import styled from "@emotion/styled";

export type ModalType = "alert" | "confirm" | "prompt";
export type ModalSizeType = "small" | "medium" | "large";
export type ModalPositionType = "bottom" | "center";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div<{
  modalType: ModalType;
  modalSize: ModalSizeType;
  position: ModalPositionType;
}>`
  position: fixed;
  background: #fff;
  padding: 1.5rem 2rem;
  min-height: 157px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  ${({ position, modalSize }) =>
    position === "bottom"
      ? `
          width: 100%;
          bottom: 0;
          left: 0;
          border-radius: 8px 8px 0 0;
        `
      : `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 8px;
          ${(() => {
            switch (modalSize) {
              case "small":
                return `width: 320px;`;
              case "medium":
                return `width: 480px;`;
              case "large":
                return `width: 600px;`;
              default:
                return `width: 320px;`;
            }
          })()}
        `}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;
  margin: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: 2px solid #4d90fe;
    outline-offset: 2px;
  }
`;

export const ModalContent = styled.div`
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 1rem 0;
  font-size: 1rem;
  &:focus {
    outline: 2px solid #4d90fe;
    border-color: #4d90fe;
    box-shadow: 0 0 0 3px rgba(77, 144, 254, 0.2);
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: auto;
`;

export const Button = styled.button<{ primary?: boolean }>`
  padding: 0;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  width: 80px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ primary }) =>
    primary
      ? `
          background-color: #333333;
          color: white;
          border: none;
        `
      : `
          background-color: white;
          color: #333333;
          border: 1px solid #333333;
        `}
  &:focus {
    outline: 2px solid #4d90fe;
    outline-offset: 2px;
  }
`;
