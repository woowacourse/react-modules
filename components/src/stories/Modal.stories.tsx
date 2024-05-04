import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal, useModal } from '../lib/index';
import CardCompanySelector from '../components/CardCompanySelector';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    position: {
      control: { type: 'select', options: ['center', 'bottom'] },
    },
    closeOption: {
      control: { type: 'select', options: ['icon', 'button'] },
    },
    title: { control: 'text' },
  },
};

export default meta;

const Template: StoryObj<typeof meta.args> = (args) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      {isModalOpen && (
        <Modal {...args} closeModal={closeModal}>
          <CardCompanySelector />
        </Modal>
      )}
    </>
  );
};

export const IconCloseModal = Template.bind({});
IconCloseModal.args = {
  title: '아이콘으로 닫기',
  position: 'center',
  closeOption: 'icon',
};

export const ButtonCloseModal = Template.bind({});
ButtonCloseModal.args = {
  title: '버튼으로 닫기',
  position: 'bottom',
  closeOption: 'button',
};
