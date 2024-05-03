import styles from './ConfirmButton.module.css';
import { ConfirmButtonProps } from './interfaces';

const ConfirmButton = (props: ConfirmButtonProps) => {
  return (
    <button
      className={styles['button-confirm']}
      style={{
        color: `${props.fontColor || 'white'}`,
        backgroundColor: `${props.backgroundColor || 'black'}`,
      }}
      onClick={props.onConfirm}
    >
      {props.content}
    </button>
  );
};

export default ConfirmButton;
