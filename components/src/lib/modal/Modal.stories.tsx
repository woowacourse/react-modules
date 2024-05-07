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

// step1 모달
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

// step2 모달
export const AlertModal: Story = {
  args: {
    isOpen: true,
    position: 'center',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '사용자에게 메시지를 전달하고 확인 버튼만 제공',
      },
    },
  },

  render: (args) => (
    <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>
      <Modal.Header>
        <Modal.Title>아이디를 입력해 주세요.</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <span>아이디는 필수로 입력해야 합니다.</span>
      </Modal.Content>
      <Modal.Footer buttonPosition='right'>
        <Modal.TextButton onClose={args.onClose} buttonSize={'50px'}>
          확인
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  ),
};

export const ConfirmModal: Story = {
  args: {
    isOpen: true,
    position: 'center',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '사용자에게 선택지를 제공하고 확인 및 취소 버튼 제공',
      },
    },
  },

  render: (args) => (
    <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>
      <Modal.Header>
        <Modal.Title>카드를 삭제하시겠습니까?</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <span>삭제하면 복구하실 수 없습니다.</span>
      </Modal.Content>
      <Modal.Footer buttonPosition='right' buttonGap='10px'>
        <Modal.TextButton onClose={args.onClose} buttonSize='50px'>
          취소
        </Modal.TextButton>
        <Modal.TextButton
          onClose={args.onClose}
          buttonSize='50px'
          backgroudColor='#333333'
          fontColor='#ffffff'
        >
          확인
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  ),
};

export const PromptModal: Story = {
  args: {
    isOpen: true,
    position: 'center',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          '사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/취소 버튼 제공',
      },
    },
  },

  render: (args) => (
    <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>
      <Modal.Header>
        <Modal.Title>쿠폰 번호를 입력해 주세요.</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <Modal.Input></Modal.Input>
      </Modal.Content>
      <Modal.Footer buttonPosition='right' buttonGap='10px'>
        <Modal.TextButton onClose={args.onClose} buttonSize='50px'>
          취소
        </Modal.TextButton>
        <Modal.TextButton
          onClose={args.onClose}
          buttonSize='50px'
          backgroudColor='#333333'
          fontColor='#ffffff'
        >
          확인
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  ),
};
