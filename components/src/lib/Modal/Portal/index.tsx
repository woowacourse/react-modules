import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './style.module.css';

interface PortalProps {
  children: ReactNode;
}
export default function Portal(props: PortalProps) {
  const { children } = props;
  const $body = document.getElementsByTagName('body')?.[0] as HTMLElement;

  const stopModalPropagation = (e: globalThis.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.getElementsByTagName('body')[0].addEventListener('click', stopModalPropagation);

    return () => {
      document.getElementsByTagName('body')[0].removeEventListener('click', stopModalPropagation);
    };
  }, []);

  return createPortal(
    <div id="modal-portal-root" className={styles.portal}>
      {children}
    </div>,
    $body,
    'modal-portal',
  );
}
