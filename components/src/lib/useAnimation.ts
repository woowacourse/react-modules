import styles from './Modal.module.css';
import { useEffect, useRef, useState } from 'react';

type ModalPosition = 'center' | 'bottom';

const MODAL_ANIMATION_TYPE: Record<ModalPosition, Record<'enter' | 'exit', string>> = {
  center: {
    enter: `${styles.modal} ${styles.modalEnter}`,
    exit: `${styles.modal} ${styles.modalExit}`,
  },
  bottom: {
    enter: `${styles.modalBottom} ${styles.modalBottomEnter}`,
    exit: `${styles.modalBottom} ${styles.modalBottomExit}`,
  },
};

interface UseAnimationProps {
  isAnimation: boolean;
  isOpen: boolean;
  position: ModalPosition;
  delay?: number;
}

const useAnimation = ({ isAnimation, isOpen, position, delay }: UseAnimationProps) => {
  const [mounted, setMounted] = useState(false);
  const exitTimeout = useRef<number>();

  const modalAnimationClass = isOpen
    ? MODAL_ANIMATION_TYPE[position].enter
    : MODAL_ANIMATION_TYPE[position].exit;

  useEffect(() => {
    if (!isAnimation) {
      setMounted(isOpen);
      return;
    }

    if (isOpen) {
      setMounted(true);
    } else if (!isOpen && mounted) {
      exitTimeout.current = setTimeout(() => {
        setMounted(false);
      }, delay);
    }
    return () => {
      clearTimeout(exitTimeout.current);
    };
  }, [isAnimation, isOpen, mounted, delay]);

  return { mounted, modalAnimationClass };
};

export default useAnimation;
