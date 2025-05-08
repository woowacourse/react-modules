import { css } from "@emotion/react";
import ModalButton from "./ModalButton";

const cancelStyle = css`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  width: 80px;
  height: 36px;
  border-radius: 5px;
`;

interface CancelButtonProps extends React.ComponentProps<typeof ModalButton> {}

const CancelButton = ({ children = "취소", ...rest }: CancelButtonProps) => (
  <ModalButton css={cancelStyle} {...rest}>
    {children}
  </ModalButton>
);

export default CancelButton;
