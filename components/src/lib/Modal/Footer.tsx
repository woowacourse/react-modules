import styled from "@emotion/styled";
import Button from "../common/Button";
import { Position, useModalContext } from "../useModalContext";
import { ReactNode } from "react";

const Footer = ({ children }: { children?: ReactNode }) => {
  const { position } = useModalContext();

  return <ButtonContainer position={position}>{children}</ButtonContainer>;
};

export default Footer;

const ButtonContainer = styled.div<{ position: Position }>`
  display: flex;
  justify-content: end;
  gap: 12px;
  width: ${({ position }) =>
    position === "bottom" &&
    `
      flex-grow:1;
      width:100%;

      ${Button} button{
        width:100%;
      }
    `};
`;
