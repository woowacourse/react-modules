import { ReactElement } from 'react';
import styles from './SecondaryButton.module.css';

function SecondaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}): ReactElement<HTMLButtonElement, 'button'> {
  return (
    <button className={styles.secondaryButton} onClick={onClick}>
      {label}
    </button>
  );
}

export default SecondaryButton;
