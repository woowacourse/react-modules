import type { StrictPropsWithChildren } from '../../types/common';
import type { ModalFooterProps } from './ModalLayout.type';

import styles from './ModalLayout.module.css';

export const ModalHeader = ({ children }: StrictPropsWithChildren) => {
  return <header className={styles.modalHeader}>{children}</header>;
};

export const ModalBody = ({ children }: StrictPropsWithChildren) => {
  return <main className={styles.modalBody}>{children}</main>;
};

export const ModalFooter = ({
  children,
  align = 'left',
  direction = 'row',
}: StrictPropsWithChildren<ModalFooterProps>) => {
  return <footer className={`${styles.modalFooter} ${styles[align]} ${styles[direction]}`}>{children}</footer>;
};
