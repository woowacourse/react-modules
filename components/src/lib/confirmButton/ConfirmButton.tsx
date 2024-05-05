import styles from './ConfirmButton.module.css';

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onConfirm: () => void;
}

const ConfirmButton = ({
  onConfirm,
  style,
  children,
  ...rest
}: React.PropsWithChildren<CloseButtonProps>) => {
  return (
    <button className={styles.confirmButton} style={style} onClick={onConfirm} {...rest}>
      {children}
    </button>
  );
};

export default ConfirmButton;
