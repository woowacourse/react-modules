import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};
export default meta;

export const Default = () => {
  return (
    <>
      <Modal isOpen={true} onClose={() => {}}>
        <Modal.Title title="타이틀입니다" />
        <Modal.Contents>
          <p>Storybook 내부 내용</p>
        </Modal.Contents>
        <Modal.CloseButton />
      </Modal>
    </>
  );
};
