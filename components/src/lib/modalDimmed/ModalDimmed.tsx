import { createPortal } from 'react-dom';
import styles from './ModalDimmed.module.css';

interface ModalDimmedProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalDimmed = ({ style, ...rest }: ModalDimmedProps) => {
  return createPortal(<div className={styles.dimmed} style={style} {...rest} />, document.body);
};

export default ModalDimmed;
