import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Modal } from '../lib/index';
import styled from 'styled-components';
import '../index.css';

const BackGroundStyle = styled.div`
  background-color: #000000;
  height: 100vh;
`;

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: 'select',
      options: [true, false],
      default: true,
    },
    position: {
      control: 'select',
      options: ['center', 'bottom'],
      default: 'center',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      default: 'small',
    },
  },
};

export default meta;

const Template: StoryObj<typeof meta.args> = (args) => {
  return (
    <BackGroundStyle>
      <Modal {...args}>
        <Modal.Header {...args} />
        {args.category !== 'prompt' && <Modal.SubTitle {...args} />}
        {args.category === 'prompt' && <Modal.Input {...args} />}
        <Modal.Button {...args} />
      </Modal>
    </BackGroundStyle>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: 'center',
  size: 'small',
  isOpen: true,
  closeOption: 'button',
  title: '아이디를 입력해 주세요.',
  subTitle: '아이디는 필수로 입력해야 합니다.',
  category: 'alert',
  toggleModal: action('toggleModal'),
  handleCloseButton: action('handleCloseButton'),
};

export const Confirm = Template.bind({});
Confirm.args = {
  ...Default.args,
  category: 'confirm',
};

export const Prompt = Template.bind({});
Prompt.args = {
  ...Default.args,
  category: 'prompt',
};
