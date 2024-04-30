import React from 'react';
import '../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Modal from '../lib/Modal';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    isCloseButton: true,
    onClose: fn(),
    position: 'center',
    title: '제목',
    children: <></>,
  },
};

export const Bottom: Story = {
  args: {
    isCloseButton: true,
    onClose: fn(),
    position: 'bottom',
    title: '제목',
    children: <></>,
  },
};
