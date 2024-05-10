import styled from 'styled-components';

import { ButtonContainerJustifyContent } from '../types/modal';

export interface BottomContainerStyleProps {
  $buttonContainerJustifyContent: ButtonContainerJustifyContent;
}

const ButtonContainer = styled.div<BottomContainerStyleProps>`
  display: flex;
  justify-content: ${(props) => props.$buttonContainerJustifyContent};
`;

export default ButtonContainer;
