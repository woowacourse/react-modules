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
  },
};

export const AcceptTermsModalWithoutCloseButton: Story = {
  args: Default.args,
  parameters: {
    docs: {
      description: {
        story: 'footer 내 button만 존재하는 case',
      },
    },
  },
  render: ({ ...args }) => {
    return (
      <div className="app">
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
  args: Default.args,
  parameters: {
    docs: {
      description: {
        story: 'header 내 close button과 footer 내 button이 동시에 있는 case',
      },
    },
  },
  render: ({ ...args }) => {
    return (
      <div className="app">
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
  args: Default.args,
  parameters: {
    docs: {
      description: {
        story: 'header 내 close button만 존재하는 case',
      },
    },
  },
  render: ({ ...args }) => {
    return (
      <div className="app">
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
  args: Default.args,
  parameters: {
    docs: {
      description: {
        story: 'modal footer의 flex direction이 row인 경우',
      },
    },
  },
  render: ({ ...args }) => {
    return (
      <div className="app">
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
