import { CancelButtonStyle } from "../styles";
import ModalButton from "./ModalButton";

interface CancelButtonProps extends React.ComponentProps<typeof ModalButton> {}

const CancelButton = ({ children = "취소", ...rest }: CancelButtonProps) => (
  <ModalButton css={CancelButtonStyle} {...rest}>
    {children}
  </ModalButton>
);

export default CancelButton;
