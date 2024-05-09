import { PropsWithChildren } from 'react';
import styles from './content.module.css';

type SizeType = 'small' | 'medium' | 'large';

interface ContentProps {
  size: SizeType;
}

export default function Content({ size, children }: PropsWithChildren<ContentProps>) {
  return <div className={`content ${styles[size]}`}>{children}</div>;
}
