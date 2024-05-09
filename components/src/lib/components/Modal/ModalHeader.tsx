import { CLOSE_BUTTON } from '../../../assets/images';
import styled from 'styled-components';

export interface ModalHeaderProps {
  title: string;
  closeIcon?: boolean;
  onCloseModal: () => void;
}

function ModalHeader({
  title,
  closeIcon = false,
  onCloseModal,
}: ModalHeaderProps) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {closeIcon && (
        <CloseIcon onClick={onCloseModal}>
          <img src={CLOSE_BUTTON} />
        </CloseIcon>
      )}
    </HeaderContainer>
  );
}

export default ModalHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--black-color);
`;

const Title = styled.div`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
`;

const CloseIcon = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
