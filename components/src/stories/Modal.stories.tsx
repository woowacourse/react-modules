import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Modal from "../lib/Modal/Modal";

const meta = {
  title: "Modal",

  component: Modal,

  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="center">
          <Modal.Header>
            <Modal.Title text="카드사 선택" />
          </Modal.Header>
          <Modal.ButtonContainer direction="column">
            <Modal.Button
              theme="dark"
              onClick={() => console.log("confirmButton clicked")}
            >
              동의하고 저장하기
            </Modal.Button>
            <Modal.Button
              theme="white"
              onClick={() => console.log("closeButton clicked")}
            >
              닫기
            </Modal.Button>
          </Modal.ButtonContainer>
        </Modal.Container>
      </>
    ),
  },
};

export const PositionTop: Story = {
  args: {
    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="top">
          <Modal.Header>
            <Modal.Title text="약관에 동의해 주세요." />
          </Modal.Header>
          <Modal.ButtonContainer direction="column">
            <Modal.Button
              theme="dark"
              onClick={() => console.log("confirmButton clicked")}
            >
              동의하고 저장하기
            </Modal.Button>
            <Modal.Button
              theme="white"
              onClick={() => console.log("closeButton clicked")}
            >
              닫기
            </Modal.Button>
          </Modal.ButtonContainer>
        </Modal.Container>
      </>
    ),
  },
};

export const PositionBottom: Story = {
  args: {
    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="bottom">
          <Modal.Header>
            <Modal.Title text="약관에 동의해 주세요." />
          </Modal.Header>
          <Modal.ButtonContainer direction="column">
            <Modal.Button
              theme="dark"
              onClick={() => console.log("confirmButton clicked")}
            >
              동의하고 저장하기
            </Modal.Button>
            <Modal.Button
              theme="white"
              onClick={() => console.log("closeButton clicked")}
            >
              닫기
            </Modal.Button>
          </Modal.ButtonContainer>
        </Modal.Container>
      </>
    ),
  },
};

export const HasCloseButtonModal: Story = {
  args: {
    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="center">
          <Modal.Header>
            <Modal.Title text="카드사 선택" />
            <Modal.CloseButton
              onCloseButtonClick={() => console.log("closeButton clicked")}
            />
          </Modal.Header>
          <Modal.ButtonContainer direction="column">
            <Modal.Button
              theme="dark"
              onClick={() => console.log("confirmButton clicked")}
            >
              동의하고 저장하기
            </Modal.Button>
            <Modal.Button
              theme="white"
              onClick={() => console.log("closeButton clicked")}
            >
              닫기
            </Modal.Button>
          </Modal.ButtonContainer>
        </Modal.Container>
      </>
    ),
  },
};

export const HasNoButton: Story = {
  args: {
    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="center">
          <Modal.Header>
            <Modal.Title text="카드사 선택" />
            <Modal.CloseButton
              onCloseButtonClick={() => console.log("closeButton clicked")}
            />
          </Modal.Header>
        </Modal.Container>
      </>
    ),
  },
};

export const HasOneButton: Story = {
  args: {
    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="center">
          <Modal.Header>
            <Modal.Title text="카드사 선택" />
            <Modal.CloseButton
              onCloseButtonClick={() => console.log("closeButton clicked")}
            />
          </Modal.Header>
          <Modal.ButtonContainer direction="column">
            <Modal.Button
              theme="dark"
              onClick={() => console.log("confirmButton clicked")}
            >
              동의하고 저장하기
            </Modal.Button>
          </Modal.ButtonContainer>
        </Modal.Container>
      </>
    ),
  },
};

export const HasTwoButton: Story = {
  args: {
    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="center">
          <Modal.Header>
            <Modal.Title text="카드사 선택" />
            <Modal.CloseButton
              onCloseButtonClick={() => console.log("closeButton clicked")}
            />
          </Modal.Header>
          <Modal.ButtonContainer direction="row">
            <Modal.Button
              theme="dark"
              onClick={() => console.log("confirmButton clicked")}
            >
              확인
            </Modal.Button>
            <Modal.Button
              theme="white"
              onClick={() => console.log("closeButton clicked")}
            >
              닫기
            </Modal.Button>
          </Modal.ButtonContainer>
        </Modal.Container>
      </>
    ),
  },
};

export const ButtonDirectionColumn: Story = {
  args: {
    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="center">
          <Modal.Header>
            <Modal.Title text="카드사 선택" />
            <Modal.CloseButton
              onCloseButtonClick={() => console.log("closeButton clicked")}
            />
          </Modal.Header>
          <Modal.ButtonContainer direction="column">
            <Modal.Button
              theme="dark"
              onClick={() => console.log("confirmButton clicked")}
            >
              동의하고 저장하기
            </Modal.Button>
            <Modal.Button
              theme="white"
              onClick={() => console.log("closeButton clicked")}
            >
              닫기
            </Modal.Button>
          </Modal.ButtonContainer>
        </Modal.Container>
      </>
    ),
  },
};
