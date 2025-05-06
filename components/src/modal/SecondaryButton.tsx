import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';

function SecondaryButton({
  label,
  onClick,
  style,
}: {
  label: string;
  onClick: () => void;
  style?: CSSProperties;
}) {
  const memoizedStyle = useMemo(() => {
    return {
      ...style,
    };
  }, [JSON.stringify(style)]);

  return (
    <SecondaryButtonContainer style={memoizedStyle} onClick={onClick}>
      {label}
    </SecondaryButtonContainer>
  );
}

const SecondaryButtonContainer = styled.button`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 44px;
  background-color: #ffffff;
  color: #8b95a1;
  border-radius: 4px;

  cursor: pointer;
`;

export default SecondaryButton;
