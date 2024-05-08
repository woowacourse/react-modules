import styled from 'styled-components';

import { AlertModalProps, ButtonContainerJustifyContent } from '../../types/modal';

import CenterModal from './CenterModal';

interface StyleProps {
  $buttonContainerJustifyContent: ButtonContainerJustifyContent;
}

const ButtonContainer = styled.div<StyleProps>`
  display: flex;
  justify-content: ${(props) => props.$buttonContainerJustifyContent};
`;

export default function AlertModal(props: AlertModalProps) {
  const { setOpenModal, title, contents, buttonContainerJustifyContent, buttonStyle, buttonContents } = props;

  const closeModal = () => setOpenModal(false);

  return (
    <CenterModal {...props}>
      {title}
      {contents}
      <ButtonContainer $buttonContainerJustifyContent={buttonContainerJustifyContent}>
        <button onClick={closeModal} style={buttonStyle}>
          {buttonContents}
        </button>
      </ButtonContainer>
    </CenterModal>
  );
}
