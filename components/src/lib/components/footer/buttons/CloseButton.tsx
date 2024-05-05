import styles from './styles.module.css';

const CloseButton = ({
  children,
  ...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className={`${styles.modalButton} ${styles.closeButton}`} {...props}>
      {children}
    </button>
  );
};

export default CloseButton;
