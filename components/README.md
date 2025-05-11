## 세오의 React Modal 라이브러리

React Portal을 활용하여 `document.body`에 모달을 렌더링하는 유연하고 가벼운 모달 컴포넌트입니다.
중앙 모달, 바텀시트 모달을 기본으로 제공하며, ESC 키 닫기, 스크롤 락 기능이 내장되어 있습니다.
또한, 간편하게 사용할 수 있는 AlertModal, ConfirmModal, PromptModal을 제공합니다.

## 주요 기능

- `React.createPortal` 기반의 안정적인 모달 렌더링
- 중앙 모달 / 바텀시트 형식 기본 제공
- ESC 키를 누르면 모달 자동 닫힘
- 모달 열림 시 배경 스크롤 차단
- 백드롭 클릭 시 닫기 기능 포함
- emotion 기반의 스타일 구성
- `AlertModal | ConfirmModal | PromptModal` 모달 제공

## 설치 방법

```bash
npm install @seo_dev/react-modal
# 또는
yarn add @seo_dev/react-modal
```

## 기본 사용 예시

### BaseModal 사용법

```tsx
import Modal from '@seo_dev/react-modal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <button onClick={open}>모달 열기</button>
      {isOpen &
      (
        <Modal onClose={close}>
          <Modal.BackDrop onClose={close} backgroundColor="rgba(0, 0, 0, 0.5)" />
          <Modal.Content position="center">
            <Modal.Title>모달 제목</Modal.Title>
            <p>이곳은 중앙에 위치한 모달입니다.</p>
            <Modal.CloseButton onClick={close}>닫기</Modal.CloseButton>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
}
```

### AlertModal 사용법

```tsx
import AlertModal from '@seo_dev/react-modal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <button onClick={open}>모달 열기</button>
      {isOpen & <AlertModal title="제목을 설정할 수 있습니다." description="설명을 설정할 수 있습니다." onClose={close} onConfirmButtonClick={close} />}
    </>
  );
}
```

### ConfirmModal 사용법

```tsx
import ConfirmModal from '@seo_dev/react-modal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <button onClick={open}>모달 열기</button>
      {isOpen & <ConfirmModal title="제목을 설정할 수 있습니다." description="설명을 설정할 수 있습니다." onClose={close} onConfirmButtonClick={close} />}
    </>
  );
}
```

### PromptModal 사용법

```tsx
import PromptModal from '@seo_dev/react-modal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <button onClick={open}>모달 열기</button>
      {isOpen & <ConfirmModal title="제목을 설정할 수 있습니다." onClose={close} onPromptButtonClick={close} />}
    </>
  );
}
```

## 다양한 사용 예시

### 중앙 모달 (Centered Modal)

```tsx
<Modal onClose={close}>
  <Modal.BackDrop onClose={close} backgroundColor="rgba(0, 0, 0, 0.6)" />
  <Modal.Content position="center" style={{ width: '300px', height: '300px' }}>
    <Modal.Title>중앙 모달</Modal.Title>
    <p>이곳은 중앙에 위치한 모달입니다.</p>
    <Modal.CloseButton onClick={close}>닫기</Modal.CloseButton>
  </Modal.Content>
</Modal>
```

### 바텀시트 모달 (Bottom Sheet Modal)

```tsx
<Modal onClose={close}>
  <Modal.BackDrop onClose={close} backgroundColor="rgba(0, 0, 0, 0.6)" />
  <Modal.Content position="bottom" style={{ height: '300px', width: '100%' }}>
    <Modal.Title>바텀 시트</Modal.Title>
    <p>이 모달은 화면 하단에서 올라옵니다.</p>
    <Modal.Button onClick={close}>확인</Modal.Button>
  </Modal.Content>
</Modal>
```

### size별 모달 (small,medium,large)

small,medium,large별로 사이즈를 모달의 사이즈를 조정할 수 있습니다.
각각의 사이즈는 320px, 480px, 600px 입니다.

`BaseModal 예시`

```tsx
<Modal onClose={close}>
  <Modal.BackDrop onClose={close} backgroundColor="rgba(0, 0, 0, 0.6)" />
  <Modal.Content size={size} position={position}>
    <Modal.Title>바텀 시트</Modal.Title>
    <p>이 모달은 화면 하단에서 올라옵니다.</p>
    <Modal.Button onClick={close}>확인</Modal.Button>
  </Modal.Content>
</Modal>
```

`AlertModal | ConfirmModal | PromptModal 예시`

```tsx
<AlertModal title="제목을 정합니다." description="설명을 정합니다." onClose={close} onConfirmButtonClick={close} size="small" />
```

## props 구성

### AlertModal, ConfirmModal

| props                     | 설명                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| \* `title`                | 제목을 넣는 곳입니다. (필수항목)                                                                   |
| \* `description`          | 설명을 넣는 곳입니다. (필수항목)                                                                   |
| \* `onClose`              | 닫기 이벤트를 넣는 곳입니다. (필수항목)                                                            |
| \* `onConfirmButtonClick` | 확인 버튼 클릭 시 이벤트를 넣는 곳입니다. (필수항목)                                               |
| `position`                | 위치를 넣는 곳입니다. 기본값은 `center`이고 `bottom`,`center`가 있습니다. (선택항목)               |
| `size`                    | 모달 사이즈를 넣는 곳입니다. 기본값은 `medium`이고 `small`,`medium`,`large`가 있습니다. (선택항목) |

### PromptModal

| props                     | 설명                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| \* `title`                | 제목을 넣는 곳입니다. (필수항목)                                                                   |
| \* `onClose`              | 닫기 이벤트를 넣는 곳입니다. (필수항목)                                                            |
| \* `onConfirmButtonClick` | 확인 버튼 클릭 시 이벤트를 넣는 곳입니다. (필수항목)                                               |
| `position`                | 위치를 넣는 곳입니다. 기본값은 `center`이고 `bottom`,`center`가 있습니다. (선택항목)               |
| `size`                    | 모달 사이즈를 넣는 곳입니다. 기본값은 `medium`이고 `small`,`medium`,`large`가 있습니다. (선택항목) |

## 컴포넌트 구성

| 컴포넌트            | 설명                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| `Modal`             | 모달 루트 컴포넌트. `onClose` prop은 필수입니다. 내부적으로 ESC 키와 스크롤 차단을 처리합니다.  |
| `Modal.BackDrop`    | 배경 오버레이. `backgroundColor`, `onClose`를 받을 수 있습니다. 바깥 클릭 시 닫기를 처리합니다. |
| `Modal.Content`     | 모달 콘텐츠 박스. `position`(`center` or `bottom`) 지정 가능합니다.                             |
| `Modal.Title`       | 제목 영역용 컴포넌트입니다.                                                                     |
| `Modal.CloseButton` | 닫기 버튼으로 사용할 수 있는 컴포넌트입니다. `onClick`은 필수입니다.                            |
| `Modal.Button`      | 확인 등의 용도에 사용할 수 있는 일반 버튼입니다.                                                |

## 주의 사항

- `Modal`은 열고/닫는 상태를 내장하지 않습니다. `useState`를 사용하여 직접 열고 닫는 로직을 구성해야 합니다.

## 라이선스

MIT License

© 2025 jin123457
