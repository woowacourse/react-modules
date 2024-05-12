import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Modal from "../lib/Modal/Modal";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

const meta = {
  title: "Modal",
  component: Modal,

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="large">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const PositionTop: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="top" size="large">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const PositionBottom: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="bottom" size="large">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const HasCloseButtonModal: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="large">
            <>
              <Modal.Header>
                <>
                  <Modal.Title text="카드사 선택" />
                  <Modal.CloseButton
                    onCloseButtonClick={() =>
                      console.log("closeButton clicked")
                    }
                  />
                </>
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const HasNoButton: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="large">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const HasOneButton: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="large">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const HasTwoButton: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="large">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ButtonDirectionColumn: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="large">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ButtonDirectionRow: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="large">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="row" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ModalContainerSizeLarge: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="large">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ModalContainerSizeMedium: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="medium">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ModalContainerSizeSmall: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="small">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="column" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ButtonSizeLarge: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="small">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="row" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="large"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="large"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ButtonSizeSmall: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="small">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="row" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ButtonContainerPositionLeft: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="small">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="row" position="left">
                <>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ButtonContainerPositionCenter: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="small">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="row" position="center">
                <>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ButtonContainerPositionRight: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="small">
            <>
              <Modal.Header>
                <Modal.Title text="카드사 선택" />
              </Modal.Header>
              <Modal.ButtonContainer direction="row" position="right">
                <>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("confirmButton clicked")}
                  >
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button
                    color="light"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const AlertModal: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="medium">
            <>
              <Modal.Header>
                <Modal.Title text="아이디를 입력해주세요." />
              </Modal.Header>
              <p>아이디는 필수로 입력해야 합니다.</p>
              <Modal.ButtonContainer direction="row" position="right">
                <>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>확인</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const ConfirmModal: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="medium">
            <>
              <Modal.Header>
                <Modal.Title text="카드를 삭제하시겠습니까?" />
              </Modal.Header>
              <p>삭제하면 복구하실 수 없습니다.</p>
              <Modal.ButtonContainer direction="row" position="right">
                <>
                  <Modal.Button
                    color="light"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>취소</span>
                  </Modal.Button>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>확인</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const PromptModal: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="medium">
            <>
              <Modal.Header>
                <Modal.Title text="쿠폰 번호를 입력해 주세요." />
              </Modal.Header>
              <input type="text" placeholder="CGEXX46Z" />
              <Modal.ButtonContainer direction="row" position="right">
                <>
                  <Modal.Button
                    color="light"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>취소</span>
                  </Modal.Button>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>확인</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const MobilePositionCenter: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="center" size="medium">
            <>
              <Modal.Header>
                <Modal.Title text="쿠폰 번호를 입력해 주세요." />
              </Modal.Header>
              <input type="text" placeholder="CGEXX46Z" />
              <Modal.ButtonContainer direction="row" position="right">
                <>
                  <Modal.Button
                    color="light"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>취소</span>
                  </Modal.Button>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>확인</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const MobilePositionTop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="top" size="medium">
            <>
              <Modal.Header>
                <Modal.Title text="쿠폰 번호를 입력해 주세요." />
              </Modal.Header>
              <input type="text" placeholder="CGEXX46Z" />
              <Modal.ButtonContainer direction="row" position="right">
                <>
                  <Modal.Button
                    color="light"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>취소</span>
                  </Modal.Button>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>확인</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};

export const MobilePositionBottom: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    isOpen: true,
    children: (
      <>
        <ThemeProvider theme={theme}>
          <Modal.BackDrop
            onClose={() => {
              console.log("backdrop clicked");
            }}
          />
          <Modal.Container position="bottom" size="medium">
            <>
              <Modal.Header>
                <Modal.Title text="쿠폰 번호를 입력해 주세요." />
              </Modal.Header>
              <input type="text" placeholder="CGEXX46Z" />
              <Modal.ButtonContainer direction="row" position="right">
                <>
                  <Modal.Button
                    color="light"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>취소</span>
                  </Modal.Button>
                  <Modal.Button
                    color="dark"
                    size="small"
                    onClick={() => console.log("closeButton clicked")}
                  >
                    <span>확인</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </ThemeProvider>
      </>
    ),
  },
};
