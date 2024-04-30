/** @jsxImportSource @emotion/react */

import { modalHeaderStyle } from "./ModalHeader.style";

const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  return <div css={modalHeaderStyle}>{children}</div>;
};

export default ModalHeader;
