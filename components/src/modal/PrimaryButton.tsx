import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';

function PrimaryButton({
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
    <PrimaryButtonContainer style={memoizedStyle} onClick={onClick}>
      {label}
    </PrimaryButtonContainer>
  );
}

const PrimaryButtonContainer = styled.button`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 44px;
  background-color: #333333;
  color: white;
  border-radius: 4px;

  cursor: pointer;
`;

export default PrimaryButton;
