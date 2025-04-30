import styled from "@emotion/styled";

import { ModalHeaderProps } from "./ModalHeader";

export const StyledModalHeader = styled.header<ModalHeaderProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ align = "start" }) => align};
  justify-content: ${({ justify = "start" }) => justify};
`;
