import styles from './ModalHeader.module.css';
import CloseIcon from '../assets/closeButton.svg';

interface ModalHeaderProps extends React.HTMLAttributes<HTMLElement> {
  onClose: () => void;
  showCloseIcon?: boolean;
  customCloseIcon?: string;
}

const ModalHeader = ({
  onClose,
  showCloseIcon = true,
  customCloseIcon,
  style,
  children,
  ...rest
}: React.PropsWithChildren<ModalHeaderProps>) => {
  const onErrorIcon = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = CloseIcon;
  };

  return (
    <header className={styles.modalHeader} style={style} {...rest}>
      <span className={styles.title}>{children}</span>
      {showCloseIcon && (
        <img
          src={customCloseIcon ?? CloseIcon}
          alt="close"
          className={styles.closeButton}
          onClick={onClose}
          onError={onErrorIcon}
        />
      )}
    </header>
  );
};

export default ModalHeader;
