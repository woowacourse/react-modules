# summit-modal

`summit-modal`은 다양한 모달 UI 컴포넌트를 제공하는 라이브러리에요.

## 설치 방법

```bash
npm i summit-modal
```

## 모달 종류

|   모달 종류    | 외부 클릭으로 닫기 | ESC 키로 닫기 |                                     설명                                      |
| :------------: | :----------------: | :-----------: | :---------------------------------------------------------------------------: |
|    `Modal`     |         ✅         |      ✅       | 다양한 형태의 모달 창을 구현할 때 사용하는 기본 모달 레이아웃 컴포넌트입니다. |
|  `AlertModal`  |         ✅         |      ✅       |             사용자에게 메시지를 전달하고 확인 버튼만 제공합니다.              |
| `ConfirmModal` |         ✅         |      ✅       |          사용자에게 선택지를 제공하고 확인 및 취소 버튼 제공합니다.           |
| `PromptModal`  |        ⛔️         |      ⛔️      |   사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/취소 버튼 제공합니다.   |

## `Modal` 컴포넌트

### 인터페이스

```ts
interface ModalProps {
  title: string;
  onRequestClose: () => void;
  position?: "center" | "bottom"; // 기본 값은 center입니다.
  size?: "small" | "medium" | "large"; // 기본 값은 medium입니다.
  children?: ReactNode;
}
```

### 파라미터

- title: 모달 상단에 표시할 제목입니다.
- onRequestClose: 모달 닫기 시 호출되는 콜백 함수입니다.
- position: 모달의 위치를 설정합니다.
- size: 모달의 크기를 설정합니다.(position이 bottom인 경우 size의 속성은 무시됩니다.)
- children: 모달 내부에 들어갈 요소입니다.

### 기능 설명

- 모달이 열린 상태에서 모달 외부 영역(Backdrop 영역)을 클릭하면 모달이 닫힌다.
- 모달이 열린 상태에서 ESC 키 입력 시 모달이 닫힌다.

### 사용 예시

```tsx
import { Modal } from "summit-modal"; // Modal 컴포넌트를 불러옵니다.

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
        <Modal
          title="예시 제목"
          onRequestClose={handleCloseModal}
          position="center"
          size="large"
        >
          <div>모달 내용입니다.</div>
        </Modal>
      )}
    </div>
  );
}
```

## `AlertModal` 컴포넌트

### 인터페이스

```ts
interface AlertModalProps {
  title: string;
  alertText: string;
  onRequestClose: () => void;
  size?: "small" | "medium" | "large"; // 기본 값은 medium입니다.
}
```

### 파라미터

- title: 모달 상단에 표시할 제목입니다.
- alertText: 사용자에게 전달할 경고 또는 안내 메시지입니다.
- onRequestClose: 모달 닫기 시 호출되는 콜백 함수입니다.
- size: 모달의 크기를 설정합니다.

### 기능 설명

- 모달이 열린 상태에서 모달 외부 영역(Backdrop 영역)을 클릭하면 모달이 닫힌다.
- 모달이 열린 상태에서 ESC 키 입력 시 모달이 닫힌다.

### 사용 예시

```tsx
import { AlertModal } from "summit-modal"; // AlertModal 컴포넌트를 불러옵니다.

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
        <AlertModal
          title="아이디를 입력해 주세요."
          alertText="아이디는 필수로 입력해야 합니다."
          onRequestClose={handleCloseModal}
          size="large"
        />
      )}
    </div>
  );
}
```

## `ConfirmModal` 컴포넌트

### 인터페이스

```ts
interface ConfirmModalProps {
  title: string;
  confirmText: string;
  size?: "small" | "medium" | "large"; // 기본 값은 medium입니다.
  onRequestClose: () => void;
  onConfirm: () => void;
}
```

### 파라미터

- title: 모달 상단에 표시할 제목입니다.
- confirmText: 용자에게 안내하거나 확인을 요청하는 메시지입니다.
- size: 모달의 크기를 설정합니다.
- onRequestClose: 모달 닫기 시 호출되는 콜백 함수입니다.
- onConfirm: 확인 버튼 클릭 시 호출되는 콜백 함수입니다.

### 기능 설명

- 모달이 열린 상태에서 모달 외부 영역(Backdrop 영역)을 클릭하면 모달이 닫힌다.
- 모달이 열린 상태에서 ESC 키 입력 시 모달이 닫힌다.

### 사용 예시

```tsx
import { ConfirmModal } from "summit-modal"; // ConfirmModal 컴포넌트를 불러옵니다.

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
        <ConfirmModal
          title="카드를 삭제하시겠습니까?"
          alertText="삭제하면 복구하실 수 없습니다."
          size="medium"
          onRequestClose={handleCloseModal}
          onConfirm={() => console.log("카드가 삭제되었습니다.")}
        />
      )}
    </div>
  );
}
```

## `PromptModal` 컴포넌트

### 인터페이스

```ts
interface PromptModalProps {
  title: string;
  size?: ModalSizeType;
  inputAttributes?: ComponentProps<"input">;
  onRequestClose: () => void;
  onSubmit: (value: string) => void;
}
```

### 파라미터

- title: 모달 상단에 표시할 제목입니다.
- size: 모달의 크기를 설정합니다.
- inputAttributes: 모달 내부의 입력 필드(input)에 적용할 속성(props) 객체입니다.
  - ex) `placeholder`, `type`, `maxLength` 등 다양한 input 속성을 지정할 수 있습니다.
- onRequestClose: 모달 닫기 시 호출되는 콜백 함수입니다.
- onSubmit: 확인 버튼 클릭 시 입력 필드의 값을 인자로 받아 호출되는 콜백 함수입니다.

### 기능 설명

- 사용자가 입력 필드에 값을 입력한 후, 확인 버튼을 클릭하면 해당 input의 value가 onSubmit 함수로 전달됩니다.

- `PromptModal`은 실수로 인한 데이터 손실을 방지하기 위해, 모달 외부 영역 클릭이나 ESC 키 입력으로는 닫히지 않습니다.

### 사용 예시

```tsx
import { PromptModal } from "summit-modal"; // PromptModal 컴포넌트를 불러옵니다.

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
        <PromptModal
          title="쿠폰 번호를 입력해 주세요."
          size="medium"
          inputAttributes={{
            placeholder: "쿠폰 번호를 입력해 주세요.",
            type: "text",
            maxLength: 8,
            required,
          }}
          onRequestClose={handleCloseModal}
          onSubmit={(value) => console.log(`입력 값은 ${value}입니다.`)}
        />
      )}
    </div>
  );
}
```
