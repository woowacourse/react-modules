import * as Styled from './Modal.styled';

import CLOSE_BUTTON from '../../asset/close-button.svg';

export interface ModalHeaderProps {
  closeModal: () => void;

  title?: string;
  description?: string;
  showCloseButton?: boolean;
}

const ModalHeader = ({
  title,
  showCloseButton,
  closeModal,
}: ModalHeaderProps) => {
  return (
    <Styled.ModalHeader>
      <Styled.ModalTitle>{title}</Styled.ModalTitle>
      {showCloseButton && (
        <Styled.ModalCloseButton src={CLOSE_BUTTON} onClick={closeModal} />
      )}
    </Styled.ModalHeader>
  );
};

export default ModalHeader;
