import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  css?: SerializedStyles;
}

const Modal = ({ title, children, css }: ModalProps) => {
  return (
    <Background>
      <ModalContainer css={css}>
        <HeaderSection>
          <Title>{title}</Title>
          <ModalCloseButton>X</ModalCloseButton>
        </HeaderSection>

        <ModalContent>{children}</ModalContent>
      </ModalContainer>
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
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 16px;

  ${({ css }) => css};
`;

const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

const ModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.main`
  flex: 1;
`;

export default Modal;
