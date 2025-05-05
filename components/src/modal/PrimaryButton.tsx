import styled from '@emotion/styled';
import { CSSProperties, ReactElement } from 'react';

function PrimaryButton({
  label,
  onClick,
  style,
}: {
  label: string;
  onClick: () => void;
  style?: CSSProperties;
}): ReactElement<HTMLButtonElement, 'button'> {
  return (
    <PrimaryButtonContainer style={style} onClick={onClick}>
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
`;

export default PrimaryButton;
