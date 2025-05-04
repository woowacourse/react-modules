import styled from '@emotion/styled';
import { CSSProperties, ReactNode } from 'react';

function Title({
  style,
  children,
}: {
  style?: CSSProperties;
  children: ReactNode;
}) {
  return <StyledTitle style={style}>{children}</StyledTitle>;
}

const StyledTitle = styled.h2`
  margin: 0;
  justify-self: flex-start;
  font-size: 24px;
`;

export default Title;
