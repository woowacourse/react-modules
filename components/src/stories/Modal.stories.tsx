/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../lib/index';
import React from 'react';

const meta = {
  title: 'Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 모달이_열림_center: Story = {
  args: {
    open: true,
    children: <Modal.Header title="마루" onClose={() => console.log('마루')} />,
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달이_열림_bottom: Story = {
  args: {
    open: true,
    children: <Modal.Header title="마루" onClose={() => console.log('마루')} />,
    type: 'drawer',
    onClose: () => console.log('마루'),
  },
};

export const 모달이_닫힘: Story = {
  args: {
    open: false,
    children: <Modal.Header title="마루" onClose={() => console.log('마루')} />,
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달_버튼_1개: Story = {
  args: {
    open: true,
    children: (
      <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer closeButton={{ hide: true }} />
      </>
    ),
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달_버튼_2개_ROW: Story = {
  args: {
    open: true,
    children: (
      <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer buttonPosition="row" />
      </>
    ),
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달_버튼_2개_ROW_REVERSE: Story = {
  args: {
    open: true,
    children: (
      <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer buttonPosition="row-reverse" />
      </>
    ),
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달_버튼_2개_COLUMN: Story = {
  args: {
    open: true,
    children: (
      <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer buttonPosition="column" />
      </>
    ),
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달_버튼_2개_COLUMN_REVERSE: Story = {
  args: {
    open: true,
    children: (
      <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer buttonPosition="column-reverse" />
      </>
    ),
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달_닫기_아이콘_숨김: Story = {
  args: {
    open: true,
    children: (
      <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} hideCloseIcon />
        <Modal.Footer buttonPosition="column-reverse" />
      </>
    ),
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달_닫기_아이콘_커스텀: Story = {
  args: {
    open: true,
    children: (
      <>
        <Modal.Header
          title="마루"
          onClose={() => console.log('마루')}
          customCloseIcon={
            'https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true'
          }
        />
        <Modal.Footer buttonPosition="column-reverse" />
      </>
    ),
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달_닫기_아이콘_커스텀_오류: Story = {
  args: {
    open: true,
    children: (
      <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} customCloseIcon={'이미지'} />
        <Modal.Footer buttonPosition="column-reverse" />
      </>
    ),
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};

export const 모달_컨텐츠: Story = {
  args: {
    open: true,
    children: (
      <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Content>
          <div>안녕 마루와 쿠키의 나이스 모달</div>
        </Modal.Content>
        <Modal.Footer buttonPosition="column-reverse" />
      </>
    ),
    type: 'dialog',
    onClose: () => console.log('마루'),
  },
};
