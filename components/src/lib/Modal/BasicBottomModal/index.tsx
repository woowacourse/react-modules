import Modal from '..';

import styles from './style.module.css';

export default function BasicBottomModal(props: BasicModalProps) {
  return (
    <Modal isOpen={props.isOpen} closeModal={props.closeModal} type="bottom">
      <Modal.Header className={styles.header}>
        <Modal.Title className={styles.title}>{props.title}</Modal.Title>
        {props.closeButtonType === 'icon' && <Modal.CloseIconButton className={styles.closeButton} />}
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <div>{props.children}</div>
        {props.closeButtonType === 'box' && (
          <Modal.CloseBoxButton className={styles.closeButton}>닫기</Modal.CloseBoxButton>
        )}
      </Modal.Body>
    </Modal>
  );
}
