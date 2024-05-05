import styles from './ModalHeader.module.css';

interface ModalHeaderProps extends React.HTMLAttributes<HTMLElement> {}

const ModalHeader = ({ style, children, ...rest }: React.PropsWithChildren<ModalHeaderProps>) => {
  return (
    <header className={styles.modalHeader} style={style} {...rest}>
      {children}
    </header>
  );
};

export default ModalHeader;
