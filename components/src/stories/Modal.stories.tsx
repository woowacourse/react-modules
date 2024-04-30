/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal';
import React from 'react';

const meta = {
  title: 'Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 모달이_열림_center: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
  },
};

export const 모달이_열림_bottom: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'bottom',
    onClose: () => console.log('마루'),
  },
};

export const 모달이_닫힘: Story = {
  args: {
    isOpen: false,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
  },
};

export const 모달_버튼_1개: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    closeButton: <button style={{ width: '100%' }}>쿠키</button>,
  },
};

export const 모달_버튼_2개_ROW: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    buttonPosition: 'row',
    closeButton: <button style={{ width: '100%' }}>쿠키</button>,
    confirmButton: <button style={{ width: '100%' }}>마루</button>,
  },
};

export const 모달_버튼_2개_ROW_REVERSE: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    buttonPosition: 'row-reverse',
    closeButton: <button style={{ width: '100%' }}>쿠키</button>,
    confirmButton: <button style={{ width: '100%' }}>마루</button>,
  },
};

export const 모달_버튼_2개_COLUMN: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    buttonPosition: 'column',
    closeButton: <button style={{ width: '100%' }}>쿠키</button>,
    confirmButton: <button style={{ width: '100%' }}>마루</button>,
  },
};

export const 모달_버튼_2개_COLUMN_REVERSE: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    buttonPosition: 'column-reverse',
    closeButton: <button style={{ width: '100%' }}>쿠키</button>,
    confirmButton: <button style={{ width: '100%' }}>마루</button>,
  },
};

export const 모달_닫기_아이콘_숨김: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    hideCloseIcon: true,
    buttonPosition: 'row-reverse',
    closeButton: <button style={{ width: '100%' }}>쿠키</button>,
    confirmButton: <button style={{ width: '100%' }}>마루</button>,
  },
};

export const 모달_닫기_아이콘_커스텀: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    customCloseIcon:
      'https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true',
    buttonPosition: 'row-reverse',
    closeButton: <button style={{ width: '100%' }}>쿠키</button>,
    confirmButton: <button style={{ width: '100%' }}>마루</button>,
  },
};

export const 모달_닫기_아이콘_커스텀_오류: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    customCloseIcon: '이미지',
    buttonPosition: 'row-reverse',
    closeButton: <button style={{ width: '100%' }}>쿠키</button>,
    confirmButton: <button style={{ width: '100%' }}>마루</button>,
  },
};

export const 모달_컨텐츠: Story = {
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    content: <div>안녕 나는 마루랑 쿠키야</div>,
    customCloseIcon: '이미지',
    buttonPosition: 'row-reverse',
    closeButton: <button style={{ width: '100%' }}>쿠키</button>,
    confirmButton: <button style={{ width: '100%' }}>마루</button>,
  },
};
