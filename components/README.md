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
  isOpen: boolean; // isOpen prop 추가
  modalType?: ModalType;
  modalSize?: ModalSizeType;
  position?: ModalPositionType;
}
```

- `onClose`: 모달 닫기 시 호출되는 함수
- `isOpen`: 모달의 열림/닫힘 상태를 제어하는 불리언 값
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
5. `Modal.Input`: 모달 내 입력 필드 (**중요: `prompt` 타입 모달에서만 사용해야 함**)
6. `Modal.Footer`: 모달 하단 영역
7. `Modal.Button`: 모달 내 버튼

## 컴포넌트 사용 제한 사항

### Modal.Input 사용 제한

`Modal.Input` 컴포넌트는 `prompt` 타입 모달에서만 사용하도록 설계되었습니다. 다른 타입의 모달(`alert`, `confirm`)에서 사용할 경우 개발 모드에서 다음과 같은 콘솔 경고가 표시됩니다:

```
Modal.Input은 prompt 타입 모달에서만 사용해야 합니다. 현재 모달 타입: [타입명]
```

이 경고는 개발 모드에서만 표시되며, 사용자가 실제로 `Modal.Input` 컴포넌트와 상호작용할 때(클릭, 포커스, 입력)만 발생합니다. 최상의 사용자 경험과 일관된 디자인을 위해 `Modal.Input`은 항상 `prompt` 타입 모달에서만 사용하는 것이 권장됩니다.


## 기능 설명

- 모달이 열린 상태에서 모달 외부 영역(Backdrop 영역)을 클릭하면 모달이 닫힙니다.
- 모달이 열린 상태에서 ESC 키 입력 시 모달이 닫힙니다.
- 접근성을 위한 포커스 트랩 기능을 제공합니다.
- ARIA 속성을 사용하여 스크린 리더 사용자에게 모달임을 알립니다.
- 개발 모드에서 컴포넌트 사용 제한 경고를 제공합니다.
- 모달 컴포넌트에서 직접 렌더링 여부를 제어하여 코드를 더 깔끔하게 유지할 수 있습니다.

## 스타일 커스터마이징

모든 서브 컴포넌트는 다음과 같은 공통 스타일 props를 제공합니다:
- `className`: CSS 클래스 이름
- `style`: 인라인 스타일 객체
- `as`: 렌더링할 HTML 요소나 컴포넌트

추가로 각 컴포넌트는 자주 사용되는 스타일 속성을 직접 설정할 수 있는 props를 제공합니다:

### Modal.Header

```ts
interface HeaderProps {
  padding?: string;
  borderBottom?: string;
}
```

### Modal.Title

```ts
interface TitleProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}
```

### Modal.CloseButton

```ts
interface CloseButtonProps {
  size?: string;
  color?: string;
}
```

### Modal.Content

```ts
interface ContentProps {
  padding?: string;
}
```

### Modal.Input

```ts
interface InputProps {
  type?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  borderColor?: string;
  focusBorderColor?: string;
  padding?: string;
  disabled?: boolean;
}
```

### Modal.Footer

```ts
interface FooterProps {
  justifyContent?: string;
  padding?: string;
  borderTop?: string;
  gap?: string;
}
```

### Modal.Button

```ts
interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  borderColor?: string;
  disabled?: boolean;
}
```

## 스타일 커스터마이징 예시

```tsx
import { Modal } from "bunju-react-modal";
import React from "react";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>스타일 커스텀 모달 열기</button>
      <Modal 
        isOpen={isOpen} 
        onClose={handleCloseModal}
        modalType="prompt"
        style={{ boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
      >
        <Modal.Header 
          borderBottom="1px solid #eee"
          padding="1rem 1.5rem"
        >
          <Modal.Title 
            fontSize="1.5rem"
            color="#333"
          >
            커스텀 스타일 제목
          </Modal.Title>
          <Modal.CloseButton 
            onClick={handleCloseModal}
            size="20px" 
          />
        </Modal.Header>
        
        <Modal.Content padding="1.5rem">
          <p>스타일 커스터마이징 예시입니다:</p>
          <Modal.Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="여기에 입력하세요"
            borderRadius="8px"
            focusBorderColor="#3498db"
            padding="12px"
          />
        </Modal.Content>
        
        <Modal.Footer
          padding="0 1.5rem 1.5rem"
          gap="1rem"
        >
          <Modal.Button 
            onClick={handleCloseModal}
            borderRadius="8px"
            width="100px"
          >
            취소
          </Modal.Button>
          <Modal.Button 
            primary
            onClick={() => {
              console.log("입력값:", inputValue);
              handleCloseModal();
            }}
            backgroundColor="#3498db"
            borderRadius="8px"
            width="100px"
          >
            확인
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
```
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
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
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
    </div>
  );
}

export default App;
```

### 위치가 다른 모달

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
      <Modal isOpen={isOpen} onClose={handleCloseModal} position="bottom">
        <Modal.Header>
          <Modal.Title>바텀 모달</Modal.Title>
          <Modal.CloseButton onClick={handleCloseModal} />
        </Modal.Header>
        <Modal.Content>
          <div>화면 하단에 위치한 모달입니다.</div>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default App;
```

### 확인 모달 (confirm)

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

  const handleConfirm = () => {
    console.log("확인되었습니다.");
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>확인 모달 열기</button>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        modalType="confirm"
        modalSize="small"
      >
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
    </div>
  );
}

export default App;
```

### 입력 모달 (prompt)

```tsx
import { Modal } from "bunju-react-modal";
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
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        modalType="prompt"
        modalSize="medium"
      >
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
    </div>
  );
}

export default App;
```
