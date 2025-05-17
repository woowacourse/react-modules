import { CancelButtonStyle } from "../styles";
import { ModalButtonProps } from "../types/Modal.types";
import ModalButton from "./Button";

const CancelButton = ({ children = "취소", ...rest }: ModalButtonProps) => (
  <ModalButton css={CancelButtonStyle} aria-label="취소" {...rest}>
    {children}
  </ModalButton>
);

export default CancelButton;
