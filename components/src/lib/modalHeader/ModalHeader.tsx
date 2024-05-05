import styles from './ModalHeader.module.css';
import CloseIcon from '../assets/closeButton.svg';

interface ModalHeaderProps extends React.HTMLAttributes<HTMLElement> {
  onClose: () => void;
  title?: string;
  showCloseIcon?: boolean;
  customCloseIcon?: string;
}

const ModalHeader = ({
  onClose,
  title,
  showCloseIcon = true,
  customCloseIcon,
  style,
  ...rest
}: React.PropsWithChildren<ModalHeaderProps>) => {
  const onErrorIcon = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = CloseIcon;
  };

  return (
    <header className={styles.modalHeader} style={style} {...rest}>
      <span className={styles.title}>{title && title}</span>
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
