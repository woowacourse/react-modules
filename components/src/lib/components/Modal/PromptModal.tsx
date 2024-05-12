import React, { useId } from 'react';
import styled from 'styled-components';

import CenterModal from './CenterModal';

import ButtonContainer from '@/lib/components/ButtonContainer';
import { PromptModalProps } from '@/lib/types/modal';

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
