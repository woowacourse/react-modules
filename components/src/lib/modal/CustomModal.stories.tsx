import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from '@emotion/styled';
import { Modal } from '..';

const meta: Meta<typeof Modal> = {
  title: 'Components/CustomModal',
  component: Modal,
  argTypes: {
    title: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    position: {
      control: { type: 'radio' },
      options: ['center', 'bottom'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const onClose = () => setIsOpen(false);

    const handleClick = () => {
      alert('성공하였습니다.');
    };

    return (
      <div>
        <OpenModal onClick={() => setIsOpen(true)}>Custom 모달 열기</OpenModal>

        <Modal isOpen={isOpen} onClose={onClose} {...args} type='custom'>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              <label>
                <input type='checkbox' checked={checked1} onChange={() => setChecked1(!checked1)} />
                [필수] 개인정보 수집이용 동의
              </label>
              <br />
              <label>
                <input type='checkbox' checked={checked2} onChange={() => setChecked2(!checked2)} />
                [필수] 고객정보 제 3자 제공동의
              </label>
            </div>
            <br />
            <SaveButton onClick={handleClick} disabled={!(checked1 && checked2)}>
              동의하고 저장하기
            </SaveButton>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    title: '약관에 동의해 주세요.',
    message: '',
    position: 'center',
    size: 'large',
    onConfirm: () => alert('확인 버튼 클릭'),
    onSubmit: (input: string) => alert(`입력한 아이디: ${input}`),
  },
};

const OpenModal = styled.button`
  width: 120px;
  height: 50px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 0.1s ease;
  :hover {
    background-color: #0056b3;
  }
`;

const SaveButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 0.1s ease;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  :hover {
    background-color: #555;
  }
`;
