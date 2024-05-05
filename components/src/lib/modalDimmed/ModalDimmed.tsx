import { createPortal } from 'react-dom';
import styles from './ModalDimmed.module.css';

export interface ModalDimmedProps extends React.HTMLAttributes<HTMLDivElement> {
  onDimmedClick?: () => void;
}

const ModalDimmed = ({ onDimmedClick, style, ...rest }: ModalDimmedProps) => {
  return createPortal(
    <div className={styles.dimmed} style={style} onClick={onDimmedClick} {...rest} />,
    document.body,
  );
};

export default ModalDimmed;
