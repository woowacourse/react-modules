import { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import Modal from './Modal';
import CloseImage from '../../assets/close.png';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '모달 컴포넌트',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      default: true,
      description: '모달의 상태',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onClose: {
      description: 'modal을 열고 닫기 위한 핸들러 함수',
    },
    style: {
      control: 'object',
      table: {
        type: {
          summary: 'object',
        },
      },
      description: '모달 스타일을 자유롭게 정의할 수 있습니다.',
    },
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'center'],
      description:
        '모달 위치를 페이지 상단, 중앙, 하단으로 선택할 수 있습니다.',
    },
  },
  args: {
    onClose: fn(),
  },
  render: ({ style, ...args }) => {
    return (
      <Modal style={style} {...args}>
        <Modal.Content style={style}>
          <span>지그😊 기본 모달이에요.</span>
        </Modal.Content>
        <Modal.TextButton onClose={args.onClose}>확인</Modal.TextButton>
      </Modal>
    );
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const 기본: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 모달',
      },
    },
  },
  args: {
    isOpen: true,
    position: 'center',
  },
};

export const 이미지_버튼이_있는_모달: Story = {
  args: {
    isOpen: true,
    position: 'center',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '이미지 버튼이 있는 모달',
      },
    },
  },

  render: (args) => (
    <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>
      <Modal.Header>
        <Modal.Title>지그🥰</Modal.Title>
        <Modal.IconButton onClose={args.onClose} src={CloseImage} />
      </Modal.Header>
      <Modal.Content>
        <span>이미지 버튼이 있는 모달이에요.</span>
      </Modal.Content>
    </Modal>
  ),
};

export const 텍스트_버튼이_있는_모달: Story = {
  args: {
    isOpen: true,
    position: 'center',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '텍스트 버튼이 있는 모달',
      },
    },
  },

  render: (args) => (
    <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>
      <Modal.Header>
        <Modal.Title>지그😇</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <span>텍스트 버튼이 있는 모달이에요.</span>
      </Modal.Content>
      <Modal.Footer>
        <Modal.TextButton onClose={args.onClose}>확인</Modal.TextButton>
      </Modal.Footer>
    </Modal>
  ),
};

export const 이미지_버튼과_텍스트_버튼이_있는_모달: Story = {
  args: {
    isOpen: true,
    position: 'center',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '이미지 버튼과 텍스트 버튼이 있는 모달',
      },
    },
  },

  render: (args) => (
    <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>
      <Modal.Header>
        <Modal.Title>지그🌞</Modal.Title>
        <Modal.IconButton onClose={args.onClose} src={CloseImage} />
      </Modal.Header>
      <Modal.Content>
        <span>이미지 버튼과 텍스트 버튼이 있는 모달이에요.</span>
      </Modal.Content>
      <Modal.Footer>
        <Modal.TextButton onClose={args.onClose}>확인</Modal.TextButton>
      </Modal.Footer>
    </Modal>
  ),
};
