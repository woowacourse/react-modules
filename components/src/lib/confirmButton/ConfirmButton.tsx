import styles from './ConfirmButton.module.css';

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onConfirm: () => void;
}

const ConfirmButton = ({
  label,
  onConfirm,
  style,
  ...rest
}: React.PropsWithChildren<CloseButtonProps>) => {
  return (
    <button className={styles.confirmButton} style={style} onClick={onConfirm} {...rest}>
      {label}
    </button>
  );
};

export default ConfirmButton;
