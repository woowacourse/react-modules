import Modal from '..';

import styles from './style.module.css';

export default function BasicCenterModal(props: BasicModalProps) {
  return (
    <Modal isOpen={props.isOpen} closeModal={props.closeModal} type="center">
      <Modal.Title className={styles.title}>{props.modalTitle}</Modal.Title>
      {props.closeButtonType === 'icon' && <Modal.CloseIconButton className={styles.closeButton} />}
      <div>{props.children}</div>
      {props.closeButtonType === 'box' && <Modal.CloseBoxButton>닫기</Modal.CloseBoxButton>}
    </Modal>
  );
}
