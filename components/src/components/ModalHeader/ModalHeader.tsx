/** @jsxImportSource @emotion/react */

import CloseButton from "../CloseButton/CloseButton";
import Title from "../Title/Title";
import { modalHeaderStyle } from "./ModalHeader.style";

interface ModalHeader extends React.PropsWithChildren {
  hasCloseButton: boolean;
}

const ModalHeader: React.FC<ModalHeader> = ({ hasCloseButton = true, children }) => {
  return (
    <div css={modalHeaderStyle}>
      <Title>{children}</Title>
      {hasCloseButton && <CloseButton />}
    </div>
  );
};

export default ModalHeader;
