import styled from "@emotion/styled";

const WIDTH_SIZE = {
  mobile: {
    small: "70%",
    medium: "80%",
    large: "90%",
  },
  tablet: {
    small: "400px",
    medium: "420px",
    large: "560px",
  },

  desktop: {
    small: "640px",
    medium: "768px",
    large: "900px",
  },
};

const getWidth = (
  device: keyof typeof WIDTH_SIZE,
  size: "small" | "medium" | "large"
): number | string => {
  return WIDTH_SIZE[device][size];
};

export const StyledModalContainer = styled.div<{
  modalPosition: "center" | "bottom";
  closeButtonPosition: "top" | "bottom";
  size: "small" | "medium" | "large";
}>`
  position: fixed;
  top: ${({ modalPosition }) => (modalPosition === "center" ? "50%" : "auto")};
  bottom: ${({ modalPosition }) => (modalPosition === "bottom" ? "0" : "auto")};
  left: 50%;
  transform: ${({ modalPosition }) =>
    modalPosition === "center" ? "translate(-50%, -50%)" : "translateX(-50%)"};
  background-color: white;
  border-radius: ${({ modalPosition }) => (modalPosition === "center" ? "8px" : "8px 8px 0 0")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 1000;
  width: ${({ modalPosition }) =>
    modalPosition === "bottom" ? "100%" : getWidth("mobile", "medium")};
  max-width: 90%;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  color: black;
  padding: 16px 24px;

  @media (min-width: 600px) {
    width: ${({ size }) => getWidth("tablet", size)}px;
  }

  @media (min-width: 900px) {
    width: ${({ size }) => getWidth("desktop", size)}px;
  }
`;

export const StyledModalDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  color: black;
`;

export const StyledModalBody = styled.div`
  flex: 1;
  padding: 10px;
  text-align: left;
  overflow-y: auto;
`;

export const StyledModalFooter = styled.div<{ align: "center" | "end" }>`
  padding: 16px;
  display: flex;
  gap: 12px;
  justify-content: ${({ align }) => (align === "center" ? "center" : "flex-end")};
`;

export const StyledModalButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const StyledModalInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  gap: 8px;
  border-radius: 2px;
  border: solid 1px #000;
  opacity: 0px;
`;
