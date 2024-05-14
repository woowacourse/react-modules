import { ModalTitle } from '../Modal.styled';

const CustomModalTitle = ({ children }: React.PropsWithChildren) => {
  return <ModalTitle>{children}</ModalTitle>;
};

export default CustomModalTitle;
