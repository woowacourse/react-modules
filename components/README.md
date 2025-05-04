## 📦 @hakukudh/modal-components

React 프로젝트에서 간편하게 모달 UI를 구성할 수 있는 모달 컴포넌트 모듈입니다.
다양한 위치 설정과 컴포넌트 분리 설계를 통해 유연하게 사용할 수 있습니다.

### 설치

```TypeScript
npm install @hakukudh/modal-components
# 또는
yarn add @hakukudh/modal-components
```

### 빠른 시작

```TypeScript
import { Modal } from '@hakukudh/modal-components';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열림!</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.ModalContainer isOpen={isOpen} position="top" width={400}>
          <>
            <Modal.ModalCloseButton onClose={onClose} />
            <Modal.ModalTitle>제목</Modal.ModalTitle>
            <Modal.ModalBody>내용1!</Modal.ModalBody>
          </>
        </Modal.ModalContainer>
      </Modal>
    </>
  );
}
```

### 구성 요소

Modal
최상위 모달 컴포넌트입니다. isOpen, position, width를 props로 받습니다.

| 이름       | 타입                            | 필수 | 설명                                |
| ---------- | ------------------------------- | ---- | ----------------------------------- |
| `isOpen`   | `boolean`                       | ✅   | 모달의 열림 여부                    |
| `position` | `'top' \| 'bottom' \| 'center'` | ✅   | 모달의 위치                         |
| `width`    | `number`                        | ❌   | center 위치일 경우 모달의 너비 (px) |

- Modal.ModalContainer
  모달의 내부 구조를 감싸는 컨테이너입니다. 내부에 타이틀, 본문, 버튼 등을 배치할 수 있습니다.

- Modal.ModalTitle
  모달의 제목을 표시하는 컴포넌트입니다. 일반적으로 가장 상단에 배치합니다.

- Modal.ModalBody
  모달 본문에 들어갈 내용을 표시하는 영역입니다.

- Modal.ModalCloseButton
  모달을 닫기 위한 버튼입니다. onClick 이벤트 핸들러를 통해 닫기 기능을 구현합니다.

```tsx
<Modal.ModalCloseButton onClick={() => setIsOpen(false)} />
```

### 스타일 커스터마이징

position에 따라 모달의 위치 및 border-radius가 자동 조정됩니다.

center일 경우 width 값을 통해 너비를 설정할 수 있습니다.

styled-components 기반이므로 ModalContainer 등 하위 컴포넌트를 확장하여 스타일 커스터마이징도 가능합니다.

### 내부 구조

```TypeScript
export const Modal = Object.assign(ModalOverlay, {
  ModalContainer,
  ModalBody,
  ModalCloseButton,
  ModalTitle,
});
```

### 📝 라이선스

@kimyou1102 @ha-kuku
