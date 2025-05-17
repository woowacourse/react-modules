import { StyledModalOverlay } from "./ModalOverlay.styled";

import { useModal } from "../ModalRoot";

const ModalOverlay = () => {
  const { close } = useModal();

  return <StyledModalOverlay onClick={close} />;
};

export default ModalOverlay;
