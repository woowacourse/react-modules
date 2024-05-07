import { ButtonHTMLAttributes } from 'react';
import { XIcon } from '../../assets';
import styles from './CloseButton.module.css';

export interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  close: () => void;
}

const CloseButton = ({ close, ...rest }: CloseButtonProps) => {
  return (
    <button {...rest} className={styles.closeButton} onClick={close} aria-label="닫기">
      <img width="20" height="20" src={XIcon} alt="닫기 아이콘"></img>
    </button>
  );
};

export default CloseButton;
