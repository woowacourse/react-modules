import CustomModalBody from './CustomModalBody';
import CustomModalCloseButton from './CustomModalCloseButton';
import CustomModalContainer from './CustomModalContainer';
import CustomModalFooter from './CustomModalFooter';
import CustomModalHeader from './CustomModalHeader';
import CustomModalTitle from './CustomModalTitle';

const CustomModal = Object.assign(CustomModalContainer, {
  Header: CustomModalHeader,
  Title: CustomModalTitle,
  CloseButton: CustomModalCloseButton,
  Body: CustomModalBody,
  Footer: CustomModalFooter,
});

export default CustomModal;
