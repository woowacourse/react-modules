import { ConfirmModalProps } from '../../types/modal';
import ButtonContainer from '../ButtonContainer';
import ConfirmAndCancelButtonGroup from '../ConfirmAndCancelButtonGroup';

import CenterModal from './CenterModal';

export default function ConfirmModal(props: ConfirmModalProps) {
  const {
    setOpenModal,
    title,
    contents,
    buttonContainerJustifyContent = 'center',
    confirmButton,
    cancelButton,
    isConfirmButtonFirst,
  } = props;

  const closeModal = () => setOpenModal(false);

  return (
    <CenterModal {...props}>
      {title}
      {contents}
      <ButtonContainer $buttonContainerJustifyContent={buttonContainerJustifyContent}>
        <ConfirmAndCancelButtonGroup
          confirmButton={confirmButton}
          cancelButton={cancelButton}
          isConfirmButtonFirst={isConfirmButtonFirst}
          closeModal={closeModal}
        />
      </ButtonContainer>
    </CenterModal>
  );
}
