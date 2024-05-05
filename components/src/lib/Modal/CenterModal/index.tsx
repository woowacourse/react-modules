import { ReactNode } from 'react';

import { useBottomModalContext, useModalContext } from '../../hooks/';
import { ModalContentsProps } from '../../types/modal';
import Modal from '../index';

import styles from './style.module.css';

function CenterModal({ children }: ModalContentsProps) {
  const { closeModal } = useModalContext();

  return (
    <>
      <Modal.Backdrop closeModal={closeModal} />
      <Modal.Contents className={styles.centerModalContents}>{children}</Modal.Contents>
    </>
  );
}

/**
 * click 시 BottomModal에서 지정한 애니메이션 효과와 함께 BottomModal을 닫는 버튼
 */
function Button({ children }: { children: ReactNode }) {
  const { handleCloseModal } = useBottomModalContext();
  return (
    <Modal.button isCloseModal={true} handleCloseModal={handleCloseModal}>
      {children}
    </Modal.button>
  );
}

CenterModal.button = Button;

export default CenterModal;
