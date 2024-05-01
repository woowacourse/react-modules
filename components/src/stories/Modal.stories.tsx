import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useModal } from "../lib/Modal";
import { Modal } from "../lib/Modal/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    modalPosition: {
      description: "모달의 위치",
      control: {
        type: "radio",
        options: ["center", "bottom"],
      },
    },
    title: {
      description: "모달의 제목",
    },
    closeButtonPosition: {
      description: "닫기 버튼의 위치",
      control: {
        type: "radio",
        options: ["top", "bottom"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const 중앙에위치한모달에상단X닫기버튼: Story = {
  render: () => {
    const { isOpen, openModal, closeModal, ModalComponent } = useModal();

    return (
      <>
        <button onClick={openModal}>모달 열기</button>
        <ModalComponent
          modalPosition="center"
          title="중앙에 위치한 모달"
          closeButtonPosition="top"
          onClose={closeModal}
        >
          <div>
            이것은 중앙에 위치한 모달의 내용입니다.이것은 중앙에 위치한 모달의 내용입니다.이것은
            중앙에 위치한 모달의 내용입니다.이것은 중앙에 위치한 모달의 내용입니다.이것은 중앙에
            위치한 모달의 내용입니다.이것은 하단에 위치한 모달의 내용입니다.이것은 하단에 위치한
            모달의 내용입니다.이것은 하단에 위치한 모달의 내용입니다.이것은 하단에 위치한 모달의
            내용입니다.이것은 하단에 위치한 모달의 내용입니다.이것은 하단에 위치한 모달의
            내용입니다.이것은 하단에 위치한 모달의 내용입니다.
          </div>
        </ModalComponent>
      </>
    );
  },
};

export const 중앙에위치한모달에하단사각형닫기버튼: Story = {
  render: () => {
    const { isOpen, openModal, closeModal, ModalComponent } = useModal();

    return (
      <>
        <button onClick={openModal}>모달 열기</button>
        <ModalComponent
          modalPosition="center"
          title="중앙에 위치한 모달"
          closeButtonPosition="bottom"
          onClose={closeModal}
        >
          <div>이것은 중앙에 위치한 모달의 내용입니다.</div>
        </ModalComponent>
      </>
    );
  },
};

export const 하단에위치한모달메상단X닫기버튼: Story = {
  render: () => {
    const { isOpen, openModal, closeModal, ModalComponent } = useModal();

    return (
      <>
        <button onClick={openModal}>모달 열기</button>
        <ModalComponent
          modalPosition="bottom"
          title="하단에 위치한 모달"
          closeButtonPosition="top"
          onClose={closeModal}
        >
          <div>이것은 하단에 위치한 모달의 내용입니다.</div>
        </ModalComponent>
      </>
    );
  },
};
export const 하단에위치한모달메상단사각형닫기버튼: Story = {
  render: () => {
    const { isOpen, openModal, closeModal, ModalComponent } = useModal();

    return (
      <>
        <button onClick={openModal}>모달 열기</button>
        <ModalComponent
          modalPosition="bottom"
          title="하단에 위치한 모달"
          closeButtonPosition="bottom"
          onClose={closeModal}
        >
          <div>
            이것은 하단에 위치한 모달의 내용입니다.이것은 하단에 위치한 모달의 내용입니다.이것은
            하단에 위치한 모달의 내용입니다.이것은 하단에 위치한 모달의 내용입니다.이것은 하단에
            위치한 모달의 내용입니다.이것은 하단에 위치한 모달의 내용입니다.이것은 하단에 위치한
            모달의 내용입니다.이것은 하단에 위치한 모달의 내용입니다.이것은 하단에 위치한 모달의
            내용입니다.이것은 하단에 위치한 모달의 내용입니다.이것은 하단에 위치한 모달의
            내용입니다.이것은 하단에 위치한 모달의 내용입니다.이것은 하단에 위치한 모달의
            내용입니다.이것은 하단에 위치한 모달의 내용입니다.
          </div>
        </ModalComponent>
      </>
    );
  },
};

export const 중앙에위치한모달에긴제목: Story = {
  render: () => {
    const { isOpen, openModal, closeModal, ModalComponent } = useModal();

    return (
      <>
        <button onClick={openModal}>모달 열기</button>
        <ModalComponent
          modalPosition="center"
          title="이것은 매우 긴 제목으로, 줄임표로 잘려야 합니다."
          closeButtonPosition="top"
          onClose={closeModal}
        >
          <div>이 모달은 긴 제목을 가지고 있어 줄임표로 표시됩니다.</div>
        </ModalComponent>
      </>
    );
  },
};

export const 하단에위치한모달에긴제목: Story = {
  render: () => {
    const { isOpen, openModal, closeModal, ModalComponent } = useModal();

    return (
      <>
        <button onClick={openModal}>모달 열기</button>
        <ModalComponent
          modalPosition="bottom"
          title="이것은 매우 긴 제목으로, 줄임표로 잘려야 합니다. 이것은 매우 긴 제목으로, 줄임표로 잘려야 합니다."
          closeButtonPosition="top"
          onClose={closeModal}
        >
          <div>이 모달은 긴 제목을 가지고 있어 줄임표로 표시됩니다.</div>
        </ModalComponent>
      </>
    );
  },
};
