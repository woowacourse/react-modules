import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../..';

import { useState } from 'react';
import Button from '../common/Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  parameters: {
    controls: { exclude: ['close', 'children'] },
  },

  argTypes: {
    position: {
      options: ['center', 'bottom', 'top'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    backdropType: {
      options: ['transparent', 'blur', 'opaque'],
      control: { type: 'select' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
    animation: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;
type ModalFooterStory = StoryObj<typeof Modal.Footer>;

export const Default: Story = {
  args: {},
  decorators: [
    (_, context) => {
      const [isOpen, setIsOpen] = useState(false);

      const storyArgs = {
        ...context.args,
        isOpen: isOpen,
        close: () => setIsOpen(false),
      };

      return (
        <div style={{ height: '500px' }}>
          <Button text="Modal Open" onClick={() => setIsOpen(!isOpen)} />
          <Modal {...storyArgs}>
            <Modal.Header>
              <Modal.Title>모달 테스트</Modal.Title>
            </Modal.Header>
            <Modal.Body>모달 내용</Modal.Body>
            <Modal.Footer direction="column">
              <Modal.Button text="확인" fullWidth></Modal.Button>
              <Modal.Button
                text="닫기"
                fullWidth
                color="none"
                variants="normal"
                onClick={() => setIsOpen(false)}
              ></Modal.Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
  ],
};

function createBasicModalStory(args: any) {
  return {
    args,
    decorators: Default.decorators,
  };
}

export const Center: Story = createBasicModalStory({ position: 'center' });
export const Bottom: Story = createBasicModalStory({ position: 'bottom' });
export const Small: Story = createBasicModalStory({ position: 'center', size: 'sm' });
export const Medium: Story = createBasicModalStory({ position: 'center', size: 'md' });
export const Large: Story = createBasicModalStory({ position: 'center', size: 'lg' });
export const CustomSize: Story = createBasicModalStory({
  position: 'center',
  customWidth: '100%',
  customHeight: '100%',
});

const DefaultFooterPositionModal: ModalFooterStory = {
  args: {
    position: 'center',
  },
  decorators: [
    (_, context) => {
      const [isOpen, setIsOpen] = useState(false);

      const storyArgs = {
        isOpen: isOpen,
        close: () => setIsOpen(false),
      };

      return (
        <div style={{ height: '500px' }}>
          <Button text="Modal Open" onClick={() => setIsOpen(!isOpen)} />
          <Modal {...storyArgs}>
            <Modal.Header>
              <Modal.Title>모달 테스트</Modal.Title>
            </Modal.Header>
            <Modal.Body>모달 내용</Modal.Body>
            <Modal.Footer direction="row" position={context.args.position}>
              <Modal.Button text="확인"></Modal.Button>
              <Modal.Button text="닫기" color="none" variants="normal" onClick={() => setIsOpen(false)}></Modal.Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
  ],
};

function createSelectedFooterPositionModalStory(args: any) {
  return {
    args,
    decorators: DefaultFooterPositionModal.decorators,
  };
}

export const LeftPositionInFooterModal: ModalFooterStory = createSelectedFooterPositionModalStory({ position: 'left' });
export const CenterPositionInFooterModal: ModalFooterStory = createSelectedFooterPositionModalStory({
  position: 'center',
});
export const RightPositionInFooterModal: ModalFooterStory = createSelectedFooterPositionModalStory({
  position: 'right',
});
