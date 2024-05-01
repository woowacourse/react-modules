import type { StrictPropsWithChildren } from '../../type/common';
import styles from './Title.module.css';

const Title = ({ children }: StrictPropsWithChildren) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
