import styles from './CancelButton.module.css';
import { CancelButtonProps } from './interfaces';

const CancelButton = (props: CancelButtonProps) => {
  return (
    <button
      className={styles['button-cancel']}
      style={{
        color: `${props.fontColor || 'grey'}`,
        backgroundColor: `${props.backgroundColor || 'lightgrey'}`,
      }}
      onClick={props.onCancel}
    >
      {props.content}
    </button>
  );
};

export default CancelButton;
