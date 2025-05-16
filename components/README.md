## 📦 @kimyouk/modal-components

React 프로젝트에서 간편하게 모달 UI를 구성할 수 있는 모달 컴포넌트 모듈입니다.
다양한 위치 설정과 컴포넌트 분리 설계를 통해 유연하게 사용할 수 있습니다.

### 설치

```TypeScript
npm install @kimyouk/modal-components
# 또는
yarn add @kimyouk/modal-components
```

## 기본 모달

### 빠른 시작

```TypeScript
import { Modal } from '@kimyouk/modal-components';

function App() {
  return (
    <>
      <Modal>
        <Modal.Trigger>트리거</Modal.Trigger>
        <Modal.Container>
          <Modal.Overlay />
          <Modal.Content position="center" size="small">
            <Modal.CloseButton />
            <Modal.Title>제목</Modal.Title>
            <Modal.Body>내용2</Modal.Body>
          </Modal.Content>
        </Modal.Container>
      </Modal>
    </>
  );
}
```

### 구성 요소

- Modal
  모달에서 공유되는 open값을 공유해주는 Provider 입니다.

- Modal.Trigger
  모달 상태를 open으로 해주는 버튼입니다.

- Modal.ModalContainer
  모달의 내부 구조를 감싸는 컨테이너입니다. 내부에 Overlay, Content를 배치할 수 있습니다.

- Modal.Overlay
  모달의 뒷배경을 담당합니다.

- Modal.Content
  모달에 그려지는 요소를 감싸는 컴포넌트입니다. 내부에 타이틀, 본문, 버튼 등을 배치할 수 있습니다.

- Modal.ModalTitle
  모달의 제목을 표시하는 컴포넌트입니다. 일반적으로 가장 상단에 배치합니다.

- Modal.ModalBody
  모달 본문에 들어갈 내용을 표시하는 영역입니다.

- Modal.ModalCloseButton
  모달을 닫기 위한 버튼입니다. 닫기 기능을 구현합니다.

- Modal.ConfirmButton
  모달의 확인 버튼입니다.

- Modal.CancelButton
  모달의 취소 버튼입니다.

- Modal.AlertActions
  Alert모달의 확인/취소 버튼을 묶은 컴포넌트 입니다.

### 스타일 커스터마이징

position에 따라 모달의 위치 및 border-radius가 자동 조정됩니다.

center일 경우 width 값을 통해 너비를 설정할 수 있습니다.

styled-components 기반이므로 ModalContainer 등 하위 컴포넌트를 확장하여 스타일 커스터마이징도 가능합니다.

## AlertModal

### 빠른 시작

```TypeScript
import { Modal } from '@kimyouk/modal-components';

function App() {
  return (
      <Modal>
        <Modal.Trigger>Alert 트리거</Modal.Trigger>
        <AlertModal size="small" title="Alert 제목" content="내용1234내용" />
      </Modal>
  );
}
```

### 구성 요소

| 이름                | 타입                             | 필수 | 설명                              |
| ------------------- | -------------------------------- | ---- | --------------------------------- |
| `title`             | `string`                         | ✅   | 모달 내부의 본문                  |
| `content`           | `string`                         | ✅   | 모달 내부의 내용                  |
| `size`              | `'small' \| 'medium' \| 'large'` | ❌   | 모달의 크기                       |
| `alertActionsWidth` | `number`                         | ❌   | 취소/확인 버튼을 감싼 영역의 너비 |
| `onCloseClick`      | `() => void`                     | ❌   | 취소 버튼 클릭시 동작하는 함수    |
| `onConfirmClick`    | `() => void`                     | ❌   | 확인 버튼 클릭시 동작하는 함수    |

## ConfirmModal

### 빠른 시작

```TypeScript
import { Modal } from '@kimyouk/modal-components';

function App() {
  return (
      <Modal>
        <Modal.Trigger>Alert 트리거</Modal.Trigger>
        <ConfirmModal size="small" title="Confirm 제목" content="내용1234내용" />
      </Modal>
  );
}
```

### 구성 요소

| 이름             | 타입                             | 필수 | 설명                           |
| ---------------- | -------------------------------- | ---- | ------------------------------ |
| `title`          | `string`                         | ✅   | 모달 내부의 본문               |
| `content`        | `string`                         | ✅   | 모달 내부의 내용               |
| `size`           | `'small' \| 'medium' \| 'large'` | ❌   | 모달의 크기                    |
| `onConfirmClick` | `() => void`                     | ❌   | 확인 버튼 클릭시 동작하는 함수 |

## PromptModal

### 빠른 시작

```TypeScript
import { Modal } from '@kimyouk/modal-components';

function App() {
  return (
      <Modal>
        <Modal.Trigger>Alert 트리거</Modal.Trigger>
        <PromptModal size="small" title="Confirm 제목" content="내용1234내용" />
      </Modal>
  );
}
```

### 구성 요소

| 이름                | 타입                             | 필수 | 설명                              |
| ------------------- | -------------------------------- | ---- | --------------------------------- |
| `title`             | `string`                         | ✅   | 모달 내부의 본문                  |
| `content`           | `string`                         | ✅   | 모달 내부의 내용                  |
| `size`              | `'small' \| 'medium' \| 'large'` | ❌   | 모달의 크기                       |
| `alertActionsWidth` | `number`                         | ❌   | 취소/확인 버튼을 감싼 영역의 너비 |
| `onCloseClick`      | `() => void`                     | ❌   | 취소 버튼 클릭시 동작하는 함수    |
| `onConfirmClick`    | `() => void`                     | ❌   | 확인 버튼 클릭시 동작하는 함수    |

## 내부 구조

```TypeScript
const Modal = Object.assign(ModalProvider, {
  Container: ModalContainer,
  Overlay: ModalOverlay,
  Content: ModalContent,
  Body: ModalBody,
  CloseButton: ModalCloseButton,
  Title: ModalTitle,
  CancelButton: CancelButton,
  ConfirmButton: ConfirmButton,
  AlertActions: AlertActions,
  Input: Input,
  Trigger: Trigger,
});
```

### 📝 라이선스

@kimyou1102 @ha-kuku
