# bunju-summit-modal

`Modal` 컴포넌트는 모달의 기본 요소(모달 띄우기, 모달 닫기 버튼, 모달 제목)을 제공하고 사용자가 내부 요소를 넣을 수 있게 설계 되었습니다.

## 설치 방법

```bash
npm i bunju-summit-modal
# 또는
yarn add bunju-summit-modal
# 또는
pnpm add bunju-summit-modal
```

## 인터페이스

- onClose: 모달 닫기 시 호출되는 함수
- position: 모달 위치 설정 (`center` | `bottom`):
- children: 모달 내부에 들어갈 요소

```ts
interface ModalProps {
  title: string;
  onClose: () => void;
  position?: "center" | "bottom"; // 기본 값은 center입니다.
  children?: ReactNode;
}
```

## 기능 설명

- 모달이 열린 상태에서 모달 외부 영역(Backdrop 영역)을 클릭하면 모달이 닫힌다.
- 모달이 열린 상태에서 ESC 키 입력 시 모달이 닫힌다.

## 사용 예시

```tsx
import { Modal } from "bunju-summit-modal"; // Modal 컴포넌트를 불러옵니다.
import React from "react"; // React 추가

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>모달 열기</button>
      {isOpen && (
        <Modal onClose={handleCloseModal} position="bottom">
          <Modal.Header>
            <Modal.Title>예시 제목</Modal.Title>
            <Modal.CloseButton onClick={handleCloseModal} />
          </Modal.Header>
          <Modal.Content>
            <div>모달 내용입니다.</div>
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
}

export default App;
```
