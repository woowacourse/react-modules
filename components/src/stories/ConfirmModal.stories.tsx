import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "../lib/ConfirmModal/ConfirmModal";

const meta: Meta<typeof ConfirmModal> = {
  title: "Components/ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
- \`isModalOpen: boolean\` — 모달 열림/닫힘 여부
- \`title: string\` — 헤더에 표시할 제목
- \`description: string\` — 모달 본문에 표시할 설명
- \`onClose: () => void\` — 확인 버튼 클릭 시 호출되는 콜백
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Open: Story = {
  args: {
    isModalOpen: true,
    title: "카드를 삭제하시겠습니까?",
    description: "삭제하면 복구하실 수 없습니다.",
    onClose: () => {},
    size: "small",
  },
};

export const Closed: Story = {
  args: {
    isModalOpen: false,
    title: "카드를 삭제하시겠습니까?",
    description: "삭제하면 복구하실 수 없습니다.",
    onClose: () => {},
  },
};
