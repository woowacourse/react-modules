import ModalButton from "./ModalButton";
import { ConfirmButtonStyle } from "../styles";

interface ConfirmButtonProps extends React.ComponentProps<typeof ModalButton> {}

const ConfirmButton = ({ children = "확인", ...rest }: ConfirmButtonProps) => (
  <ModalButton css={ConfirmButtonStyle} {...rest}>
    {children}
  </ModalButton>
);

export default ConfirmButton;
