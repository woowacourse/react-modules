import styled from 'styled-components';

export const StyledDimmedLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  padding: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
`;
