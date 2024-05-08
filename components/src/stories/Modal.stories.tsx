import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal';
import React from 'react';
import xButton from '../lib/asset/xButton.svg';
import { Temp, Wide } from '../App';

const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <div style={{ padding: '3rem', width: '100vw', height: '100vh' }}>
        {Story()}
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 'center',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='예시' />
        <Modal.Button
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          <img src={xButton}></img>
        </Modal.Button>
      </Modal.Header>
      <Modal.Body>
        <div>예시입니다.</div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button>취소</Modal.Button>
        <Modal.Button>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};
export const SmallModal: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='예시' />
        <Modal.Button
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          <img src={xButton}></img>
        </Modal.Button>
      </Modal.Header>
      <Modal.Body>
        <div>예시입니다.</div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button>취소</Modal.Button>
        <Modal.Button>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const LargeModal: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='예시' />
        <Modal.Button
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          <img src={xButton}></img>
        </Modal.Button>
      </Modal.Header>
      <Modal.Body>
        <div>예시입니다.</div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button>취소</Modal.Button>
        <Modal.Button>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const BottomModal: Story = {
  args: {
    ...Default.args,
    position: 'bottom',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='예시' />
        <Modal.Button
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          <img src={xButton}></img>
        </Modal.Button>
      </Modal.Header>
      <Modal.Body>
        <div>예시입니다.</div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button>취소</Modal.Button>
        <Modal.Button>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const NoneXButton: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='예시' />
      </Modal.Header>
      <Modal.Body>
        <div>예시입니다.</div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button>취소</Modal.Button>
        <Modal.Button>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const CancelButton: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='예시' />
      </Modal.Header>
      <Modal.Body>
        <div>예시입니다.</div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          취소
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const ColumnButtonLayout: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='예시' />
      </Modal.Header>
      <Modal.Body>
        <div>예시입니다.</div>
      </Modal.Body>
      <Modal.Footer position='column'>
        <Modal.Button
          width='stretch'
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          취소
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const ScrollContent: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='예시' />
      </Modal.Header>
      <Modal.Body>
        <Wide>Wide 문서</Wide>
      </Modal.Body>
      <Modal.Footer position='column'>
        <Modal.Button
          width='stretch'
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          취소
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const AlertModal: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='아이디를 입력해주세요' />
      </Modal.Header>
      <Modal.Body>
        <div>아이디는 필수로 입력해야 합니다.</div>
      </Modal.Body>
      <Modal.Footer position='row'>
        <Modal.Button>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const ConfirmModal: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='카드를 삭제하시겠습니까?' />
      </Modal.Header>
      <Modal.Body>
        <div>삭제하면 복수할 수 없습니다.</div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          취소
        </Modal.Button>
        <Modal.Button>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const PromptModal: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='쿠폰번호를 입력해주세요.' />
      </Modal.Header>
      <Modal.Body>
        <input
          style={{ width: '100%', boxSizing: 'border-box' }}
          placeholder='KDSEJWJ'
        />
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          취소
        </Modal.Button>
        <Modal.Button>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  ),
};

//   position: 'bottom',
//   title: '제목입니다.',
//   buttonLayout:'column',
//   isXButton:false,
//   closeButtonContent:"취소",
//   confirmButtonContent:'alert',
//   children: <Temp>d하이</Temp>,
//   handleConfirm: () => alert("확인")
//   }

// export const Alert2: Story = {
//     args: {
//       title: '제목입니다.',
//       position: 'bottom',
//       buttonLayout:'column',
//       isXButton:false,
//       closeButtonContent:"취소",
//       confirmButtonContent:'alert',
//       children: <Temp2>d하이</Temp2>,
//       handleConfirm: () => alert("확인")
//       }
//   };

//     position: string;
//   title: string;
//   isXButton?: boolean;
//   buttonLayout?: string;
//   children?: ReactNode;

//   closeButtonContent?: string;
//   confirmButton?: string;
//   confirmButtonContent?: string;

//   xButtonContent?:string;

//   handleConfirm?: (e: React.MouseEvent) => void;
//   handleClose?: (e: React.MouseEvent) => void;
