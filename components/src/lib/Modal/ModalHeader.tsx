import { colors } from './Modal.style';
import styled from 'styled-components';

interface ModalHeaderProps {
  title: string;
  hasCloseButton?: boolean;
  onClose: () => void;
}

export default function ModalHeader({ title, hasCloseButton = true, onClose }: ModalHeaderProps) {
  return (
    <Header>
      <Title>{title}</Title>
      {hasCloseButton && (
        <CloseButton onClick={onClose}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="black"
            />
          </svg>
        </CloseButton>
      )}
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  display: inline-block;
  width: 14px;
  height: 100%;
  background: ${colors.grey100};
  border: 0;
  padding: 0;
`;
