import { ModalHeader } from '../Modal.styled';

const CustomModalHeader = ({ children }: React.PropsWithChildren) => {
  return <ModalHeader>{children}</ModalHeader>;
};

export default CustomModalHeader;
