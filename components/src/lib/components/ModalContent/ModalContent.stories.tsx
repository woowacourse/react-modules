import type { Meta, StoryObj } from "@storybook/react";

import ModalRoot from "../ModalRoot";
import ModalContent from ".";

const meta = {
  title: "ModalContent",
  component: ModalContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "모달의 컨텐츠를 담는 컨테이너 컴포넌트입니다. 모달의 위치와 크기를 설정할 수 있습니다.",
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof ModalContent>;

export default meta;

type Story = StoryObj<typeof ModalContent>;

export const Default: Story = {
  args: {
    children: "",
    position: "center",
    size: "medium",
  },
  argTypes: {
    position: {
      control: "select",
      options: ["center", "bottom"],
      description:
        "모달이 표시될 위치를 결정합니다. center는 화면 중앙, bottom은 화면 하단에 표시됩니다.",
      table: {
        defaultValue: { summary: "center" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description:
        "모달의 크기를 결정합니다. small(320px), medium(480px), large(640px)로 사전 정의되어 있습니다.",
      table: {
        defaultValue: { summary: "large" },
      },
    },
    children: {
      control: false,
      description: "모달 내부에 표시할 컨텐츠입니다.",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "기본적인 ModalContent 컴포넌트 사용 예시입니다. position과 size prop으로 모달의 위치와 크기를 설정할 수 있습니다.",
      },
    },
  },
  render: (args) => {
    return (
      <ModalRoot>
        <ModalContent {...args}>
          <h3 style={{ margin: "0 0 20px 0" }}>기본 모달</h3>
          <p>모달의 내용을 여기에 작성합니다.</p>
          <button style={{ marginTop: "20px" }}>확인</button>
        </ModalContent>
      </ModalRoot>
    );
  },
};

export const CustomSize: Story = {
  args: {
    children: "",
    position: "center",
    size: { width: "95%", maxWidth: "800px" },
  },
  argTypes: {
    position: {
      control: "select",
      options: ["center", "bottom"],
      description:
        "모달이 표시될 위치를 결정합니다. center는 화면 중앙, bottom은 화면 하단에 표시됩니다.",
    },
    children: {
      control: false,
      description: "모달 내부에 표시할 컨텐츠입니다.",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "커스텀 사이즈를 지정하여 모달의 크기를 자유롭게 설정할 수 있습니다. `size` prop에 객체 형태로 `width`와 `maxWidth` 값을 전달합니다.",
      },
    },
  },
  render: (args) => {
    return (
      <ModalRoot>
        <ModalContent {...args}>
          <h3 style={{ margin: "0 0 20px 0" }}>커스텀 사이즈 모달</h3>
          <p>객체를 전달하여 모달의 크기를 커스텀할 수 있습니다.</p>
          <code>{`size={{ width: "95%", maxWidth: "800px" }}`}</code>
          <button style={{ marginTop: "20px" }}>확인</button>
        </ModalContent>
      </ModalRoot>
    );
  },
};

export const BottomPosition: Story = {
  args: {
    children: "",
    position: "bottom",
    size: "medium",
  },
  parameters: {
    docs: {
      description: {
        story:
          "position prop을 'bottom'으로 설정하면 모달이 화면 하단에 표시됩니다. 바텀 시트 형태의 모달을 구현할 때 유용합니다. 이 경우 size 속성은 무시되고 화면 너비의 100%를 사용합니다.",
      },
    },
  },
  render: (args) => {
    return (
      <ModalRoot>
        <ModalContent {...args}>
          <h3 style={{ margin: "0 0 20px 0" }}>바텀 시트 모달</h3>
          <p>화면 하단에 표시되는 모달입니다.</p>
          <button style={{ marginTop: "20px" }}>확인</button>
        </ModalContent>
      </ModalRoot>
    );
  },
};
