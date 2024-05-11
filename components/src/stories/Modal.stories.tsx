import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal, useModal } from '../lib/index';
import { action } from '@storybook/addon-actions';
import Input from '../lib/components/common/Input';

import '../styles/index.css';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    closeIcon: {
      control: 'boolean',
    },
    $size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    $position: {
      control: { type: 'radio', options: ['center', 'bottom'] },
    },

    children: { table: { disable: true } },
  },
};

export default meta;

const DefaultModal: StoryObj<typeof meta.args> = (args) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      {isModalOpen && (
        <Modal
          $size={args.$size}
          $position={args.$position}
          onCloseModal={closeModal}
        >
          <Modal.Header
            title={args.title}
            closeIcon={args.closeIcon}
            onCloseModal={closeModal}
          ></Modal.Header>
          <Modal.Content message={args.message} />
          <Modal.Footer>
            <Modal.Button
              type="button"
              $size="small"
              onButtonClick={closeModal}
            >
              닫기
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

const DefaultAlertModal: StoryObj<typeof meta.args> = (args) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      {isModalOpen && (
        <Modal
          $size={args.$size}
          $position={args.$position}
          onCloseModal={closeModal}
        >
          <Modal.Header
            title={args.title}
            closeIcon={args.closeIcon}
            onCloseModal={closeModal}
          ></Modal.Header>
          <Modal.Content message={args.message} />
          <Modal.Footer>
            <Modal.Button
              type="button"
              $size="small"
              onButtonClick={closeModal}
            >
              확인
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

const DefaultConfirmModal: StoryObj<typeof meta.args> = (args) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      {isModalOpen && (
        <Modal
          $size={args.$size}
          $position={args.$position}
          onCloseModal={closeModal}
        >
          <Modal.Header
            title={args.title}
            closeIcon={args.closeIcon}
            onCloseModal={closeModal}
          ></Modal.Header>
          <Modal.Content message={args.message} />
          <Modal.Footer>
            <Modal.Button
              type="button"
              $size="small"
              $backgroundColor={args.$backgroundColor}
              $color={args.$color}
              onButtonClick={closeModal}
            >
              취소
            </Modal.Button>
            <Modal.Button
              type="button"
              $size="small"
              onButtonClick={closeModal}
            >
              확인
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export const SmallModal = DefaultModal.bind({});
SmallModal.args = {
  title: '작은 모달',
  message: '이것은 작은 사이즈의 모달입니다.',
  closeIcon: true,
  $size: 'small',
  $position: 'center',
};
SmallModal.argTypes = {
  $size: { table: { disable: true } },
};

export const MediumModal = DefaultModal.bind({});
MediumModal.args = {
  title: '중간 모달',
  message: '이것은 중간 사이즈의 모달입니다.',
  closeIcon: true,
  $size: 'medium',
  $position: 'center',
};
MediumModal.argTypes = {
  $size: { table: { disable: true } },
};

export const LargeModal = DefaultModal.bind({});
LargeModal.args = {
  title: '큰 모달',
  message: '이것은 큰 사이즈의 모달입니다.',
  closeIcon: true,
  $size: 'large',
  $position: 'center',
};
LargeModal.argTypes = {
  $size: { table: { disable: true } },
};

export const IconCloseModal = DefaultModal.bind({});
IconCloseModal.args = {
  title: '아이콘으로 닫기',
  message: '아이콘을 클릭하면 모달이 닫힙니다.',
  closeIcon: true,
  $position: 'center',
};

export const ButtonCloseModal = DefaultModal.bind({});
ButtonCloseModal.args = {
  title: '버튼으로 닫기',
  message: '닫기 버튼을 클릭하면 모달이 닫힙니다.',
  closeIcon: false,
  $size: 'medium',
  $position: 'center',
};

export const AlertModal = DefaultAlertModal.bind({});
AlertModal.args = {
  title: '확인(Alert) 모달',
  message: '사용자에게 메시지를 전달하고 확인 버튼만 제공',
  closeIcon: false,
  $size: 'medium',
  $position: 'center',
};

export const ConfirmModal = DefaultConfirmModal.bind({});
ConfirmModal.args = {
  title: '확인/취소(Confirm) 모달',
  message: '사용자에게 선택지를 제공하고 확인 및 취소 버튼을 제공',
  closeIcon: false,
  $size: 'medium',
  $position: 'center',
  $backgroundColor: '#FFFFFF',
  $color: '#000000',
};
