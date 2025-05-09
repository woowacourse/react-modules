import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import Button from '../common/Button/Button';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const AlertModal: Story = {
  render: (args) => {
    return (
      <Modal.Wrapper>
        <Modal.Trigger>
          <Button>모달 열기</Button>
        </Modal.Trigger>

        <Modal {...args}>
          <Modal.Top>
            <Modal.Title>아이디를 입력해 주세요.</Modal.Title>
          </Modal.Top>
          <Modal.Content>아이디는 필수로 입력해야 합니다.</Modal.Content>
          <Modal.Bottom>
            <Modal.ButtonContainer>
              <Modal.ConfirmButton>확인</Modal.ConfirmButton>
            </Modal.ButtonContainer>
          </Modal.Bottom>
        </Modal>
      </Modal.Wrapper>
    );
  },
};

export const ConfirmModal: Story = {
  render: (args) => {
    return (
      <Modal.Wrapper>
        <Modal.Trigger>
          <Button>모달 열기</Button>
        </Modal.Trigger>

        <Modal {...args}>
          <Modal.Top>
            <Modal.Title>카드를 삭제하시겠습니까?</Modal.Title>
          </Modal.Top>
          <Modal.Content>삭제하면 복구하실 수 없습니다.</Modal.Content>
          <Modal.Bottom>
            <Modal.ButtonContainer>
              <Modal.CancelButton>취소</Modal.CancelButton>
              <Modal.ConfirmButton>확인</Modal.ConfirmButton>
            </Modal.ButtonContainer>
          </Modal.Bottom>
        </Modal>
      </Modal.Wrapper>
    );
  },
};

export const PromptModal: Story = {
  render: (args) => {
    return (
      <Modal.Wrapper>
        <Modal.Trigger>
          <Button>모달 열기</Button>
        </Modal.Trigger>

        <Modal {...args}>
          <Modal.Top>
            <Modal.Title>쿠폰 번호를 입력해 주세요.</Modal.Title>
          </Modal.Top>
          <Modal.Content>
            <Modal.PromptInput placeholder="4자리의 쿠폰 번호를 입력해 주세요." />
          </Modal.Content>
          <Modal.Bottom>
            <Modal.ButtonContainer>
              <Modal.CancelButton>취소</Modal.CancelButton>
              <Modal.ConfirmButton>확인</Modal.ConfirmButton>
            </Modal.ButtonContainer>
          </Modal.Bottom>
        </Modal>
      </Modal.Wrapper>
    );
  },
};

export const SmallModal: Story = {
  render: (args) => {
    return (
      <Modal.Wrapper>
        <Modal.Trigger>
          <Button>모달 열기</Button>
        </Modal.Trigger>

        <Modal {...args} size="small">
          <Modal.Top>
            <Modal.Title>약관에 동의해 주세요</Modal.Title>
            <Modal.Close>
              <Modal.CloseIcon />
            </Modal.Close>
          </Modal.Top>
          <Modal.Content>
            <p style={{ color: '#8B95A1' }}>[필수] 개인정보 수집이용 동의</p>
            <p style={{ color: '#8B95A1' }}>[필수] 고객정보 제 3자 제공동의</p>
          </Modal.Content>
          <Modal.Bottom>
            <Modal.ButtonContainer>
              <Modal.ConfirmButton isExpanded>동의하고 저장하기</Modal.ConfirmButton>
            </Modal.ButtonContainer>
          </Modal.Bottom>
        </Modal>
      </Modal.Wrapper>
    );
  },
};

export const MediumModal: Story = {
  render: (args) => {
    return (
      <Modal.Wrapper>
        <Modal.Trigger>
          <Button>모달 열기</Button>
        </Modal.Trigger>

        <Modal {...args} size="medium">
          <Modal.Top>
            <Modal.Title>약관에 동의해 주세요</Modal.Title>
            <Modal.Close>
              <Modal.CloseIcon />
            </Modal.Close>
          </Modal.Top>
          <Modal.Content>
            <p style={{ color: '#8B95A1' }}>[필수] 개인정보 수집이용 동의</p>
            <p style={{ color: '#8B95A1' }}>[필수] 고객정보 제 3자 제공동의</p>
          </Modal.Content>
          <Modal.Bottom>
            <Modal.ButtonContainer>
              <Modal.ConfirmButton isExpanded>동의하고 저장하기</Modal.ConfirmButton>
            </Modal.ButtonContainer>
          </Modal.Bottom>
        </Modal>
      </Modal.Wrapper>
    );
  },
};

export const LargeModal: Story = {
  render: (args) => {
    return (
      <Modal.Wrapper>
        <Modal.Trigger>
          <Button>모달 열기</Button>
        </Modal.Trigger>

        <Modal {...args} size="large">
          <Modal.Top>
            <Modal.Title>약관에 동의해 주세요</Modal.Title>
            <Modal.Close>
              <Modal.CloseIcon />
            </Modal.Close>
          </Modal.Top>
          <Modal.Content>
            <p style={{ color: '#8B95A1' }}>[필수] 개인정보 수집이용 동의</p>
            <p style={{ color: '#8B95A1' }}>[필수] 고객정보 제 3자 제공동의</p>
          </Modal.Content>
          <Modal.Bottom>
            <Modal.ButtonContainer>
              <Modal.ConfirmButton isExpanded>동의하고 저장하기</Modal.ConfirmButton>
            </Modal.ButtonContainer>
          </Modal.Bottom>
        </Modal>
      </Modal.Wrapper>
    );
  },
};
