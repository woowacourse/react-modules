import { ModalButtonProps } from './ModalButton';
import { colors } from '../Modal.style';
import styled from 'styled-components';

export const FooterButton = styled.button<{ $style: ModalButtonProps['style'] }>`
  background: ${(props) => (props.$style === 'primary' ? colors.grey400 : colors.grey100)};
  color: ${(props) => (props.$style === 'primary' ? colors.grey100 : colors.grey200)};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;

  &:hover {
    background: ${(props) => (props.$style === 'primary' ? '#444444' : '#eeeeee')};
    transition: 0.3s ease;
  }
`;
