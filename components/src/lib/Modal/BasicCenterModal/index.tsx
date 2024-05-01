import Modal from '..';

import styles from './style.module.css';

export default function BasicCenterModal(props: BasicModalProps) {
  return (
    <Modal isOpen={props.isOpen} closeModal={props.closeModal} type="center">
      <Modal.Header className={styles.header}>
        <Modal.Title className={styles.title}>{props.title}</Modal.Title>
        {props.closeButtonType === 'icon' && <Modal.CloseIconButton className={styles.closeButton} />}
      </Modal.Header>
      <Modal.Body>
        <div>{props.children}</div>
        {props.closeButtonType === 'box' && <Modal.CloseBoxButton>닫기</Modal.CloseBoxButton>}
      </Modal.Body>
    </Modal>
  );
}
