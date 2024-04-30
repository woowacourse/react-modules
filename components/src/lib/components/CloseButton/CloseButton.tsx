import { XIcon } from '../../assets';
import styles from './CloseButton.module.css';

interface CloseButtonProps {
  close: () => void;
}

const CloseButton = ({ close }: CloseButtonProps) => {
  return (
    <button className={styles.closeButton} onClick={close} aria-label="닫기">
      <img width="20" height="20" src={XIcon} alt="닫기 아이콘"></img>
    </button>
  );
};

export default CloseButton;
