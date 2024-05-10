import '../../../index.css';
import React, { useState } from 'react';
import { AlertModal, Modal } from '../../';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof AlertModal> = {
  title: 'AlertModal',
  component: AlertModal,
  decorators: [
    (Story) => (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'center',
  },
};

export default meta;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => setIsOpen(false);
  const onConfirm = () => {
    console.log('confirm');
  };

  return (
    <>
      <Modal.Button onClick={() => setIsOpen(true)} size='small' backgroundColor='primary'>
        모달열기
      </Modal.Button>
      <AlertModal {...args} isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: 'center',
  size: 'medium',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: true,
  isOpen: true,
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: 'bottom',
  size: 'medium',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: true,
  isOpen: true,
};

export const Center = Template.bind({});
Center.args = {
  position: 'center',
  size: 'medium',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: true,
  isOpen: true,
};

export const Small = Template.bind({});
Small.args = {
  position: 'center',
  size: 'small',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: true,
  isOpen: true,
};

export const Medium = Template.bind({});
Medium.args = {
  position: 'center',
  size: 'medium',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: true,
  isOpen: true,
};

export const Large = Template.bind({});
Large.args = {
  position: 'center',
  size: 'large',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: true,
  isOpen: true,
};

export const ExistCloseButton = Template.bind({});
ExistCloseButton.args = {
  position: 'center',
  size: 'medium',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: true,
};

export const ExcludeCloseButton = Template.bind({});
ExcludeCloseButton.args = {
  position: 'center',
  size: 'medium',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: false,
};
