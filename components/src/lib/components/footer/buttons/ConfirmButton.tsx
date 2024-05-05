import styles from './styles.module.css';

const ConfirmButton = ({
  children,
  ...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className={`${styles.modalButton} ${styles.confirmButton}`} {...props}>
      {children}
    </button>
  );
};

export default ConfirmButton;
