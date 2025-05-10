# React Modal Component

심플하고 커스터마이징 가능한 React 모달 컴포넌트입니다. 중앙 또는 하단에 위치시킬 수 있으며 다양한 유형의 모달(Alert, Confirm, Prompt)을 제공합니다.

## 설치

```bash
npm install db0111-react-modal
# 또는
yarn add db0111-react-modal
```

## 기본 모달 사용 방법

기본적인 사용 예시:

```jsx
import { useState } from "react";
import Modal from "db0111-react-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>

      <Modal
        position="center"
        size="medium"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <Modal.Title>안녕하세요!</Modal.Title>
        <Modal.Description>이것은 모달 컴포넌트 예시입니다.</Modal.Description>
        <Modal.Actions>
          <Modal.CloseButton onClick={closeModal}>닫기</Modal.CloseButton>
          <Modal.ConfirmButton onClick={closeModal}>확인</Modal.ConfirmButton>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
```

## 특수 모달 컴포넌트

라이브러리는 세 가지 특수 모달 컴포넌트를 제공합니다:

### AlertModal

확인 버튼만 있는 간단한 알림 모달입니다:

```jsx
import { useState } from "react";
import { AlertModal } from "db0111-react-modal";

function App() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert = () => setIsAlertOpen(true);
  const closeAlert = () => setIsAlertOpen(false);

  return (
    <div>
      <button onClick={openAlert}>알림 모달 열기</button>

      <AlertModal
        position="center"
        size="medium"
        isOpen={isAlertOpen}
        onClose={closeAlert}
        onConfirm={closeAlert}
        title="알림"
        description="작업이 성공적으로 완료되었습니다."
        confirmText="확인"
      />
    </div>
  );
}
```

### ConfirmModal

확인 및 취소 버튼이 있는 선택 모달입니다:

```jsx
import { useState } from "react";
import { ConfirmModal } from "db0111-react-modal";

function App() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const openConfirm = () => setIsConfirmOpen(true);
  const closeConfirm = () => setIsConfirmOpen(false);
  const handleConfirm = () => {
    // 확인 시 실행할 작업
    closeConfirm();
  };

  return (
    <div>
      <button onClick={openConfirm}>확인 모달 열기</button>

      <ConfirmModal
        position="center"
        size="medium"
        isOpen={isConfirmOpen}
        onClose={closeConfirm}
        onConfirm={handleConfirm}
        title="확인"
        description="정말로 이 작업을 수행하시겠습니까?"
        confirmText="확인"
        cancelText="취소"
      />
    </div>
  );
}
```

### PromptModal

입력 필드와 확인/취소 버튼이 있는 모달입니다:

```jsx
import { useState } from "react";
import { PromptModal } from "db0111-react-modal";

function App() {
  const [isPromptOpen, setIsPromptOpen] = useState(false);

  const openPrompt = () => setIsPromptOpen(true);
  const closePrompt = () => setIsPromptOpen(false);
  const handleConfirm = () => {
    // 입력값 처리 후 모달 닫기
    closePrompt();
  };

  return (
    <div>
      <button onClick={openPrompt}>프롬프트 모달 열기</button>

      <PromptModal
        position="center"
        size="medium"
        isOpen={isPromptOpen}
        onClose={closePrompt}
        onConfirm={handleConfirm}
        title="입력"
        description="내용을 입력해주세요."
        confirmText="확인"
        cancelText="취소"
      />
    </div>
  );
}
```

## Props

### 기본 Modal Props

| Props      | 타입                                 | 기본값     | 설명                                |
| ---------- | ------------------------------------ | ---------- | ----------------------------------- |
| `position` | `"center"` \| `"bottom"`             | 필수       | 모달의 위치를 지정합니다.           |
| `size`     | `"small"` \| `"medium"` \| `"large"` | `"medium"` | 모달의 크기를 지정합니다.           |
| `isOpen`   | `boolean`                            | 필수       | 모달의 열림/닫힘 상태를 제어합니다. |
| `children` | `ReactNode`                          | `null`     | 모달 내부에 표시될 콘텐츠입니다.    |
| `onClose`  | `() => void`                         | 필수       | 모달이 닫힐 때 실행될 함수입니다.   |

### 특수 모달 컴포넌트 Props

| Props         | 타입                                 | 기본값     | 설명                                       |
| ------------- | ------------------------------------ | ---------- | ------------------------------------------ |
| `position`    | `"center"` \| `"bottom"`             | `"center"` | 모달의 위치를 지정합니다.                  |
| `size`        | `"small"` \| `"medium"` \| `"large"` | `"medium"` | 모달의 크기를 지정합니다.                  |
| `isOpen`      | `boolean`                            | 필수       | 모달의 열림/닫힘 상태를 제어합니다.        |
| `onClose`     | `() => void`                         | 필수       | 모달이 닫힐 때 실행될 함수입니다.          |
| `onConfirm`   | `() => void`                         | 필수       | 확인 버튼 클릭 시 실행될 함수입니다.       |
| `title`       | `string`                             | 필수       | 모달의 제목입니다.                         |
| `description` | `string`                             | 선택       | 모달의 설명 텍스트입니다.                  |
| `confirmText` | `string`                             | `"확인"`   | 확인 버튼의 텍스트입니다.                  |
| `cancelText`  | `string`                             | `"취소"`   | 취소 버튼의 텍스트입니다(AlertModal 제외). |

## 예시

### 기본 모달 컴포넌트 사용

#### 중앙 위치 모달

```jsx
<Modal position="center" size="medium" isOpen={isOpen} onClose={handleClose}>
  <Modal.Title>중앙 모달</Modal.Title>
  <Modal.Description>이 모달은 화면 중앙에 표시됩니다.</Modal.Description>
  <Modal.Actions>
    <Modal.ConfirmButton onClick={handleConfirm}>확인</Modal.ConfirmButton>
  </Modal.Actions>
</Modal>
```

#### 하단 위치 모달

```jsx
<Modal position="bottom" size="large" isOpen={isOpen} onClose={handleClose}>
  <Modal.Title>하단 모달</Modal.Title>
  <Modal.Description>이 모달은 화면 하단에 표시됩니다.</Modal.Description>
  <Modal.Actions>
    <Modal.CloseButton onClick={handleClose}>닫기</Modal.CloseButton>
  </Modal.Actions>
</Modal>
```

#### 입력 필드가 있는 모달

```jsx
<Modal position="center" size="medium" isOpen={isOpen} onClose={handleClose}>
  <Modal.Title>입력 모달</Modal.Title>
  <Modal.Description>아래에 정보를 입력하세요.</Modal.Description>
  <Modal.Input />
  <Modal.Actions>
    <Modal.CloseButton onClick={handleClose}>취소</Modal.CloseButton>
    <Modal.ConfirmButton onClick={handleSubmit}>제출</Modal.ConfirmButton>
  </Modal.Actions>
</Modal>
```

### 특수 모달 컴포넌트 사용

#### 작은 사이즈의 경고 모달

```jsx
<AlertModal
  position="center"
  size="small"
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleConfirm}
  title="주의"
  description="저장되지 않은 변경사항이 있습니다."
  confirmText="알겠습니다"
/>
```

#### 큰 사이즈의 확인 모달

```jsx
<ConfirmModal
  position="center"
  size="large"
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleConfirm}
  title="삭제 확인"
  description="이 항목을 삭제하시겠습니까? 이 작업은 취소할 수 없습니다."
  confirmText="삭제"
  cancelText="취소"
/>
```

#### 하단에 위치한 프롬프트 모달

```jsx
<PromptModal
  position="bottom"
  size="medium"
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleSubmit}
  title="이름 입력"
  description="이름을 입력해주세요."
  confirmText="저장"
  cancelText="취소"
/>
```

## 스타일링

이 컴포넌트는 [@emotion/styled](https://emotion.sh/docs/styled)를 사용하여 스타일링되었습니다. 모달 스타일을 사용자 정의하려면 라이브러리 설치가 필요합니다:

```bash
npm install @emotion/styled @emotion/react
# 또는
yarn add @emotion/styled @emotion/react
```

컴포넌트를 확장하여 커스텀 스타일을 적용할 수 있습니다:

```jsx
import Modal from "db0111-react-modal";
import styled from "@emotion/styled";

const CustomModal = styled(Modal)`
  & > div {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
`;

// 사용
<CustomModal
  position="center"
  size="medium"
  isOpen={isOpen}
  onClose={handleClose}
>
  <Modal.Title>커스텀 스타일 모달</Modal.Title>
  <Modal.Description>스타일이 커스터마이징된 모달입니다.</Modal.Description>
  <Modal.Actions>
    <Modal.ConfirmButton onClick={handleClose}>확인</Modal.ConfirmButton>
  </Modal.Actions>
</CustomModal>;
```

특수 모달 컴포넌트도 유사하게 스타일링할 수 있습니다:

```jsx
import { AlertModal } from "db0111-react-modal";
import styled from "@emotion/styled";

const CustomAlertModal = styled(AlertModal)`
  & > div {
    background-color: #fff8e1;
    border: 2px solid #ffca28;
  }
`;

// 사용
<CustomAlertModal
  position="center"
  size="medium"
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleConfirm}
  title="커스텀 알림"
  description="스타일이 커스터마이징된 알림입니다."
/>;
```
