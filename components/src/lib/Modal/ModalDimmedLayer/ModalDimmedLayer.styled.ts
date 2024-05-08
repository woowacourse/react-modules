import styled from 'styled-components';

export const StyledDimmedLayer = styled.div<{ zIndex: number }>`
  position: fixed;
  inset: 0;
  z-index: ${(props) => 100 + props.zIndex};
  width: 100vw;
  height: 100vh;
  padding: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
`;
