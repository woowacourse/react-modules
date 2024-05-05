import styled from '@emotion/styled';

const CompoundModalTitle = styled.p({
  fontSize: '18px',
  margin: 0,
  fontWeight: 700,
  '&:only-child': {
    position: 'absolute',
    margin: '0 auto',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

export default CompoundModalTitle;
