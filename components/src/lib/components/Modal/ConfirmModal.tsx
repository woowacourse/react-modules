import { CSSProperties, MouseEvent } from 'react';
import styled from 'styled-components';

import {
  ButtonContainerJustifyContent,
  ConfirmButtonGroupProps,
  ConfirmModalProps,
  ExtraClickAction,
} from '../../types/modal';

import CenterModal from './CenterModal';

interface StyleProps {
  $buttonContainerJustifyContent: ButtonContainerJustifyContent;
}

const BASIC_BUTTON_STYLE: CSSProperties = {
  padding: '0.625rem 0.875rem',
  backgroundColor: '#ffff',
  color: 'black',
  fontSize: '1rem',
};
const ButtonContainer = styled.div<StyleProps>`
  display: flex;
  justify-content: ${(props) => props.$buttonContainerJustifyContent};
`;

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
