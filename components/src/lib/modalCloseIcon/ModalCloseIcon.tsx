import styles from './ModalCloseIcon.module.css';
import CloseIcon from '../assets/closeButton.svg';

interface ModalCloseIconProps extends React.HTMLAttributes<HTMLImageElement> {
  onClose: () => void;
  showCloseIcon?: boolean;
  customCloseIcon?: string;
}

const ModalCloseIcon = ({
  onClose,
  showCloseIcon = true,
  customCloseIcon,
}: ModalCloseIconProps) => {
  const onErrorIcon = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = CloseIcon;
  };
  return (
    <>
      {showCloseIcon && (
        <img
          src={customCloseIcon ?? CloseIcon}
          alt="close"
          className={styles.closeButton}
          onClick={onClose}
          onError={onErrorIcon}
        />
      )}
    </>
  );
};

export default ModalCloseIcon;
