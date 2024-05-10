import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';
import { ModalTitle } from '../App';
import { PromptModal } from '../lib';
import { BASIC_BORDER_RADIUS } from '../lib/constants/modal';

const meta: Meta<typeof PromptModal> = {
  title: 'Modal',
  component: PromptModal,
  argTypes: {
    setOpenModal: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PromptModalSample: Story = {
  args: {
    openModal: true,
    setOpenModal: () => {},
    title: <ModalTitle>alert modal</ModalTitle>,
    label: 'prompt modal',
    input: {
      attribute: {
        className: 'input test',
      },
      props: {
        onChange: (e) => {
          console.log(e.target.value);
        },
      },
    },
    buttonContainerJustifyContent: 'space-between',
    confirmButton: {
      contents: '확인',
      style: { backgroundColor: 'black', color: '#ffff', borderRadius: BASIC_BORDER_RADIUS },
      extraClickAction: () => alert('확인'),
    },
    cancelButton: {
      contents: '취소',
      style: { backgroundColor: '#ffff', color: 'black', borderRadius: BASIC_BORDER_RADIUS },
    },
  },
};
