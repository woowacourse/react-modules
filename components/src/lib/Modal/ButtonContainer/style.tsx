import styled from "styled-components";
import {
  ButtonContainerPositionType,
  ButtonDirectionType,
} from "./ButtonContainer";

const buttonContainerPosition = (position: ButtonContainerPositionType) => {
  switch (position) {
    case "left":
      return "flex-start";

    case "center":
      return "center";

    case "right":
      return "flex-end";

    default:
      return "center";
  }
};

export const ButtonContainer = styled.div<{
  $direction: ButtonDirectionType;
  $position: ButtonContainerPositionType;
}>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === "column" ? "column" : "row"};
  justify-content: ${({ $position }) => buttonContainerPosition($position)};
  gap: 12px;

  width: 100%;
`;
