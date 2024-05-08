import styled from 'styled-components';
import Theme from '@/style/theme';
import { ModalPosition, Size } from '@/types/system';

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
  top: ${({ $position }) => $position === 'center' && '50%'};
  bottom: ${({ $position }) => $position === 'bottom' && '0px'};
  left: 50%;
  transform: ${({ $position }) =>
    $position === 'center' ? 'translate(-50%, -50%)' : 'translate(-50%, 0%)'};
  width: ${({ $size }) => sizeMap[$size]};
  min-height: 150px;
  background-color: ${Theme.background.light};
  border-radius: ${({ $position }) =>
    $position === 'center' ? '8px' : '8px 8px 0px 0px'};
  color: ${Theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
`;

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
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Content = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const PromptInput = styled.input`
  width: 100%;
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
