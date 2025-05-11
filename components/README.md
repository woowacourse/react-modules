# bunju-react-modal

`Modal` 컴포넌트는 다양한 유형과 크기의 모달을 제공하는 컴포넌트 라이브러리입니다. 이 라이브러리는 복합 컴포넌트 패턴을 사용하여 사용자가 모달의 각 부분을 유연하게 구성할 수 있도록 설계되었습니다.

## 설치 방법

```bash
npm i bunju-react-modal
# 또는
yarn add bunju-react-modal
# 또는
pnpm add bunju-react-modal
```

## 인터페이스

### Modal 컴포넌트

```ts
export type ModalType = "alert" | "confirm" | "prompt";
export type ModalSizeType = "small" | "medium" | "large";
export type ModalPositionType = "bottom" | "center";

export interface ModalProps {
  onClose: () => void;
  modalType?: ModalType;
  modalSize?: ModalSizeType;
  position?: ModalPositionType;
}
```

- `onClose`: 모달 닫기 시 호출되는 함수
- `modalType`: 모달 타입 설정 (`alert` | `confirm` | `prompt`, 기본값: `alert`)
- `modalSize`: 모달 크기 설정 (`small` | `medium` | `large`, 기본값: `medium`)
- `position`: 모달 위치 설정 (`center` | `bottom`, 기본값: `center`)
- `children`: 모달 내부에 들어갈 요소

### 서브 컴포넌트

Modal 컴포넌트는 다음과 같은 서브 컴포넌트를 제공합니다:

1. `Modal.Header`: 모달 헤더 영역
2. `Modal.Title`: 모달 제목
3. `Modal.CloseButton`: 모달 닫기 버튼
4. `Modal.Content`: 모달 내용 영역
5. `Modal.Input`: 모달 내 입력 필드 (prompt 타입에서 사용)
6. `Modal.Footer`: 모달 하단 영역
7. `Modal.Button`: 모달 내 버튼

## 기능 설명

- 모달이 열린 상태에서 모달 외부 영역(Backdrop 영역)을 클릭하면 모달이 닫힙니다.
- 모달이 열린 상태에서 ESC 키 입력 시 모달이 닫힙니다.
- 접근성을 위한 포커스 트랩 기능을 제공합니다.
- ARIA 속성을 사용하여 스크린 리더 사용자에게 모달임을 알립니다.

## 사용 예시

### 기본 사용법

```tsx
import { Modal } from "bunju-react-modal";
import React from "react";

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
        <Modal onClose={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>예시 제목</Modal.Title>
            <Modal.CloseButton onClick={handleCloseModal} />
          </Modal.Header>
          <Modal.Content>
            <div>모달 내용입니다.</div>
          </Modal.Content>
          <Modal.Footer>
            <Modal.Button onClick={handleCloseModal}>닫기</Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default App;
```

### 위치가 다른 모달

```tsx
import { Modal } from "bunju-summit-modal";
import React from "react";

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
            <Modal.Title>바텀 모달</Modal.Title>
            <Modal.CloseButton onClick={handleCloseModal} />
          </Modal.Header>
          <Modal.Content>
            <div>화면 하단에 위치한 모달입니다.</div>
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
}

export default App;
```

### 확인 모달 (confirm)

```tsx
import { Modal } from "bunju-summit-modal";
import React from "react";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log("확인되었습니다.");
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>확인 모달 열기</button>
      {isOpen && (
        <Modal onClose={handleCloseModal} modalType="confirm" modalSize="small">
          <Modal.Header>
            <Modal.Title>확인 필요</Modal.Title>
            <Modal.CloseButton onClick={handleCloseModal} />
          </Modal.Header>
          <Modal.Content>
            <div>이 작업을 진행하시겠습니까?</div>
          </Modal.Content>
          <Modal.Footer>
            <Modal.Button onClick={handleCloseModal}>취소</Modal.Button>
            <Modal.Button primary onClick={handleConfirm}>
              확인
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default App;
```

### 입력 모달 (prompt)

```tsx
import { Modal } from "bunju-summit-modal";
import React from "react";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("입력값:", inputValue);
    setIsOpen(false);
    setInputValue("");
  };

  return (
    <div>
      <button onClick={handleOpenModal}>입력 모달 열기</button>
      {isOpen && (
        <Modal onClose={handleCloseModal} modalType="prompt" modalSize="medium">
          <Modal.Header>
            <Modal.Title>정보 입력</Modal.Title>
            <Modal.CloseButton onClick={handleCloseModal} />
          </Modal.Header>
          <Modal.Content>
            <div>아래에 정보를 입력해주세요:</div>
            <Modal.Input
              value={inputValue}
              onChange={handleInputChange}
              placeholder="여기에 입력하세요"
            />
          </Modal.Content>
          <Modal.Footer>
            <Modal.Button onClick={handleCloseModal}>취소</Modal.Button>
            <Modal.Button primary onClick={handleSubmit}>
              제출
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default App;
```
