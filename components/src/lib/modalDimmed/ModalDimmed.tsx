import { createPortal } from 'react-dom';
import styles from './ModalDimmed.module.css';

const ModalDimmed = () => {
  return createPortal(<div className={styles.dimmed} />, document.body);
};

export default ModalDimmed;
