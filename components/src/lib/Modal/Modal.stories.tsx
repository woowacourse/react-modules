import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Modal from './Modal';

import { MODAL_POSITION_MAP } from './Modal.constant';

const meta = {
  title: 'Base/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '페이지 위에 표시되는 대화 상자 창',
      },
    },
  },
  argTypes: {
    children: {},
    isOpen: {
      control: 'boolean',
      description: 'modal의 여는 상태',
    },
    onToggle: {
      description: 'modal을 열고 닫기 위한 핸들러 함수',
    },
    position: {
      control: 'radio',
      options: Object.values(MODAL_POSITION_MAP),
      description: '모달의 위치',
      table: {
        type: { summary: 'ModalPosition' },
      },
    },
  },
  args: {
    onToggle: fn(),
  },

  render: ({ ...args }) => {
    return (
      <div className="app">
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

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'modal이 화면의 center에 나타날 때',
      },
    },
  },
  args: {
    isOpen: true,
    position: 'center',
    size: 'large',
  },
};

export const Bottom: Story = {
  parameters: {
    docs: {
      description: {
        story: 'modal이 화면의 bottom에 나타날 때',
      },
    },
  },
  args: {
    isOpen: true,
    position: 'bottom',
    size: 'large',
  },
};

export const OverflowContentModal: Story = {
  args: Default.args,
  parameters: {
    docs: {
      description: {
        story: 'modal content가 modal viewport를 초과하는 case',
      },
    },
  },
  render: ({ ...args }) => {
    return (
      <div className="app">
        <Modal {...args}>
          <Modal.ModalHeader title="카드사 선택"></Modal.ModalHeader>
          <Modal.ModalContent>
            <div style={{ margin: '12px 0px', backgroundColor: 'slategrey', width: '1000px', height: '300px' }}>
              Box
            </div>
          </Modal.ModalContent>
          <Modal.ModalFooter></Modal.ModalFooter>
        </Modal>
      </div>
    );
  },
};

export const OverflowFooterModal: Story = {
  args: Default.args,
  parameters: {
    docs: {
      description: {
        story: 'modal footer가 modal viewport를 초과하는 case',
      },
    },
  },
  render: ({ ...args }) => {
    return (
      <div className="app">
        <Modal {...args}>
          <Modal.ModalHeader title="카드사 선택"></Modal.ModalHeader>
          <Modal.ModalContent>
            <div style={{ backgroundColor: 'red', width: '100%', height: '30px' }}>Content</div>
          </Modal.ModalContent>
          <Modal.ModalFooter>
            <div style={{ backgroundColor: 'slategrey', width: '1000px', height: '300px' }}>Footer</div>
          </Modal.ModalFooter>
        </Modal>
      </div>
    );
  },
};
