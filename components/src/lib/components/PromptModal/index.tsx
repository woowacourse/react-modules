import { ReactNode } from 'react';

import styled from '@emotion/styled';

import { Button } from '../Button';
import { Flex } from '../Flex';
import { Modal, ModalProps } from '../Modal';

type PromptProps = {
  /**
   * The content of the modal
   */
  content: string | ReactNode;
  /**
   * submit function to be called when the submit button is clicked
   */
  onSubmit: VoidFunction;
};

export type PromptModalProps = ModalProps & PromptProps;

export const PromptModal = ({
  isOpen,
  title,
  content,
  position,
  onClose,
  onSubmit,
  ...props
}: PromptModalProps) => {
  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose} showCloseButton={false} {...props}>
      <Flex height="100%" direction="column" justify="flex-start" gap={1} padding="1rem 0 0 0">
        <StyledContent>{content}</StyledContent>
        <Flex gap="0.5rem" justify="flex-end">
          <Button
            width={position === 'center' ? '20%' : '100%'}
            size="md"
            variant="outlined"
            color="#808080"
            fontColor="gray"
            onClick={onClose}
          >
            취소
          </Button>
          <Button width={position === 'center' ? '20%' : '100%'} size="md" onClick={onSubmit}>
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
