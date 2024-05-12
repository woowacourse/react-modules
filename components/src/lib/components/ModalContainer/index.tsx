import styled from 'styled-components';

import Backdrop from './Backdrop';
import Contents from './Contents';
import ModalCloseButtonWrapper from './ModalCloseButtonWrapper';

import ModalPortal from '@/lib/components/ModalPortal';
import { ModalContainerContext } from '@/lib/contexts';
import { ModalContainerProps } from '@/lib/types/modal';
import '@/lib/styles/reset.css';

// TODO : width, height, margin props로 받기
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
ModalContainer.CloseButtonWrapper = ModalCloseButtonWrapper;
ModalContainer.Contents = Contents;

export default ModalContainer;
