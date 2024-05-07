import styles from './CancelButton.module.css';
import { CancelButtonProps } from './interfaces';

const CancelButton = (props: CancelButtonProps) => {
  return (
    <button
      className={styles['button-cancel']}
      style={{
        color: `${props.fontColor || 'black'}`,
        backgroundColor: `${props.backgroundColor || 'white'}`,
      }}
      onClick={props.onCancel}
    >
      {props.content}
    </button>
  );
};

export default CancelButton;
