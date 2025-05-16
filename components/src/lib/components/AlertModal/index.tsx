import { ReactNode } from 'react';

import styled from '@emotion/styled';

import { Button } from '../Button';
import { Flex } from '../Flex';
import { Modal, ModalProps } from '../Modal';

type AlertProps = {
  /**
   * The content of the modal
   */
  content: string | ReactNode;
};

export type AlertModalProps = ModalProps & AlertProps;

export const AlertModal = ({
  isOpen,
  title,
  content,
  position,
  onClose,
  ...props
}: AlertModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      position={position}
      onClose={onClose}
      showCloseButton={false}
      {...props}
    >
      <Flex height="100%" direction="column" justify="flex-start" gap={1} padding="1rem 0 0 0">
        <StyledContent>{content}</StyledContent>
        <Flex gap="0.5rem" justify="flex-end">
          <Button width={position === 'center' ? '20%' : '100%'} size="md" onClick={onClose}>
            확인
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

const StyledContent = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.1;
`;
