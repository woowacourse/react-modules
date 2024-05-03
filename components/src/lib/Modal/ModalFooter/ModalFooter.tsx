import { ModalButtonInterface } from '../Modal';

import * as Styled from './ModalFooter.style';

interface ModalFooterProps {
  bottons: ModalButtonInterface[];
}

export default function ModalFooter({ bottons }: ModalFooterProps) {
  return (
    <Styled.Footer>
      {bottons.map((button, index) => {
        return (
          <Styled.FooterButton
            key={index}
            $style={button.style}
            onClick={button.onClick}
          >
            {button.text}
          </Styled.FooterButton>
        );
      })}
    </Styled.Footer>
  );
}
