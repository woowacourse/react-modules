import CloseIconSVG from '../assets/CloseIconSVG';
import { ModalHeaderContainer } from './ModalStyle';
import { ModalTitle } from './ModalTextStyle';

interface ModalHeaderProps {
  titleText: string;
  hasCloseButton: boolean;
}

const ModalHeader = ({ titleText, hasCloseButton }: ModalHeaderProps) => {
  return (
    <ModalHeaderContainer>
      <ModalTitle>{titleText}</ModalTitle>
      {hasCloseButton && <CloseIconSVG sizeName={'md'}></CloseIconSVG>}
    </ModalHeaderContainer>
  );
};

export default ModalHeader;
