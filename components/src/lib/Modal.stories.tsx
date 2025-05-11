import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { ModalComponent as Modal } from './index';

import ButtonContainer from '../ButtonContainer.tsx';
import Button from '../Button.tsx';
import Input from './Input.tsx';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'center'],
    },
    width: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    isOpen: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    isOpen: true,
    position: 'center',
    width: 'large',
    children: '기본 모달 제목',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: false });
    }

    function onOpen() {
      updateArgs({ isOpen: true });
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      console.log(e.target.value);
    }

    return (
      <>
        <button onClick={onOpen}>열림버튼</button>
        <Modal isOpen={isOpen} position={args.position} width={args.width} onClose={onClose}>
          <Modal.Overlay>
            <Modal.Container>
              <Modal.CloseButton />
              <Modal.Title>{args.children}</Modal.Title>
              <Modal.Body>
                이것은 모달의 본문입니다.
                <Input type="text" onChange={onChange} />
                <ButtonContainer>
                  <Button position="left">취소</Button>
                  <Button position="right">확인</Button>
                </ButtonContainer>
              </Modal.Body>
            </Modal.Container>
          </Modal.Overlay>
        </Modal>
      </>
    );
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    children: '기본 모달 제목',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: false });
    }

    function onOpen() {
      updateArgs({ isOpen: true });
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      console.log(e.target.value);
    }

    return (
      <>
        <button onClick={onOpen}>열림버튼</button>
        <Modal isOpen={isOpen} position={args.position} width={args.width} onClose={onClose}>
          <Modal.Overlay>
            <Modal.Container>
              <Modal.CloseButton />
              <Modal.Title>{args.children}</Modal.Title>
              <Modal.Body>
                이것은 모달의 본문입니다.
                <Input type="text" onChange={onChange} />
                <ButtonContainer>
                  <Button position="left">취소</Button>
                  <Button position="right">확인</Button>
                </ButtonContainer>
              </Modal.Body>
            </Modal.Container>
          </Modal.Overlay>
        </Modal>
      </>
    );
  },
};

export const TopModal: Story = {
  args: {
    isOpen: true,
    position: 'top',
    children: '상단 모달 제목',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      console.log(e.target.value);
    }
    function onOpen() {
      updateArgs({ isOpen: true });
    }
    return (
      <>
        <button onClick={onOpen}>열림버튼</button>
        <Modal isOpen={isOpen} position={args.position} width={args.width} onClose={onClose}>
          <Modal.Overlay>
            <Modal.Container>
              <Modal.CloseButton />
              <Modal.Title>{args.children}</Modal.Title>
              <Modal.Body>
                이것은 모달의 본문입니다.
                <Input type="text" onChange={onChange} />
                <ButtonContainer>
                  <Button position="left">취소</Button>
                  <Button position="right">확인</Button>
                </ButtonContainer>
              </Modal.Body>
            </Modal.Container>
          </Modal.Overlay>
        </Modal>
      </>
    );
  },
};

export const BottomModal: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    children: '하단 모달 제목',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      console.log(e.target.value);
    }
    function onOpen() {
      updateArgs({ isOpen: true });
    }
    return (
      <>
        <button onClick={onOpen}>열림버튼</button>
        <Modal isOpen={isOpen} position={args.position} width={args.width} onClose={onClose}>
          <Modal.Overlay>
            <Modal.Container>
              <Modal.CloseButton />
              <Modal.Title>{args.children}</Modal.Title>
              <Modal.Body>
                이것은 모달의 본문입니다.
                <Input type="text" onChange={onChange} />
                <ButtonContainer>
                  <Button position="left">취소</Button>
                  <Button position="right">확인</Button>
                </ButtonContainer>
              </Modal.Body>
            </Modal.Container>
          </Modal.Overlay>
        </Modal>
      </>
    );
  },
};

export const CenterModal: Story = {
  args: {
    isOpen: true,
    position: 'center',
    children: '중앙 모달 제목',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      console.log(e.target.value);
    }
    function onOpen() {
      updateArgs({ isOpen: true });
    }
    return (
      <>
        <button onClick={onOpen}>열림버튼</button>
        <Modal isOpen={isOpen} position={args.position} width={args.width} onClose={onClose}>
          <Modal.Overlay>
            <Modal.Container>
              <Modal.CloseButton />
              <Modal.Title>{args.children}</Modal.Title>
              <Modal.Body>
                이것은 모달의 본문입니다.
                <Input type="text" onChange={onChange} />
                <ButtonContainer>
                  <Button position="left">취소</Button>
                  <Button position="right">확인</Button>
                </ButtonContainer>
              </Modal.Body>
            </Modal.Container>
          </Modal.Overlay>
        </Modal>
      </>
    );
  },
};

export const AlertModal: Story = {
  args: {
    isOpen: true,
    position: 'center',
    children: '아이디를 입력해 주세요',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    function onOpen() {
      updateArgs({ isOpen: true });
    }
    return (
      <>
        <button onClick={onOpen}>열림버튼</button>
        <Modal isOpen={isOpen} position={args.position} width={args.width} onClose={onClose}>
          <Modal.Overlay>
            <Modal.Container>
              <Modal.CloseButton />
              <Modal.Title>{args.children}</Modal.Title>
              <Modal.Body>
                아이디는 필수로 입력해야 합니다.<Button position="right">확인</Button>
              </Modal.Body>
            </Modal.Container>
          </Modal.Overlay>
        </Modal>
      </>
    );
  },
};

export const ConfirmModal: Story = {
  args: {
    isOpen: true,
    position: 'center',
    children: '카드를 삭제하시겠습니까?',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    function onOpen() {
      updateArgs({ isOpen: true });
    }
    return (
      <>
        <button onClick={onOpen}>열림버튼</button>
        <Modal isOpen={isOpen} position={args.position} width={args.width} onClose={onClose}>
          <Modal.Overlay>
            <Modal.Container>
              <Modal.CloseButton />
              <Modal.Title>{args.children}</Modal.Title>
              <Modal.Body>
                삭제하시면 복구하실 수 없습니다.
                <ButtonContainer>
                  <Button position="right">취소</Button>
                  <Button position="right">확인</Button>
                </ButtonContainer>
              </Modal.Body>
            </Modal.Container>
          </Modal.Overlay>
        </Modal>
      </>
    );
  },
};

export const PromptModal: Story = {
  args: {
    isOpen: true,
    position: 'center',
    children: '쿠폰 번호를 입력해 주세요.',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      console.log(e.target.value);
    }

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    function onOpen() {
      updateArgs({ isOpen: true });
    }
    return (
      <>
        <button onClick={onOpen}>열림버튼</button>
        <Modal isOpen={isOpen} position={args.position} width={args.width} onClose={onClose}>
          <Modal.Overlay>
            <Modal.Container>
              <Modal.CloseButton />
              <Modal.Title>{args.children}</Modal.Title>
              <Modal.Body>
                <Input type="text" onChange={onChange}></Input>
                <ButtonContainer>
                  <Button position="right">취소</Button>
                  <Button position="right">확인</Button>
                </ButtonContainer>
              </Modal.Body>
            </Modal.Container>
          </Modal.Overlay>
        </Modal>
      </>
    );
  },
};
