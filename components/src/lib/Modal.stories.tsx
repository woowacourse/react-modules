import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    position: {
      control: 'select',
      options: ['center', 'bottom'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    children: {
      control: 'text',
      name: 'content',
    },
    onClose: { action: 'onClose' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;
export const Center: Story = {
  args: {
    position: 'center',
    title: '기본 모달',
    children: '모달 내용입니다.',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>모달 열기</button>
        {isOpen && (
          <Modal
            {...args}
            onClose={() => {
              action('onClose')();
              setIsOpen(false);
            }}
          />
        )}
      </>
    );
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    title: '하단 모달',
    children: '하단 모달 내용입니다.',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>하단 모달 열기</button>
        {isOpen && (
          <Modal
            {...args}
            onClose={() => {
              action('onClose')();
              setIsOpen(false);
            }}
          />
        )}
      </>
    );
  },
};

export const NestedModal: Story = {
  render: () => {
    const [isParentModalOpen, setIsParentModalOpen] = useState(false);
    const [isChildModalOpen, setIsChildModalOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsParentModalOpen(true)}>첫 번째 모달 열기</button>

        {isParentModalOpen && (
          <Modal
            position="center"
            title="첫 번째 모달"
            onClose={() => {
              action('첫 번째 모달 닫기')();
              setIsParentModalOpen(false);
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '16px' }}>
              <p>첫 번째 모달 내용</p>
              <button
                onClick={() => setIsChildModalOpen(true)}
                style={{
                  padding: '8px 12px',
                  background: '#007BFF',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                두 번째 모달 열기
              </button>
            </div>
          </Modal>
        )}

        {isChildModalOpen && (
          <Modal
            position="center"
            title="두 번째 모달"
            width="280px"
            height="180px"
            onClose={() => {
              action('두 번째 모달 닫기')();
              setIsChildModalOpen(false);
            }}
          >
            <div style={{ padding: '16px' }}>
              <p>첫 번째 모달 위에 열린 두 번째 모달</p>
            </div>
          </Modal>
        )}
      </>
    );
  },
};
