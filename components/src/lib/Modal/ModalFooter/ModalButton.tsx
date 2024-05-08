import { colors } from '../Modal.style';
import styled from 'styled-components';

export interface ModalButtonProps {
  children: React.ReactNode;
  style?: 'primary' | 'secondary';
  onClick: () => void;
}

export default function ModalButton({ children, style = 'primary', onClick }: ModalButtonProps) {
  return (
    <FooterButton
      $style={style}
      onClick={onClick}
    >
      {children}
    </FooterButton>
  );
}

const FooterButton = styled.button<{ $style: ModalButtonProps['style'] }>`
  background: ${(props) => (props.$style === 'primary' ? colors.grey400 : colors.grey100)};
  color: ${(props) => (props.$style === 'primary' ? colors.grey100 : colors.grey200)};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  border: 1px solid rgba(51, 51, 51, 0.25);

  &:hover {
    background: ${(props) => (props.$style === 'primary' ? '#444444' : '#eeeeee')};
    transition: 0.3s ease;
  }
`;
