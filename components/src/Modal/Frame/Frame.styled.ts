import styled from "styled-components";

type PositionProps = {
  $position: "center" | "bottom";
};

export const ModalFrame = styled.div<PositionProps>`
  position: relative;
  width: ${({ $position }) => ($position === "bottom" ? "100%" : "")};

  z-index: 500;
  background-color: white;
  border-radius: ${({ $position }) =>
    $position === "bottom" ? "8px 8px 0 0 " : "8px"};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
