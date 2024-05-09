import styled from "@emotion/styled";

export const StyledModalContainer = styled.div<{
  modalPosition: "center" | "bottom";
  closeButtonPosition: "top" | "bottom";
}>`
  position: fixed;
  top: ${({ modalPosition }) => (modalPosition === "center" ? "50%" : "auto")};
  bottom: ${({ modalPosition }) => (modalPosition === "bottom" ? "0" : "auto")};
  left: 50%;
  transform: ${({ modalPosition }) =>
    modalPosition === "center" ? "translate(-50%, -50%)" : "translateX(-50%)"};
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 1000;
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  height: 400px;
  max-height: 90%;
  color: black;
  padding: 16px 24px;
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
  padding: 0 16px;
  box-sizing: border-box;
  color: black;
`;

export const StyledModalBody = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
`;

export const StyledModalFooter = styled.div`
  padding: 16px;
`;
