# @dev-dino22/modal-components

간단하게 사용할 수 있는 모달 컴포넌트와 관련 훅을 제공합니다.

## 📦 Install

```js
npm install @dev-dino22/modal-components
```

---

## ✨ 제공 기능

- `Modal` - 모달 컴포넌트
  - 중앙 모달
  - 하단 모달
- `useModal` - 모달 제어 훅
  - `isModalOpened`: 모달의 열림/닫힘 상태
  - `openModalHandler` : 모달을 여는 함수
  - `closeModalHandler` : 모달을 닫는 함수

---

## 🔧 ModalComponent Props

모달의 형태와 내용을 구성합니다:

| Prop                     | Type                     | Description                    |
| ------------------------ | ------------------------ | ------------------------------ |
| `modalType`              | `'center'` \| `'bottom'` | 모달 위치 설정                 |
| `titleText` _(optional)_ | `string`                 | 모달의 제목                    |
| `children`               | `ReactNode`              | 모달에 들어갈 내용             |
| `closeType`              | `'top'` \| `'bottom'`    | 닫기 버튼 위치 설정            |
| `onClose`                | `() => void`             | 모달이 닫히기 전에 호출될 함수 |

---

## 🧪 사용 예시

```tsx
import { Modal, useModal } from "./lib";
import "./App.css";

function App({
  modalType,
  closeType,
  titleText,
}: {
  modalType: "center" | "bottom";
  closeType: "top" | "bottom";
  titleText: string;
  children?: React.ReactNode;
}) {
  const { isModalOpened, openModalHandler, closeModalHandler } = useModal();
  const onClickHandler = () => {
    openModalHandler();
  };

  const handleClose = () => {
    console.log("닫힘");
    closeModalHandler();
  };

  return (
    <>
      {isModalOpened && (
        <Modal
          modalType={modalType}
          closeType={closeType}
          titleText={titleText}
          onClose={handleClose}
        >
          <p>Test!!!!!!</p>
          <p>Test!!!!!!</p>
        </Modal>
      )}
      <div className="button-container">
        <button className="click-me-button" onClick={onClickHandler}>
          click me!!
        </button>
      </div>
    </>
  );
}

export default App;
```

---

## 🪪 License

MIT
