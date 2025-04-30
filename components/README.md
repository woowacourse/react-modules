# React Modal Component

심플하고 커스터마이징 가능한 React 모달 컴포넌트입니다. 중앙 또는 하단에 위치시킬 수 있으며 확인 및 닫기 버튼 옵션을 제공합니다.

## 설치

```bash
npm install db0111-react-modal
# 또는
yarn add db0111-react-modal
```

## 사용 방법

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
        isOpen={isModalOpen}
        onClose={closeModal}
        isCloseButton={true}
      >
        <h2>안녕하세요!</h2>
        <p>이것은 모달 컴포넌트 예시입니다.</p>
      </Modal>
    </div>
  );
}
```

## Props

| Props             | 타입                     | 기본값  | 설명                                |
| ----------------- | ------------------------ | ------- | ----------------------------------- |
| `position`        | `"center"` \| `"bottom"` | 필수    | 모달의 위치를 지정합니다.           |
| `isOpen`          | `boolean`                | 필수    | 모달의 열림/닫힘 상태를 제어합니다. |
| `isCloseButton`   | `boolean`                | `false` | 닫기 버튼 표시 여부를 설정합니다.   |
| `isConfirmButton` | `boolean`                | `false` | 확인 버튼 표시 여부를 설정합니다.   |
| `children`        | `ReactNode`              | `null`  | 모달 내부에 표시될 콘텐츠입니다.    |
| `onClose`         | `() => void`             | 필수    | 모달이 닫힐 때 실행될 함수입니다.   |

## 예시

### 중앙 위치 모달

기본적으로 모달을 화면 중앙에 표시합니다:

```jsx
<Modal
  position="center"
  isOpen={isOpen}
  onClose={handleClose}
  isConfirmButton={true}
>
  <h2>중앙 모달</h2>
  <p>이 모달은 화면 중앙에 표시됩니다.</p>
</Modal>
```

### 하단 위치 모달

모달을 화면 하단에 표시합니다:

```jsx
<Modal
  position="bottom"
  isOpen={isOpen}
  onClose={handleClose}
  isCloseButton={true}
>
  <h2>하단 모달</h2>
  <p>이 모달은 화면 하단에 표시됩니다.</p>
</Modal>
```

### 확인 및 닫기 버튼 모두 사용

두 버튼을 모두 표시하는 예시:

```jsx
<Modal
  position="center"
  isOpen={isOpen}
  onClose={handleClose}
  isConfirmButton={true}
  isCloseButton={true}
>
  <h2>선택 모달</h2>
  <p>확인 또는 닫기를 선택할 수 있습니다.</p>
</Modal>
```

### 버튼 없는 모달

버튼 없이 콘텐츠만 표시:

```jsx
<Modal position="center" isOpen={isOpen} onClose={handleClose}>
  <h2>버튼 없는 모달</h2>
  <p>이 모달은 버튼이 없습니다.</p>
  <button onClick={handleClose}>커스텀 닫기</button>
</Modal>
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
  }
`;

// 사용
<CustomModal position="center" isOpen={isOpen} onClose={handleClose}>
  <h2>커스텀 스타일 모달</h2>
</CustomModal>;
```

## 구현 세부 사항

### 컴포넌트 구조

모달 컴포넌트는 다음 요소로 구성됩니다:

1. `ModalLayout`: 전체 화면을 덮는 오버레이 배경
2. `ModalContainer`: 실제 모달 콘텐츠를 포함하는 컨테이너
3. `ButtonWrap`: 확인 및 닫기 버튼을 포함하는 래퍼
4. `ConfirmButton` & `CloseButton`: 액션 버튼들
