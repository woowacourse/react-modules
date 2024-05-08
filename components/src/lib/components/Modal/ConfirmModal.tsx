import { MouseEvent } from 'react';

import { BASIC_BUTTON_STYLE } from '../../constants/modal';
import { ConfirmButtonGroupProps, ConfirmModalProps, ExtraClickAction } from '../../types/modal';
import ButtonContainer from '../ButtonContainer';

import CenterModal from './CenterModal';

function ConfirmButtonGroup({
  confirmButton,
  cancelButton,
  isConfirmButtonFirst,
  closeModal,
}: ConfirmButtonGroupProps) {
  const buttonOrder = isConfirmButtonFirst ? [confirmButton, cancelButton] : [cancelButton, confirmButton];

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>, extraClickAction?: ExtraClickAction) => {
    if (extraClickAction) extraClickAction();
    closeModal();
  };
  return (
    <>
      {buttonOrder.map(({ contents, style, extraClickAction }) => (
        <button style={style || BASIC_BUTTON_STYLE} onClick={(e) => handleButtonClick(e, extraClickAction)}>
          {contents}
        </button>
      ))}
    </>
  );
}

export default function ConfirmModal(props: ConfirmModalProps) {
  const {
    setOpenModal,
    title,
    contents,
    buttonContainerJustifyContent,
    confirmButton,
    cancelButton,
    isConfirmButtonFirst = true,
  } = props;

  const closeModal = () => setOpenModal(false);

  return (
    <CenterModal {...props}>
      {title}
      {contents}
      <ButtonContainer $buttonContainerJustifyContent={buttonContainerJustifyContent}>
        <ConfirmButtonGroup
          confirmButton={confirmButton}
          cancelButton={cancelButton}
          isConfirmButtonFirst={isConfirmButtonFirst}
          closeModal={closeModal}
        />
      </ButtonContainer>
    </CenterModal>
  );
}
