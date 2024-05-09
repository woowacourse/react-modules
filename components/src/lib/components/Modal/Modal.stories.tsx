import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Modal from './Modal';

import {
  MODAL_DEVICE_CLASS_NAME_MAP,
  MODAL_POSITION_CLASS_NAME_MAP,
  MODAL_SIZE_CLASS_NAME_MAP,
} from './Modal.constant';

const meta = {
  title: 'Base/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    position: {
      control: 'radio',
      options: Object.keys(MODAL_POSITION_CLASS_NAME_MAP),
    },
    size: {
      control: 'radio',
      options: Object.keys(MODAL_SIZE_CLASS_NAME_MAP),
    },
    device: {
      control: 'radio',
      options: Object.keys(MODAL_DEVICE_CLASS_NAME_MAP),
    },
  },
  args: {
    onToggle: fn(),
  },

  render: ({ ...args }) => {
    return (
      <div className="mobile">
        <Modal {...args}>
          <Modal.ModalHeader title="카드사 선택" />
          <Modal.ModalContent></Modal.ModalContent>
          <Modal.ModalFooter></Modal.ModalFooter>
        </Modal>
      </div>
    );
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: {
    isOpen: true,
    position: 'center',
  },
};

export const Tablet: Story = {
  args: {
    size: 'medium',
    isOpen: true,
    position: 'center',
    device: 'tablet',
  },

  render: ({ ...args }) => {
    return (
      <div className="tablet">
        <Modal {...args}>
          <Modal.ModalHeader title="카드사 선택" />
          <Modal.ModalContent></Modal.ModalContent>
          <Modal.ModalFooter></Modal.ModalFooter>
        </Modal>
      </div>
    );
  },
};

export const Desktop: Story = {
  args: {
    size: 'large',
    isOpen: true,
    position: 'center',
    device: 'desktop',
  },

  render: ({ ...args }) => {
    return (
      <div className="desktop">
        <Modal {...args}>
          <Modal.ModalHeader title="카드사 선택" />
          <Modal.ModalContent></Modal.ModalContent>
          <Modal.ModalFooter></Modal.ModalFooter>
        </Modal>
      </div>
    );
  },
};

export const ModalPositionBottom: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
  },
};

export const AcceptTermsModalWithoutCloseButton: Story = {
  args: Mobile.args,

  render: ({ ...args }) => {
    return (
      <div className="desktop">
        <Modal {...args}>
          <Modal.ModalHeader title="약관에 동의해 주세요" />
          <Modal.ModalContent style={{ margin: '12px 0px 0px 0px' }}>
            <div style={{ height: '300px', width: '100%', backgroundColor: 'black' }} />
          </Modal.ModalContent>
          <Modal.ModalFooter direction="column">
            <Modal.ModalButton onClick={args.onToggle} color="primary">
              동의하고 저장하기
            </Modal.ModalButton>
            <Modal.ModalButton onClick={args.onToggle} color="secondary">
              닫기
            </Modal.ModalButton>
          </Modal.ModalFooter>
        </Modal>
      </div>
    );
  },
};

export const AcceptTermsModalWithCloseButton: Story = {
  args: Mobile.args,

  render: ({ ...args }) => {
    return (
      <div className="desktop">
        <Modal {...args}>
          <Modal.ModalHeader title="약관에 동의해 주세요">
            <Modal.ModalCloseButton onClick={args.onToggle} />
          </Modal.ModalHeader>
          <Modal.ModalContent style={{ margin: '12px 0px' }}>
            <div style={{ height: '300px', width: '100%', backgroundColor: 'black' }} />
          </Modal.ModalContent>
          <Modal.ModalFooter direction="row">
            <Modal.ModalButton onClick={args.onToggle} color="primary">
              동의하고 저장하기
            </Modal.ModalButton>
          </Modal.ModalFooter>
        </Modal>
      </div>
    );
  },
};

export const CardSelectModal: Story = {
  args: Mobile.args,

  render: ({ ...args }) => {
    return (
      <div className="desktop">
        <Modal {...args}>
          <Modal.ModalHeader title="약관에 동의해 주세요">
            <Modal.ModalCloseButton onClick={args.onToggle} />
          </Modal.ModalHeader>
          <Modal.ModalContent style={{ height: '150px', margin: '12px 0px' }}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'black' }} />
          </Modal.ModalContent>
        </Modal>
      </div>
    );
  },
};

export const ModalWithDirectionRow: Story = {
  args: Mobile.args,

  render: ({ ...args }) => {
    return (
      <div className="desktop">
        <Modal {...args}>
          <Modal.ModalHeader title="약관에 동의해 주세요" />
          <Modal.ModalContent style={{ margin: '12px 0px' }}>
            <div style={{ height: '300px', width: '100%', backgroundColor: 'black' }} />
          </Modal.ModalContent>
          <Modal.ModalFooter direction="row">
            <Modal.ModalButton onClick={args.onToggle} color="primary">
              동의하고 저장하기
            </Modal.ModalButton>
            <Modal.ModalButton onClick={args.onToggle} color="secondary">
              닫기
            </Modal.ModalButton>
          </Modal.ModalFooter>
        </Modal>
      </div>
    );
  },
};
