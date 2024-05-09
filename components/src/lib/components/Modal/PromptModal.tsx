import { useId } from 'react';
import styled from 'styled-components';

import { PromptModalProps } from '../../types/modal';
import ButtonContainer from '../ButtonContainer';
import ConfirmAndCancelButtonGroup from '../ConfirmAndCancelButtonGroup';

import CenterModal from './CenterModal';

const InputLabel = styled.label`
  position: absolute;
  top: -9999px;
  left: 0;
`;

export default function PromptModal(props: PromptModalProps) {
  const {
    setOpenModal,
    title,
    label,
    input,
    buttonContainerJustifyContent = 'right',
    confirmButton,
    cancelButton,
    isConfirmButtonFirst,
  } = props;

  const inputId = `input_${useId()}`;
  const closeModal = () => setOpenModal(false);

  return (
    <CenterModal {...props}>
      {title}
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <input id={inputId} {...input.attribute} {...input.props} />
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
