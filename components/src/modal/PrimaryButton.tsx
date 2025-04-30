import { ReactElement } from 'react';
import styles from './PrimaryButton.module.css';

function PrimaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}): ReactElement<HTMLButtonElement, 'button'> {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
      {label}
    </button>
  );
}

export default PrimaryButton;
