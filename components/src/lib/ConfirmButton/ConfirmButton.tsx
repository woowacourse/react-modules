import styles from './ConfirmButton.module.css';
import { ConfirmButtonProps } from '../interfaces';

const ConfirmButton = (props: ConfirmButtonProps) => {
  return (
    <button
      className={styles['button-confirm']}
      style={{
        color: `${props.fontColor || 'white'}`,
        backgroundColor: `${props.backgroundColor || 'black'}`,
        width: `${(props.buttonSize && props.buttonSize.width) || '100%'}`,
        height: `${(props.buttonSize && props.buttonSize.height) || '3rem'}`,
      }}
      onClick={props.onConfirm}
    >
      {props.content}
    </button>
  );
};

export default ConfirmButton;
