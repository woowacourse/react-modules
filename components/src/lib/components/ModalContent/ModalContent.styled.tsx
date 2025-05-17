import styled from "@emotion/styled";

import { ModalContentProps } from "./ModalContent.types";

const modalPositionVariants = {
  bottom: {
    left: "0",
    bottom: "0",
    width: "100%",
    maxWidth: "100%",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  center: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
  },
};

const modalSizeVariants = {
  small: {
    width: "80%",
    maxWidth: "320px",
  },
  medium: {
    width: "90%",
    maxWidth: "480px",
  },
  large: {
    width: "90%",
    maxWidth: "640px",
  },
};

export const StyledModalContent = styled.div<ModalContentProps>`
  position: fixed;
  box-sizing: border-box;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
  padding: 24px 32px;
  min-height: 216px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ size = "large" }) => modalSizeVariants[size]};
  ${({ position = "center" }) => modalPositionVariants[position]};
`;
