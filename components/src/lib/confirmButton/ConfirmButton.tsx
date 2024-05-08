import styles from './ConfirmButton.module.css';

type ButtonSize = 'small' | 'medium' | 'large';

const BUTTON_SIZE: Record<ButtonSize, string> = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onConfirm: () => void;
  size?: ButtonSize;
}

const ConfirmButton = ({
  label,
  onConfirm,
  size,
  style,
  ...rest
}: React.PropsWithChildren<CloseButtonProps>) => {
  const buttonSizeClass = size ? BUTTON_SIZE[size] : '';

  return (
    <button
      className={`${styles.confirmButton} ${buttonSizeClass}`}
      style={style}
      onClick={onConfirm}
      {...rest}
    >
      {label}
    </button>
  );
};

export default ConfirmButton;
