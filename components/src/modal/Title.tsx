import styled from '@emotion/styled';
import { CSSProperties, ReactNode, useMemo } from 'react';

function Title({
  style,
  children,
}: {
  style?: CSSProperties;
  children: ReactNode;
}) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return <StyledTitle style={memoizedStyle}>{children}</StyledTitle>;
}

const StyledTitle = styled.h2`
  margin: 0;
  justify-self: flex-start;
  font-size: 24px;
`;

export default Title;
