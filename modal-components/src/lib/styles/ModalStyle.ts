import styled from "@emotion/styled";

export const ModalContainer = styled.div<{
  modalPosition: "center" | "bottom";
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${({ modalPosition }) =>
    modalPosition === "center" ? "center" : "flex-end"};
  position: fixed;
`;
export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div<{
  modalSize: "small" | "medium" | "large";
}>`
  width: ${({ modalSize }) => {
    switch (modalSize) {
      case "small":
        return "320px";
      case "medium":
        return "480px";
      case "large":
        return "600px";
      default:
        return "480px";
    }
  }};
  position: absolute;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBoxContainer = styled.div<{
  modalPosition: "center" | "bottom";
}>`
  width: ${({ modalPosition }) =>
    modalPosition === "center" ? "70%" : "100%"};
  max-width: ${({ modalPosition }) =>
    modalPosition === "center" ? "800px" : "none"};
  height: fit-content;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: ${({ modalPosition }) =>
    modalPosition === "center" ? "0.5rem" : "0.5rem 0.5rem 0rem 0rem"};
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBottomCloseBtn = styled.div`
  color: #8b95a1;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px;
  cursor: pointer;
`;
