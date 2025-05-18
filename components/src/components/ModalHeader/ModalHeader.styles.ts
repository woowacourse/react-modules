import styled from "@emotion/styled";
import { ModalColor } from "../../constants/theme";

export const HeaderWrapper = styled.div<{ $titleText?: string }>`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: ${({ $titleText }) =>
    $titleText ? "space-between" : "end"};
`;

export const Title = styled.h1<{ $color: ModalColor; $size?: number }>`
  margin: 0;
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => ($size ? `${$size}px` : "24px")};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;
