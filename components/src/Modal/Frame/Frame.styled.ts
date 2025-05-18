import styled from "styled-components";

type ModalFrameProps = {
  $position: "center" | "bottom";
  size: "small" | "medium" | "large";
};

export const ModalFrame = styled.div<ModalFrameProps>`
  position: relative;
  z-index: 500;
  background-color: white;
  width: ${({ $position, size }) => getWidth($position, size)};
  border-radius: ${({ $position }) =>
    $position === "bottom" ? "8px 8px 0 0 " : "8px"};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  min-width: 300px;
  flex-direction: column;
`;

const getWidth = (
  $position: ModalFrameProps["$position"],
  size: ModalFrameProps["size"]
): string => {
  if ($position === "bottom") return "100%";
  switch (size) {
    case "small":
      return "30%";
    case "medium":
      return "60%";
    case "large":
    default:
      return "80%";
  }
};
