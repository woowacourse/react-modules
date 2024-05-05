import styles from './CloseButton.module.css';

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClose: () => void;
}

const CloseButton = ({
  label,
  onClose,
  style,
  ...rest
}: React.PropsWithChildren<CloseButtonProps>) => {
  return (
    <button className={styles.closeButton} style={style} onClick={onClose} {...rest}>
      {label}
    </button>
  );
};

export default CloseButton;
