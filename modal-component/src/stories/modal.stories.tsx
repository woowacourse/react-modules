import type { Meta } from '@storybook/react';
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

export const Alert = () => {
  return (
    <>
      <Modal isOpen={true} onClose={() => {}} position="center" size="medium">
        <Modal.Title title="아이디를 입력해주세요" />
        <Modal.Contents>
          <p>아이디는 필수로 입력해야 합니다</p>
        </Modal.Contents>
        <Modal.ButtonContainer position="right">
          <Modal.Button
            size="small"
            title="확인"
            backgroundColor="#000000"
            textColor="#ffffff"
            onClick={() => {
              console.log('확인 버튼 클릭!');
            }}
          />
        </Modal.ButtonContainer>
        <Modal.CloseButton />
      </Modal>
    </>
  );
};

export const Confirm = () => {
  return (
    <>
      <Modal isOpen={true} onClose={() => {}} position="center" size="medium">
        <Modal.Title title="카드를 삭제하시겠습니까?" />
        <Modal.Contents>
          <p>삭제하면 복구할 수 없습니다</p>
        </Modal.Contents>
        <Modal.ButtonContainer position="right">
          <Modal.Button
            size="small"
            title="취소"
            backgroundColor="#ffffff"
            textColor="#000000"
            border="1px solid #000000"
            onClick={() => {
              console.log('취소 버튼 클릭!');
            }}
          />
          <Modal.Button
            size="small"
            title="확인"
            textColor="#ffffff"
            backgroundColor="#000000"
            onClick={() => {
              console.log('확인 버튼 클릭!');
            }}
          />
        </Modal.ButtonContainer>
        <Modal.CloseButton />
      </Modal>
    </>
  );
};

export const Input = () => {
  return (
    <>
      <Modal isOpen={true} onClose={() => {}} position="center" size="medium">
        <Modal.Title title="아이디를 입력해주세요" />
        <Modal.Contents>
          <Modal.Input placeholder="아이디를 입력하세요" />
        </Modal.Contents>
        <Modal.ButtonContainer position="right">
          <Modal.Button
            size="small"
            title="확인"
            backgroundColor="#000000"
            textColor="#ffffff"
            onClick={() => {
              console.log('확인 버튼 클릭!');
            }}
          />
        </Modal.ButtonContainer>
        <Modal.CloseButton />
      </Modal>
    </>
  );
};

export const WithControls = (args: any) => {
  return (
    <Modal {...args}>
      <Modal.Title title="사이즈 조절 가능" />
      <Modal.Contents>
        <p>Storybook Controls에서 size를 바꿔보세요.</p>
      </Modal.Contents>
      <Modal.ButtonContainer position="right">
        <Modal.Button title="확인" backgroundColor="#000" textColor="#fff" />
      </Modal.ButtonContainer>
      <Modal.CloseButton />
    </Modal>
  );
};

WithControls.args = {
  isOpen: true,
  size: 'medium',
  position: 'center',
  onClose: () => {},
};

WithControls.argTypes = {
  size: {
    control: 'radio',
    options: ['small', 'medium', 'large'],
  },
};
