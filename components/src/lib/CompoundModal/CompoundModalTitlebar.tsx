import CompoundModalCloseButton from './CompoundModalCloseButton';
import CompoundModalTitle from './CompoundModalTitle';
import styled from '@emotion/styled';

interface props {
  children:
    | (
        | React.ReactElement<typeof CompoundModalTitle>
        | React.ReactElement<typeof CompoundModalCloseButton>
      )[]
    | React.ReactElement<typeof CompoundModalTitle>
    | React.ReactElement<typeof CompoundModalCloseButton>;
}
export default function CompoundModalTitleBar({ children }: props) {
  return <ModalTitleBar>{children}</ModalTitleBar>;
}

const ModalTitleBar = styled.div({
  height: '20px',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  marginBottom: '8px',
});
