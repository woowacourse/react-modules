import { Meta, StoryObj } from '@storybook/react';
import PromptModal from './PromptModal';
import { MODAL_POSITION_MAP, MODAL_SIZE_MAP } from '../Modal/Modal.constant';
import { fn } from '@storybook/test';

const meta = {
  title: 'Modal/PromptModal',
  component: PromptModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자에게 메시지를 전달하고 확인 버튼과 취소 버튼이 있는 모달',
      },
    },
  },
  argTypes: {
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
    size: {
      control: 'radio',
      options: Object.values(MODAL_SIZE_MAP),
      description: '모달의 사이즈',
      table: {
        type: { summary: 'ModalSize' },
      },
    },
    title: { description: 'ConfirmModal의 제목' },
  },
  args: {
    isOpen: true,
    onToggle: fn(),
    title: '쿠폰 번호를 입력해주세요.',
    value: '',
    onChange: fn(),
    onSubmit: fn(),
    confirmButtonLabel: '확인',
    cancelButtonLabel: '취소'
  },
  render: ({ ...args }) => {
    return (
      <div className="app">
        <PromptModal {...args} />
      </div>
    );
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LargeCentered: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PromptModal의 size가 large이고 position이 center일 때',
      },
    },
  },
  args: {
    size: 'large',
    position: 'center',
  },
};
LargeCentered.storyName = 'Large Modal at Center';

export const MediumCentered: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PromptModal의 size가 Medium이고 position이 center일 때',
      },
    },
  },
  args: {
    size: 'medium',
    position: 'center',
  },
};
MediumCentered.storyName = 'Medium Modal at Center';

export const SmallCentered: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PromptModal의 size가 Small이고 position이 center일 때',
      },
    },
  },
  args: {
    size: 'small',
    position: 'center',
  },
};
SmallCentered.storyName = 'Small Modal at Center';

export const LargeBottomed: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PromptModal의 size가 large이고 position이 bottom 때',
      },
    },
  },
  args: {
    size: 'large',
    position: 'bottom',
  },
};
LargeBottomed.storyName = 'Large Modal at Bottom';

export const MediumBottomed: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PromptModal의 size가 medium이고 position이 bottom 때',
      },
    },
  },
  args: {
    size: 'medium',
    position: 'bottom',
  },
};
MediumBottomed.storyName = 'Medium Modal at Bottom';

export const SmallBottomed: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PromptModal의 size가 small이고 position이 bottom 때',
      },
    },
  },
  args: {
    size: 'small',
    position: 'bottom',
  },
};
SmallBottomed.storyName = 'Small Modal at Bottom';
