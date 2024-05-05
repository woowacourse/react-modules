interface ModalContentProps {
  style?: React.CSSProperties;
}

const ModalContent = ({ style, children }: React.PropsWithChildren<ModalContentProps>) => {
  return <section style={style}>{children}</section>;
};

export default ModalContent;
