import styled from '@emotion/styled';

import { useModalContext } from './useModalContext';

import closeIcon from '../../assets/Close.svg';

const ModalCloseButton = () => {
  const { onClose } = useModalContext();

  return (
    <StyledCloseButton type="button" onClick={onClose} aria-label="closeModalButton">
      <StyledCloseIcon src={closeIcon} alt="closeIcon" />
    </StyledCloseButton>
  );
};
export default ModalCloseButton;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 0;
  &:hover {
    background-color: rgba(31, 41, 55, 0.1);
    border-radius: 20%;
  }
`;

const StyledCloseIcon = styled.img`
  width: 27px;
  height: 27px;
`;
