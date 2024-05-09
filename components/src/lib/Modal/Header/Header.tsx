import { PropsWithChildren } from 'react';
import styles from './header.module.css';

export default function Header({ children }: PropsWithChildren) {
  return <header className={styles.header}>{children}</header>;
}
