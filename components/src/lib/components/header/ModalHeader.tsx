import styles from './ModalHeader.module.css';
import CloseIcon from '../../assets/closeButton.svg';

interface ModalHeaderStyle {
  modalHeader?: React.CSSProperties;
  modalTitle?: React.CSSProperties;
}

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  style?: ModalHeaderStyle;
  customCloseIcon?: string;
  hideCloseIcon?: boolean;
}

const ModalHeader = ({
  title,
  onClose,
  customCloseIcon,
  hideCloseIcon,
  style,
}: ModalHeaderProps) => {
  const onErrorIcon = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = CloseIcon;
  };

  return (
    <header className={styles.modalHeader} style={style?.modalHeader}>
      <span className={styles.title} style={style?.modalTitle}>
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
