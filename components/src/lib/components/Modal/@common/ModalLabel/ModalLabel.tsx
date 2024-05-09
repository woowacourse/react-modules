import styles from './ModalLabel.module.css';

export type ModalLabelType = React.FC<React.PropsWithChildren>;

export const ModalLabel: ModalLabelType = ({ children }) => {
  return <p className={styles.modalLabel}>{children}</p>;
};

export default ModalLabel;
