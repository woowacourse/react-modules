import styled from "@emotion/styled";
import { JSX } from "react";

import { ModalTitleProps } from "./ModalTitle";

const createStyledModalTitle = (tag: keyof JSX.IntrinsicElements) =>
  styled(tag)<ModalTitleProps>`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
  `;

export default createStyledModalTitle;
