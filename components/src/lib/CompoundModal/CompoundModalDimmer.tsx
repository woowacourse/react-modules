import COLOR_HEXES from '../constants/colorHexes';
import styled from '@emotion/styled';
import useCompoundModalContext from './useCompoundModalContext';

export default function CompoundModalDimmer() {
  const { onClose } = useCompoundModalContext();

  return <ModalDimmer onClick={onClose} />;
}

const ModalDimmer = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: COLOR_HEXES.blackTransparent1,
});
