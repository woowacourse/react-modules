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
    existCloseButton: true,
    onClose: fn(),
    position: 'center',
    title: '제목',
    children: <></>,
  },
};

export const Bottom: Story = {
  args: {
    existCloseButton: true,
    onClose: fn(),
    position: 'bottom',
    title: '제목',
    children: <></>,
  },
};

export const IncludeCloseButton: Story = {
  args: {
    existCloseButton: true,
    onClose: fn(),
    position: 'center',
    title: '제목',
    children: <></>,
  },
};

export const ExcludeCloseButton: Story = {
  args: {
    existCloseButton: false,
    onClose: fn(),
    position: 'center',
    title: '제목',
    children: <></>,
  },
};

export const BackdropClickWithoutClose: Story = {
  args: {
    existCloseButton: false,
    closeOnBackdropClick: false,
    onClose: fn(),
    position: 'center',
    title: '제목',
    children: <></>,
  },
};
