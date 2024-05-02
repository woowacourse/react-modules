import React from 'react';
import '../index.css';
import 'nakta-react-payments-components/dist/style.css';
import { Modal } from 'nakta-react-payments-components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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

export const IncludeCloseButton: Story = {
  args: {
    isCloseButton: true,
    onClose: fn(),
    position: 'center',
    title: '제목',
    children: <></>,
  },
};

export const ExcludeCloseButton: Story = {
  args: {
    isCloseButton: false,
    onClose: fn(),
    position: 'center',
    title: '제목',
    children: <></>,
  },
};
