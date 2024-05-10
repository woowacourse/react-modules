import styled from "styled-components";
import { ContainerPositionType, ModalContainerSizeType } from "./Container";

const POSITION_STYLES = {
  top: `
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    
    border-radius: 0px 0px 10px 10px;
    `,
  center: `
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    border-radius: 8px;
    `,
  bottom: `
    top: 100%;
    left: 50%;
    transform: translate(-50%,-100%);

    border-radius: 10px 10px 0px 0px;
    `,
};

export const Container = styled.div<{
  $size: ModalContainerSizeType;
  $position: ContainerPositionType;
}>`
  position: fixed;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: ${({ $size }) =>
    $size === "large" ? "60%" : $size === "medium" ? "40%" : "30%"};

  background-color: ${(props) => props.theme.color.white};

  ${({ $position }) => POSITION_STYLES[$position]};

  @media (min-width: 376px) {
    min-width: 376px;
  }

  @media (max-width: 376px) {
    width: ${({ $position }) => ($position === "center" ? "80%" : "100%")};
  }
`;
