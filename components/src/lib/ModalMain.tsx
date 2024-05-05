import styles from './Modal.module.css';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const MODAL_TYPE: Record<ModalPosition, string> = {
  center: styles.modal,
  bottom: styles.modalBottom,
};

type ModalPosition = 'center' | 'bottom';

interface ModalMainProps {
  isOpen: boolean;
  position?: ModalPosition;
}

const ModalMain = ({
  isOpen,
  position = 'center',
  children,
}: PropsWithChildren<ModalMainProps>) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(<section className={MODAL_TYPE[position]}>{children}</section>, document.body)}
    </>
  );
};

export default ModalMain;

// type ButtonPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';

// interface ModalStyle {
//   dimmed?: React.CSSProperties;
//   modal?: React.CSSProperties;
//   modalHeader?: React.CSSProperties;
//   modalTitle?: React.CSSProperties;
// }

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   position: ModalPosition;
//   content?: React.ReactNode;
//   style?: ModalStyle;
//   closeButton?: React.ReactNode;
//   confirmButton?: React.ReactNode;
//   buttonPosition?: ButtonPosition;
//   closeOnOutsideClick?: boolean;
//   customCloseIcon?: string;
//   hideCloseIcon?: boolean;
// }

// const BUTTON_POSITION_TYPE: Record<ButtonPosition, string> = {
//   row: styles.buttonRow,
//   'row-reverse': styles.buttonRowReverse,
//   column: styles.buttonColumn,
//   'column-reverse': styles.buttonColumnReverse,
// };

// const Modal = ({
//   isOpen,
//   onClose,
//   title,
//   position,
//   content,
//   style,
//   closeButton,
//   confirmButton,
//   buttonPosition,
//   closeOnOutsideClick = true,
//   customCloseIcon,
//   hideCloseIcon = false,
// }: ModalProps) => {
//   const modalRef = useRef<HTMLDivElement>(null);

//   const isButton = closeButton || confirmButton;
//   const buttonLayoutStyle = buttonPosition
//     ? BUTTON_POSITION_TYPE[buttonPosition]
//     : styles.buttonRow;

//   useEffect(() => {
//     const clickOutSide = (event: MouseEvent) => {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(event.target as Node) &&
//         closeOnOutsideClick
//       ) {
//         onClose();
//       }
//     };
//     document.addEventListener('mousedown', clickOutSide);
//     return () => {
//       document.removeEventListener('mousedown', clickOutSide);
//     };
//   }, [modalRef, onClose, closeOnOutsideClick]);

//   const onErrorIcon = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     event.currentTarget.src = CloseIcon;
//   };

//   return (
//     <>
//       {isOpen &&
//         createPortal(
//           <div className={styles.dimmed} style={style?.dimmed}>
//             <section className={MODAL_TYPE[position]} ref={modalRef} style={style?.modal}>
//               <header className={styles.modalHeader} style={style?.modalHeader}>
//                 <span className={styles.title} style={style?.modalTitle}>
//                   {title}
//                 </span>
//                 {!hideCloseIcon && (
//                   <img
//                     src={customCloseIcon ?? CloseIcon}
//                     alt="close"
//                     className={styles.closeButton}
//                     onClick={onClose}
//                     onError={onErrorIcon}
//                   />
//                 )}
//               </header>
//               {content && <section>{content}</section>}
//               {isButton && (
//                 <footer className={buttonLayoutStyle}>
//                   {closeButton}
//                   {confirmButton}
//                 </footer>
//               )}
//             </section>
//           </div>,
//           document.body,
//         )}
//     </>
//   );
// };

// export default Modal;
