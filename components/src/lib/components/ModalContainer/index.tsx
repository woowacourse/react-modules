import styled from 'styled-components';

import '../../styles/reset.css';
import { ModalContainerContext } from '../../contexts';
import { ModalContainerProps } from '../../types/modal';
import ModalPortal from '../ModalPortal';

import Backdrop from './Backdrop';
import Contents from './Contents';
import ModalButton from './ModalButton';

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

function ModalContainer(props: ModalContainerProps) {
  const { openModal, children, ...rest } = props;

  return (
    <>
      {openModal && (
        <ModalPortal>
          <ModalContainerContext.Provider value={{ ...rest }}>
            <ModalWrapper>{children}</ModalWrapper>
          </ModalContainerContext.Provider>
        </ModalPortal>
      )}
    </>
  );
}

ModalContainer.Backdrop = Backdrop;
ModalContainer.Button = ModalButton;
ModalContainer.Contents = Contents;

export default ModalContainer;
