import styled from '@emotion/styled';
import { CSSProperties, ReactElement } from 'react';

function SecondaryButton({
  label,
  onClick,
  style,
}: {
  label: string;
  onClick: () => void;
  style?: CSSProperties;
}): ReactElement<HTMLButtonElement, 'button'> {
  return (
    <SecondaryButtonContainer style={style} onClick={onClick}>
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
`;

export default SecondaryButton;
