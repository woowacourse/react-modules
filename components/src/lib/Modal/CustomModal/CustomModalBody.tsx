import * as Styled from '../Modal.styled';

import React from 'react';

export interface CustomModalBodyProps {
  description?: string;
}

const CustomModalBody = ({
  description = '',
  children,
}: React.PropsWithChildren<CustomModalBodyProps>) => {
  return (
    <Styled.ModalBody>
      <Styled.ModalDescription>{description}</Styled.ModalDescription>
      {children}
    </Styled.ModalBody>
  );
};

export default CustomModalBody;
