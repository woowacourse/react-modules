import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import ModalOverlay from './ModalOverlay';
import ModalCloseButton from './ModalCloseButton';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import { ComponentProps, useState } from 'react';

type OverlayProps = ComponentProps<typeof ModalOverlay>;
// ② Modal 컴포넌트에서 position, width만 뽑아오기
type ModalPickedProps = Pick<
  ComponentProps<typeof Modal>,
  'position' | 'width'
>;
// ①과 ②를 합친 최종 Args 타입
type StoryArgs = OverlayProps & ModalPickedProps;

const meta = {
  title: 'Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: <></>,
    position: 'center',
    width: 400,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        {/* <ModalOverlay {...args}>
          <Modal
            isOpen={args.isOpen}
            position={args.position}
            width={args.width}
          >
            <>
              <ModalCloseButton onClose={onClose} />
              <ModalTitle>제목</ModalTitle>
              <ModalBody>내용1!</ModalBody>
            </>
          </Modal>
        </ModalOverlay> */}
      </>
    );
  },
};
