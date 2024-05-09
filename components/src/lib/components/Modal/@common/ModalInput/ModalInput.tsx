import { forwardRef } from 'react';

import styles from './ModalInput.module.css';

export type ModalInputType = React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>
>;

const ModalInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ ...rest }, ref) => {
  return <input className={styles.modalInput} ref={ref} {...rest} />;
});

export default ModalInput;
