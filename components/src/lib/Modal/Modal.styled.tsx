import styled from '@emotion/styled';

import { ModalProps } from './Modal';

const modalPositionVariants = {
  bottom: {
    bottom: '0',
    width: '100%',
    'border-top-left-radius': '8px',
    'border-top-right-radius': '8px'
  },
  center: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    borderRadius: '8px'
  }
};

export const StyledModal = styled.div<ModalProps>`
  position: fixed;
  padding: 24px 32px;
  min-height: 216px;
  background-color: #fff;
  border: 1px solid red;
  ${({ position = 'center' }) => modalPositionVariants[position]}
  ${({ isOpen }) => (isOpen ? 'display: block' : 'display: none')}
`;
