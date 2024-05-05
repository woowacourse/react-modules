/** @jsxImportSource @emotion/react */

import { modalHeaderStyle } from "./ModalHeader.style";

const ModalHeader = ({ children }: React.PropsWithChildren) => {
  return <div css={modalHeaderStyle}>{children}</div>;
};

export default ModalHeader;
