import styles from './ModalHeader.module.css';
import CloseIcon from '../assets/closeButton.svg';

interface ModalHeaderProps {
  handleClose: () => void;
  showCloseIcon?: boolean;
  customCloseIcon?: string;
}

const ModalHeader = ({
  children,
  handleClose,
  showCloseIcon = true,
  customCloseIcon,
}: React.PropsWithChildren<ModalHeaderProps>) => {
  const onErrorIcon = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = CloseIcon;
  };

  return (
    <header className={styles.modalHeader}>
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
