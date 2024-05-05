import styles from './ModalHeader.module.css';
import CloseIcon from '../assets/closeButton.svg';

interface ModalHeaderProps {
  handleClose: () => void;
  showCloseIcon?: boolean;
  customCloseIcon?: string;
  style?: React.CSSProperties;
}

const ModalHeader = ({
  handleClose,
  showCloseIcon = true,
  customCloseIcon,
  style,
  children,
}: React.PropsWithChildren<ModalHeaderProps>) => {
  const onErrorIcon = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = CloseIcon;
  };

  return (
    <header className={styles.modalHeader} style={style}>
      <span className={styles.title}>{children}</span>
      {showCloseIcon && (
        <img
          src={customCloseIcon ?? CloseIcon}
          alt="close"
          className={styles.closeButton}
          onClick={handleClose}
          onError={onErrorIcon}
        />
      )}
    </header>
  );
};

export default ModalHeader;
