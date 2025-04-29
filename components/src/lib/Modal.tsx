import s from './Modal.module.css';

type ModalStyle = 'center' | 'bottom';

type ModalProps = {
  width?: string;
  height?: string;
  border?: string;
  position: ModalStyle;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
};

function Modal({ width = '304px', height = '216px', border = '8px', position, title, onClose, children }: ModalProps) {
  return (
    <div className={s.layout}>
      <div
        className={[s.modalContainer, s[position]].join(' ')}
        style={{ width: width, height: height, borderRadius: border }}
      >
        <div className={s.titleContainer}>
          <h3 className={s.title}>{title}</h3>
          <button className={s.closeButton}>
            <img className={s.closeButtonImage} src="images/close.png" alt="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
