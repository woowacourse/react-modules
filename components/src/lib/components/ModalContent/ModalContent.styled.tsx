import styled from "@emotion/styled";

import { ModalContentProps } from "./ModalContent.types";

const modalPositionVariants = {
  bottom: {
    left: "0",
    bottom: "0",
    width: "100%",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  center: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    borderRadius: "8px",
  },
};

export const StyledModalContent = styled.div<ModalContentProps>`
  position: fixed;
  padding: 24px 32px;
  min-height: 216px;
  background-color: #fff;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ position = "center" }) => modalPositionVariants[position]};
`;
