import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../Modal/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.CloseButton />
          <Modal.Title title="기본 모달" />
          <Modal.Body>
            <p>기본 모달의 내용입니다.</p>
          </Modal.Body>
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  ),
};

export const BottomModal: Story = {
  args: {
    isOpen: true,
    position: "bottom",
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.CloseButton />
          <Modal.Title title="하단 모달" />
          <Modal.Body>
            <p>하단 모달의 내용입니다.</p>
          </Modal.Body>
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  ),
};

export const PrimaryButtonModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.CloseButton />
          <Modal.Title title="Primary 버튼 모달" />
          <Modal.Body>
            <p>Primary 버튼 모달의 내용입니다.</p>
          </Modal.Body>
          <Modal.Button
            variant="primary"
            title="확인"
            size="large"
            onClick={() => {
              console.log("확인 버튼 클릭!");
              args.onClose();
            }}
          />
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  ),
};

export const SecondaryButtonModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.CloseButton />
          <Modal.Title title="Secondary 버튼 모달" />
          <Modal.Body>
            <p>Secondary 버튼 모달의 내용입니다.</p>
          </Modal.Body>
          <Modal.Button
            variant="secondary"
            title="확인"
            size="large"
            onClick={() => {
              console.log("확인 버튼 클릭!");
              args.onClose();
            }}
          />
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  ),
};

export const SmallButtonModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.CloseButton />
          <Modal.Title title="Small 버튼 모달" />
          <Modal.Body>
            <p>Small 버튼 모달의 내용입니다.</p>
          </Modal.Body>
          <Modal.Button
            variant="primary"
            title="확인"
            size="small"
            onClick={() => {
              console.log("확인 버튼 클릭!");
              args.onClose();
            }}
          />
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  ),
};

export const MediumButtonModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.CloseButton />
          <Modal.Title title="Medium 버튼 모달" />
          <Modal.Body>
            <p>Medium 버튼 모달의 내용입니다.</p>
          </Modal.Body>
          <Modal.Button
            variant="primary"
            title="확인"
            size="medium"
            onClick={() => {
              console.log("확인 버튼 클릭!");
              args.onClose();
            }}
          />
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  ),
};

export const LargeButtonModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.CloseButton />
          <Modal.Title title="Large 버튼 모달" />
          <Modal.Body>
            <p>Large 버튼 모달의 내용입니다.</p>
          </Modal.Body>
          <Modal.Button
            variant="primary"
            title="확인"
            size="large"
            onClick={() => {
              console.log("확인 버튼 클릭!");
              args.onClose();
            }}
          />
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  ),
};

export const LongBodyModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Backdrop>
        <Modal.Frame>
          <Modal.CloseButton />
          <Modal.Title title="긴 내용 모달" />
          <Modal.Body>{"내용입니다.\n".repeat(200)}</Modal.Body>
          <Modal.Button
            variant="primary"
            title="확인"
            size="large"
            onClick={() => {
              console.log("확인 버튼 클릭!");
              args.onClose();
            }}
          />
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  ),
};

export const Example: Story = {
  args: {
    isOpen: true,
    autoCloseOnESC: true,
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Backdrop styled={{ backgroundColor: "rgba(246, 255, 0, 0.2)" }}>
        <Modal.Frame styled={{ backgroundColor: "rgba(26, 213, 255, 0.5)" }}>
          <Modal.Title title="활용 예시" styled={{ color: "red" }} />
          <Modal.CloseButton />
          <Modal.Body>
            <div>모달 활용 예시입니다.</div>
          </Modal.Body>
          <div style={{ display: "flex", gap: "10px" }}>
            <Modal.Button
              variant="secondary"
              title="취소"
              size="medium"
              onClick={() => {
                console.log("취소 버튼 클릭!");
                args.onClose();
              }}
            />
            <Modal.Button
              variant="primary"
              title="확인"
              size="medium"
              onClick={() => {
                console.log("확인 버튼 클릭!");
                args.onClose();
              }}
            />
          </div>
        </Modal.Frame>
      </Modal.Backdrop>
    </Modal>
  ),
};
