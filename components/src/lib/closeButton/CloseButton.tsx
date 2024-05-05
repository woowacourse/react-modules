import styles from './CloseButton.module.css';

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClose: () => void;
}

const CloseButton = ({
  onClose,
  style,
  children,
  ...rest
}: React.PropsWithChildren<CloseButtonProps>) => {
  return (
    <button className={styles.closeButton} style={style} onClick={onClose} {...rest}>
      {children}
    </button>
  );
};

export default CloseButton;
