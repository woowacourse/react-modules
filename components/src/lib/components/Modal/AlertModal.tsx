import CenterModal from './CenterModal';

import ButtonContainer from '@/lib/components/ButtonContainer';
import { AlertModalProps } from '@/lib/types/modal';

export default function AlertModal(props: AlertModalProps) {
  const { setOpenModal, title, contents, buttonContainerJustifyContent = 'right', button } = props;

  const closeModal = () => setOpenModal(false);

  return (
    <CenterModal {...props}>
      {title}
      {contents}
      <ButtonContainer $buttonContainerJustifyContent={buttonContainerJustifyContent} onClick={closeModal}>
        {button}
      </ButtonContainer>
    </CenterModal>
  );
}
