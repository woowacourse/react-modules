/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../lib';
import React, { useReducer } from 'react';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import AlertModal from '../components/AlertModal';
import ConfirmModal from '../components/ConfirmModal';
import PromptModal from '../components/PromptModal';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'desktop',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultModal = ({ ...args }) => {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, true);

  return (
    <Modal {...args} isOpen={isOpen}>
      <Modal.Dimmed onDimmedClick={() => toggleIsOpen()} />
      <Modal.Header>
        <Modal.Title title="마루" />
        <Modal.CloseIcon onClose={() => toggleIsOpen()} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer>
        <Modal.ConfirmButton label="확인" onConfirm={() => toggleIsOpen()} />
        <Modal.CloseButton label="닫기" onClose={() => toggleIsOpen()} />
      </Modal.Footer>
    </Modal>
  );
};

export const 모달_열림_center: Story = {
  args: {
    isOpen: true,
    position: 'center',
  },
  render: args => <DefaultModal {...args} />,
};

export const 모달_열림_center_animation: Story = {
  args: {
    isOpen: true,
    position: 'center',
    isAnimation: true,
    duration: 500,
  },
  render: args => <DefaultModal {...args} />,
};

export const 모달_열림_bottom: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
  },
  render: args => <DefaultModal {...args} />,
};

export const 모달_열림_bottom_animation: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    isAnimation: true,
    duration: 500,
  },
  render: args => <DefaultModal {...args} />,
};

export const 모달_버튼_1개: Story = {
  args: {
    isOpen: true,
  },
  render: args => (
    <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달 버튼 1개" />
        <Modal.CloseIcon onClose={() => ''} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer>
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
  ),
};

export const 모달_버튼_배치_ROW: Story = {
  args: {
    isOpen: true,
  },
  render: args => (
    <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_버튼_배치_ROW" />
        <Modal.CloseIcon onClose={() => ''} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer position="row">
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
  ),
};

export const 모달_버튼_배치_ROW_REVERSE: Story = {
  args: {
    isOpen: true,
  },
  render: args => (
    <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_버튼_배치_ROW_REVERSE" />
        <Modal.CloseIcon onClose={() => ''} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer position="row-reverse">
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
  ),
};

export const 모달_버튼_배치_COLUMN_REVERSE: Story = {
  args: {
    isOpen: true,
  },
  render: args => (
    <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_버튼_배치_COLUMN_REVERSE" />
        <Modal.CloseIcon onClose={() => ''} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer position="column-reverse">
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
  ),
};

export const 모달_닫기_아이콘_숨김: Story = {
  args: {
    isOpen: true,
  },
  render: args => (
    <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_닫기_아이콘_숨김" />
        <Modal.CloseIcon onClose={() => ''} showCloseIcon={false} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer>
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
  ),
};

export const 모달_닫기_아이콘_커스텀: Story = {
  args: {
    isOpen: true,
  },
  render: args => (
    <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_닫기_아이콘_커스텀" />
        <Modal.CloseIcon
          onClose={() => ''}
          customCloseIcon="https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true"
        />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer>
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
  ),
};

export const 모달_닫기_아이콘_커스텀_오류: Story = {
  args: {
    isOpen: true,
  },
  render: args => (
    <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_닫기_아이콘_커스텀_오류" />
        <Modal.CloseIcon onClose={() => ''} customCloseIcon="잘못된 이미지 경로를 넣는다면?" />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer>
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
  ),
};

export const 모달_Alert: Story = {
  args: {
    isOpen: true,
  },
  render: args => <AlertModal toggleIsOpen={() => ''} {...args} />,
};

export const 모달_Confirm: Story = {
  args: {
    isOpen: true,
  },
  render: args => <ConfirmModal toggleIsOpen={() => ''} {...args} />,
};

export const 모달_Prompt: Story = {
  args: {
    isOpen: true,
  },
  render: args => <PromptModal toggleIsOpen={() => ''} {...args} />,
};

export const 모달_모바일_반응형: Story = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'iphone6',
    },
  },
  args: {
    isOpen: true,
  },
  render: args => <DefaultModal {...args} />,
};

export const 모달_태블릿_반응형: Story = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'tablet',
    },
  },
  args: {
    isOpen: true,
  },
  render: args => <DefaultModal {...args} />,
};
