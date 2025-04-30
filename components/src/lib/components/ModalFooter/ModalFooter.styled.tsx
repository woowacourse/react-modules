import styled from "@emotion/styled";

import { ModalFooterProps } from "./ModalFooter";

export const StyledModalFooter = styled.footer<ModalFooterProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ align = "start" }) => align};
  justify-content: ${({ justify = "start" }) => justify};
`;
