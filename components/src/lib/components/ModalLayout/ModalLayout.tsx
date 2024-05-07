import { HTMLAttributes } from 'react';
import type { StrictPropsWithChildren } from '../../types/common';
import styles from './ModalLayout.module.css';

export type Align = 'left' | 'center' | 'right';
export type Direction = 'row' | 'column';

export interface ModalFooterProps extends HTMLAttributes<HTMLElement> {
  align?: Align;
  direction?: Direction;
}

export const ModalHeader = ({ children, ...rest }: StrictPropsWithChildren<HTMLAttributes<HTMLElement>>) => {
  return (
    <header {...rest} className={styles.modalHeader}>
      {children}
    </header>
  );
};

export const ModalBody = ({ children, ...rest }: StrictPropsWithChildren<HTMLAttributes<HTMLElement>>) => {
  return (
    <section {...rest} className={styles.modalBody}>
      {children}
    </section>
  );
};

export const ModalFooter = ({
  children,
  align = 'left',
  direction = 'row',
  ...rest
}: StrictPropsWithChildren<ModalFooterProps>) => {
  return (
    <footer {...rest} className={`${styles.modalFooter} ${styles[align]} ${styles[direction]}`}>
      {children}
    </footer>
  );
};
