import { PropsWithChildren } from 'react';
import styles from './footer.module.css';

interface FooterProps {
  align?: 'column' | 'row';
  position?: 'left' | 'right' | 'center';
}

export default function Footer({ align = 'row', children, position = 'right' }: PropsWithChildren<FooterProps>) {
  return <footer className={`${styles.footer} ${styles[align]} ${styles[position]}`}>{children}</footer>;
}
