import styled from "@emotion/styled";

import { ModalFooterProps } from "./ModalFooter.types";

export const StyledModalFooter = styled.footer<ModalFooterProps>`
  display: flex;
  gap: 12px;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ align = "start" }) => align};
  justify-content: ${({ justify = "start" }) => justify};
`;
