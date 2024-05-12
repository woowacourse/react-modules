import COLOR_HEXES from '../constants/colorHexes';
import styled from '@emotion/styled';

export default function CompoundModalTextInput() {
  return <TextInput type='text' autoFocus />;
}
const TextInput = styled.input({
  width: '100%',
  height: '32px',
  borderRadius: '2px',
  padding: '8px',
  boarderColor: COLOR_HEXES.gray1,
  border: '1px solid',
  '&:focus': {
    borderColor: COLOR_HEXES.black,
  },
});
