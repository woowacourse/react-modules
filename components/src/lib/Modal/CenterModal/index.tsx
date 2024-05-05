import { useModalContext } from '../../hooks/';
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

export default CenterModal;
