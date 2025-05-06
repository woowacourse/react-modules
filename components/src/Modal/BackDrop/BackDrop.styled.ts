import styled from "styled-components";

type PositionProps = {
  $position: "center" | "bottom";
};
export const ModalBackDrop = styled.div<PositionProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $position }) =>
    $position === "center" ? "center" : "flex-end"};
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`;
