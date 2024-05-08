import styles from './CloseButton.module.css';

type ButtonSize = 'small' | 'medium' | 'large';

const BUTTON_SIZE: Record<ButtonSize, string> = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClose: () => void;
  size?: ButtonSize;
}

const CloseButton = ({
  label,
  onClose,
  size,
  style,
  ...rest
}: React.PropsWithChildren<CloseButtonProps>) => {
  const buttonSizeClass = size ? BUTTON_SIZE[size] : '';

  return (
    <button
      className={`${styles.closeButton} ${buttonSizeClass}`}
      style={style}
      onClick={onClose}
      {...rest}
    >
      {label}
    </button>
  );
};

export default CloseButton;
