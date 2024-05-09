import styles from './ModalFooterContainer.module.css';

const ModalFooterContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.modalFooterWrapper}>{children}</div>;
};

export default ModalFooterContainer;
