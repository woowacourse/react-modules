import { BASIC_BUTTON_STYLE } from '../../constants/modal';
import { AlertModalProps } from '../../types/modal';
import ButtonContainer from '../ButtonContainer';

import CenterModal from './CenterModal';

export default function AlertModal(props: AlertModalProps) {
  const {
    setOpenModal,
    title,
    contents,
    buttonContainerJustifyContent,
    buttonStyle = BASIC_BUTTON_STYLE,
    buttonContents,
  } = props;

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
