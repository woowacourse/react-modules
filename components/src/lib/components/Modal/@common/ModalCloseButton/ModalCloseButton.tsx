import { extendClassNames } from '@utils/extendClassNames';
import { CloseImage } from '@assets/index';

import styles from './ModalCloseButton.module.css';

export type ModalCloseButtonType = React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;

const ModalCloseButton: ModalCloseButtonType = ({ className, type = 'submit', ...rest }) => {
  return (
    <button type={type} className={extendClassNames(styles.modalCloseButton, className)} {...rest}>
      <img className={styles.modalCloseButtonImage} src={CloseImage} alt="close-button" />
    </button>
  );
};

export default ModalCloseButton;
