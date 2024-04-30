interface ModalProps extends React.ComponentPropsWithRef<"section"> {}

const Modal: React.FC<ModalProps> = ({ children, ...restProps }) => {
  return <section {...restProps}>{children}</section>;
};

export default Modal;
