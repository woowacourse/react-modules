import Modal from "@/lib/Modal/Modal/Modal";
import DeleteIcon from "../assets/deleteIcon.svg?react";
import type { StoryObj, Meta } from "@storybook/react";
import { ModalPosition, ModalSize } from "@/lib/Modal/Modal/Modal.style";

export default {
  title: "Modal/BasicModal",
  component: Modal,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large", "full"],
    },
  },
} as Meta<typeof Modal>;

type ModalProps = {
  size: ModalSize;
  position?: ModalPosition;
  onClose?: () => void;
  isOpen?: boolean;
};

const ModalComponent: React.FC<ModalProps> = ({
  size,
  position = "center",
  onClose = () => {},
  isOpen = true,
  ...args
}) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      position={position}
      size={size}
      {...args}
    >
      <Modal.Title>{`${size} 모달 - 위치: ${position}`}</Modal.Title>
      <Modal.CloseIcon onClick={onClose}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>{`${size} 모달입니다. 위치: ${position}`}</Modal.Content>
      <Modal.Footer>
        <Modal.StyledButton
          label="저장"
          onClickEvent={() => {}}
          backgroundColor="black"
          size="small"
        />
      </Modal.Footer>
    </Modal>
  );
};

type Story = StoryObj<typeof Modal>;

export const SmallModal: Story = {
  render: (args) => <ModalComponent size="small" {...args} />,
};

export const MediumModal: Story = {
  render: (args) => <ModalComponent size="medium" {...args} />,
};

export const LargeModal: Story = {
  render: (args) => <ModalComponent size="large" {...args} />,
};

export const FullModal: StoryObj<typeof Modal> = {
  render: (args) => <ModalComponent size="full" {...args} />,
};

export const PositionModal: Story = {
  args: {
    position: "bottom",
    isOpen: true,
  },
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["top", "center", "bottom"],
    },
  },
  render: (args) => {
    return (
      <Modal position={args.position} {...args}>
        <Modal.Title> 약관에 동의해 주세요</Modal.Title>
        <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
        <Modal.Footer>
          <Modal.StyledButton
            label="동의"
            onClickEvent={() => {}}
            backgroundColor="black"
            size={"small"}
          />
          <Modal.CloseButton label="닫기" onClose={() => {}} size={"small"} />
        </Modal.Footer>
      </Modal>
    );
  },
};
