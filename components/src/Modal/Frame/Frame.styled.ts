import styled from "styled-components";

type ModalFrameProps = {
  $position: "center" | "bottom";
  size: "small" | "medium" | "large";
};

export const ModalFrame = styled.div<ModalFrameProps>`
  position: relative;
  width: ${({ $position }) => ($position === "bottom" ? "100%" : "")};

  z-index: 500;
  background-color: white;
  width: ${({ size }) => getWidth(size)};
  border-radius: ${({ $position }) =>
    $position === "bottom" ? "8px 8px 0 0 " : "8px"};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  min-width: 300px;
  flex-direction: column;
`;

const getWidth = (size: ModalFrameProps["size"]) => {
  switch (size) {
    case "small":
      return "30%";
    case "medium":
      return "60%";
    case "large":
      return "80%";
    default:
      return "80%";
  }
};
