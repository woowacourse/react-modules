import Modal from '..';

import styles from './style.module.css';

export default function BasicBottomModal(props: BasicModalProps) {
  return (
    <Modal isOpen={props.isOpen} closeModal={props.closeModal} type="bottom">
      <Modal.Title className={styles.title}>{props.modalTitle}</Modal.Title>
      {props.closeButtonType === 'icon' && <Modal.CloseIconButton className={styles.closeButton} />}
      {props.children}
      {props.closeButtonType === 'box' && (
        <Modal.CloseBoxButton className={styles.closeButton}>닫기</Modal.CloseBoxButton>
      )}
    </Modal>
  );
}
