import styled from 'styled-components';

import { ButtonContainerJustifyContent } from '../types/modal';

interface StyleProps {
  $buttonContainerJustifyContent: ButtonContainerJustifyContent;
}

const ButtonContainer = styled.div<StyleProps>`
  display: flex;
  justify-content: ${(props) => props.$buttonContainerJustifyContent};
`;

export default ButtonContainer;
