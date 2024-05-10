import { extendClassNames } from '@utils/extendClassNames';

import { BUTTON_COLOR_MAP } from '../../Modal.constant';

import { ButtonColorType } from '../../Modal.type';

import styles from './ModalButton.module.css';

export type ModalButtonType = React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { color: ButtonColorType }>;

const ModalButton: ModalButtonType = ({ children, type = 'submit', color = 'primary', className, ...rest }) => {
  return (
    <button
      type={type}
      className={extendClassNames(styles.modalButton, styles[BUTTON_COLOR_MAP[color]], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ModalButton;
