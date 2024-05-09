import styles from './close-button.module.css';
import closeButton from '../../assets/closeButton.svg';

interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button onClick={onClick} className={styles.closeButton}>
      <img src={closeButton} />
    </button>
  );
}
