import React from "react";
import styled from "styled-components";

type ButtonDirectionType = "row" | "column";

export interface ModalFooterProps {
  direction?: ButtonDirectionType;
  children: React.ReactNode;
}

const FLEX_DIRECTION = {
  row: "row",
  column: "column",
} as const;

const ModalFooter = ({ direction = "row", children }: ModalFooterProps) => {
  return <StyledFooter $direction={direction}>{children}</StyledFooter>;
};

export default ModalFooter;

const StyledFooter = styled.div<{ $direction: ButtonDirectionType }>`
  display: flex;
  flex-direction: ${({ $direction }) => FLEX_DIRECTION[$direction]};
  gap: 12px;

  width: 100%;
`;
