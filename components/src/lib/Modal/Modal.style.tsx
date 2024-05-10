import styled, { css } from 'styled-components';
import Theme from '@/style/theme';
import { ModalPosition } from './modal.type';
import { Size } from '@/types/common.type';

const ModalWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: ${({ open }) => (open ? 'flex' : 'none')};
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${Theme.background.dark};
`;

const sizeMap = {
  small: '400px',
  medium: '600px',
  large: '800px',
};

const ModalContainer = styled.div<{
  $position: ModalPosition;
  $size: Size;
}>`
  position: fixed;
  left: 50%;
  ${({ $position, $size }) => positionMapper($position, $size)}
  min-height: 150px;
  background-color: ${Theme.background.light};
  color: ${Theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
`;

const positionMapper = (position: ModalPosition, size: Size) => {
  switch (position) {
    case 'center':
      return css({
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px',
        width: sizeMap[size],
      });
    case 'bottom':
      return css({
        bottom: '0px',
        transform: 'translate(-50%, 0%)',
        borderRadius: '8px 8px 0px 0px',
        width: '100%',
      });
  }
};

const Title = styled.span`
  font-size: ${Theme.font.size.large};
  font-weight: ${Theme.font.weight.bold};
  margin-bottom: 16px;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CloseIcon = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  background: none;
  border: 0;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Content = styled.div`
  width: calc(100% - 24px);
  margin-bottom: 10px;
`;

const PromptInput = styled.input`
  width: calc(100% - 24px);
  height: 40px;
  padding: 0 10px;
  margin: 10px 0;
  border: 1px solid ${Theme.colors.grey};
  border-radius: 4px;

  &:focus {
    border: 1px solid ${Theme.colors.black};
  }
`;

const S = {
  ModalWrapper,
  Title,
  ModalBackground,
  ModalHeader,
  CloseIcon,
  Content,
  ModalContainer,
  PromptInput,
};

export default S;
