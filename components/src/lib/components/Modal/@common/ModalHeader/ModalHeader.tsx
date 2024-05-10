import { extendClassNames } from '@utils/extendClassNames';

import styles from './ModalHeader.module.css';

export type ModalHeaderType = React.FC<React.PropsWithChildren<{ title: string } & React.HTMLAttributes<HTMLElement>>>;

const ModalHeader: ModalHeaderType = ({ children, className, title }) => {
  return (
    <header className={extendClassNames(styles.modalHeader, className)}>
      <h2 className={styles.modalTitle}>{title}</h2>
      {children}
    </header>
  );
};

export default ModalHeader;
