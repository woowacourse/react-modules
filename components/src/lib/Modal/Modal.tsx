interface ModalProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({ children, isOpen, onToggle }) => {
  return isOpen && <div onClick={onToggle}>{children}</div>;
};

export default Modal;
