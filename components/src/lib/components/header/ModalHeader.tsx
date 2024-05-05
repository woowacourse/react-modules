import styles from './ModalHeader.module.css';
import CloseIcon from '../../assets/closeButton.svg';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  customCloseIcon?: string;
  hideCloseIcon?: boolean;
  modalHeader?: React.CSSProperties;
  modalTitle?: React.CSSProperties;
}

const ModalHeader = ({
  title,
  onClose,
  customCloseIcon,
  hideCloseIcon,
  modalHeader,
  modalTitle,
}: ModalHeaderProps) => {
  const onErrorIcon = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = CloseIcon;
  };

  return (
    <header className={styles.modalHeader} style={modalHeader}>
      <span className={styles.title} style={modalTitle}>
        {title}
      </span>
      {!hideCloseIcon && (
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
