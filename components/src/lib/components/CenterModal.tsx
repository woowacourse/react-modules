import styled from 'styled-components';

import { ModalCommonProps } from '../types/modal';

import Backdrop from './Backdrop';
import ModalContainer from './ModalContainer';

const CenterContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function CenterModal(props: ModalCommonProps) {
  const { setOpenModal, children, ...rest } = props;

  const closeModal = () => setOpenModal(false);
  return (
    <ModalContainer {...rest} closeModal={closeModal}>
      <Backdrop handleCloseModal={closeModal} />
      <CenterContentsWrapper>
        <ModalContainer.contents>{children}</ModalContainer.contents>
      </CenterContentsWrapper>
    </ModalContainer>
  );
}

export default CenterModal;
