import CenterModal from './CenterModal';

import ButtonContainer from '@/lib/components/ButtonContainer';
import { ConfirmModalProps } from '@/lib/types/modal';

export default function ConfirmModal(props: ConfirmModalProps) {
  const { setOpenModal, title, contents, buttonContainerJustifyContent = 'center', children } = props;

  const closeModal = () => setOpenModal(false);

  return (
    <CenterModal {...props}>
      {title}
      {contents}
      <ButtonContainer $buttonContainerJustifyContent={buttonContainerJustifyContent} onClick={closeModal}>
        {children}
      </ButtonContainer>
    </CenterModal>
  );
}
