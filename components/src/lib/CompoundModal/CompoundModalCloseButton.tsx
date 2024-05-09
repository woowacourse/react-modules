import CloseIcon from '../assets/close-icon.png';
import styled from '@emotion/styled';
import useCompoundModalContext from './useCompoundModalContext';

export default function CompoundModalCloseButton() {
  const { onClose } = useCompoundModalContext();
  return <CloseButton onClick={onClose} />;
}

const CloseButton = styled.button({
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  backgroundImage: `url(${CloseIcon})`,
  backgroundSize: 'contain',
  width: '14px',
  height: '14px',
  padding: '5px',
  marginLeft: '10px',

  '&:only-child': {
    position: 'absolute',
    margin: '0 auto',
    right: 0,
  },
});
