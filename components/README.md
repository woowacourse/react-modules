## 메타 세오의 React Modal 라이브러리

React Portal을 활용하여 `document.body`에 모달을 렌더링하는 유연하고 가벼운 모달 컴포넌트입니다.
중앙 모달, 바텀시트 모달을 기본으로 제공하며, ESC 키 닫기, 스크롤 락 기능이 내장되어 있습니다.

## 주요 기능

- `React.createPortal` 기반의 안정적인 모달 렌더링
- 중앙 모달 / 바텀시트 형식 기본 제공
- ESC 키를 누르면 모달 자동 닫힘
- 모달 열림 시 배경 스크롤 차단
- 백드롭 클릭 시 닫기 기능 포함
- emotion 기반의 스타일 구성

## 설치 방법

```bash
npm install seo-meta-react-modal
# 또는
yarn add seo-meta-react-modal
```

## 기본 사용 예시

```tsx
import Modal from 'seo-meta-react-modal';
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

© 2025 youdame, jin123457
