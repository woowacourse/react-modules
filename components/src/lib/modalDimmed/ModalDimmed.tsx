import { createPortal } from 'react-dom';
import styles from './ModalDimmed.module.css';

interface ModalDimmedProps {
  style?: React.CSSProperties;
}

const ModalDimmed = ({ style }: ModalDimmedProps) => {
  return createPortal(<div className={styles.dimmed} style={style} />, document.body);
};

export default ModalDimmed;
