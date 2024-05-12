import styled from 'styled-components';

import ModalContainer from '@/lib/components/ModalContainer';
import { ModalCommonProps } from '@/lib/types/modal';

const CenterContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default function CenterModal(props: ModalCommonProps) {
  const { setOpenModal, children, ...rest } = props;

  const closeModal = () => setOpenModal(false);
  return (
    <ModalContainer {...rest} closeModal={closeModal}>
      <ModalContainer.Backdrop handleCloseModal={closeModal} />
      <CenterContentsWrapper>
        <ModalContainer.Contents>{children}</ModalContainer.Contents>
      </CenterContentsWrapper>
    </ModalContainer>
  );
}
