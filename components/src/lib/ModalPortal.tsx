import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: Props) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  if (!elementRef.current) {
    elementRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = elementRef.current!;
    document.body.appendChild(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  return createPortal(children, elementRef.current);
}
