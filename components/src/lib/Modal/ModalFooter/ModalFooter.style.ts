import styled from 'styled-components';
import { ModalButtonInterface } from '../Modal';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterButton = styled.button<{ $style: ModalButtonInterface['style'] }>`
  background: ${(props) => (props.$style === 'primary' ? '#333333' : '#ffffff')};
  color: ${(props) => (props.$style === 'primary' ? '#ffffff' : '#8b95a1')};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;

  &:hover {
    background: ${(props) => (props.$style === 'primary' ? '#444444' : '#eeeeee')};
    transition: 0.3s ease;
  }
`;
