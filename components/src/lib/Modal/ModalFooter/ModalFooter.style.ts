import styled from 'styled-components';

import { ModalButtonInterface } from '../Modal';
import { COLORS } from '../Modal.style';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterButton = styled.button<{ $style: ModalButtonInterface['style'] }>`
  background: ${(props) => (props.$style === 'primary' ? COLORS.grey600 : COLORS.grey100)};
  color: ${(props) => (props.$style === 'primary' ? COLORS.grey100 : COLORS.grey300)};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;

  &:hover {
    background: ${(props) => (props.$style === 'primary' ? COLORS.grey500 : COLORS.grey200)};
    transition: 0.3s ease;
  }
`;
