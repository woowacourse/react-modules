import CLOSE_BUTTON from '../../../asset/close-button.svg';
import { ModalCloseButton } from '../Modal.styled';

export interface CustomModalCloseButtonProps {
  closeModal: () => void;
}

const CustomModalCloseButton = ({
  closeModal,
}: CustomModalCloseButtonProps) => {
  return <ModalCloseButton src={CLOSE_BUTTON} onClick={closeModal} />;
};

export default CustomModalCloseButton;
