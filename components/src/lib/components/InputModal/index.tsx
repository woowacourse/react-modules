import { Button } from '../Button';
import { Flex } from '../Flex';
import { Input, InputProps } from '../Input';
import { Modal, type ModalProps } from '../Modal';

export type InputModalProps = {
  /**
   * submit function to be called when the submit button is clicked
   */
  onSubmit: VoidFunction;
} & ModalProps &
  InputProps;

export const InputModal = ({
  isOpen,
  title,
  value,
  placeholder,
  position,
  onChange,
  onClose,
  onSubmit,
  ...props
}: InputModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      position={position}
      onClose={onClose}
      showCloseButton={false}
      {...props}
    >
      <Flex
        as="form"
        height="100%"
        direction="column"
        justify="flex-start"
        gap={1}
        padding="1rem 0 0 0"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Input autoFocus size={2.25} value={value} onChange={onChange} placeholder={placeholder} />
        <Flex gap="0.5rem" justify="flex-end">
          <Button
            size="md"
            width={position === 'center' ? '20%' : '100%'}
            variant="outlined"
            color="#808080"
            fontColor="gray"
            onClick={onClose}
          >
            취소
          </Button>
          <Button size="md" width={position === 'center' ? '20%' : '100%'}>
            확인
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};
