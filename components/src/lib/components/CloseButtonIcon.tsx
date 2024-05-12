import styled from 'styled-components';

import CloseButtonImg from '@/lib/assets/images/closeButton.svg';

const CloseButton = styled.button`
  img {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

export default function CloseButtonIcon() {
  return (
    <CloseButton>
      <img src={CloseButtonImg} alt="Close" />
    </CloseButton>
  );
}
