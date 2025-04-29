import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface ModalProps {
  children: React.ReactNode;
  css?: SerializedStyles;
}

const Modal = ({ children, css }: ModalProps) => {
  return (
    <Background>
      <ModalContainer css={css}>{children}</ModalContainer>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ModalContainer = styled.div<{ css?: SerializedStyles }>`
  width: 304px;
  height: 216px;
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: 100;

  ${({ css }) => css};
`;

export default Modal;
