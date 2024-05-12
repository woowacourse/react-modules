import CenterModal from './CenterModal';

import ButtonContainer from '@/lib/components/ButtonContainer';
import { BASIC_BUTTON_STYLE } from '@/lib/constants/modal';
import { AlertModalProps } from '@/lib/types/modal';

export default function AlertModal(props: AlertModalProps) {
  const {
    setOpenModal,
    title,
    contents,
    buttonContainerJustifyContent = 'right',
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
