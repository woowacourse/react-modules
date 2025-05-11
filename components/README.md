# laireca-modal-components

> 간단하게 사용할 수 있는 모달 컴포넌트와 관련 훅을 제공합니다.
> <br />
> 사용자는 모달의 열고 닫힘의 동작, 기본적인 모달 UI에 신경쓸 필요 없이 ModalComponent와 useModal 훅만으로 모달 구현이 가능합니다.

## 📦 Install

```bash
npm install laireca-modal-components
```

---

## ✨ 제공 기능

- `ModalComponent` - 모달 컴포넌트
  - `modalPosition`: 중앙 / 하단 모달
  - `modalType` : 확인(Alert) / 확인/취소(Confirm) / 입력(Prompt) 모달
  - `modalSize` : small / medium / large 모달
- `useModal` - 모달 제어 훅
  - `openModalHandler` : 모달을 여는 함수
  - `closeModalHandler` : 모달을 닫는 함수

---

## 🔧 ModalComponent Props

모달의 형태와 내용을 구성합니다:

| Prop                     | Type                                                  | Description                                  |
| ------------------------ | ----------------------------------------------------- | -------------------------------------------- |
| `modalPosition`          | `'center'` \| `'bottom'`                              | 모달 위치 설정                               |
| `modalType`              | `'default'` \| `'alert'` \| `'confirm'` \| `'prompt'` | 모달 타입 설정                               |
| `modalSize` _(optional)_ | `'small'` \| `'medium'` \| `'large'`                  | 모달 크기 설정                               |
| `titleText` _(optional)_ | `string`                                              | 모달의 제목                                  |
| `closeType`              | `'top'` \| `'bottom'` \| `'none'`                     | 닫기 버튼 위치 설정                          |
| `children`               | `ReactNode`                                           | 모달에 들어갈 내용                           |
| `onClose` _(optional)_   | `() => void`                                          | 모달이 닫히기 전에 실행되는 사용자 정의 함수 |

---

## 📋 모달 타입 설명

다양한 상황에 맞는 모달 타입을 제공합니다:

- `default` : 기본 모달로, closeType에 따라 닫기 버튼이 표시됩니다.
- `alert` : 사용자에게 메시지를 전달하고 확인 버튼만 제공하는 모달입니다.
- `confirm` : 사용자에게 선택지를 제공하고 확인 및 취소 버튼을 제공하는 모달입니다.
- `prompt` : 사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/취소 버튼을 제공하는 모달입니다.

---

## 🧪 사용 예시

```tsx
import { ModalComponent, useModal } from 'laireca-modal-components';
import './App.css';

function App() {
  const { openModalHandler } = useModal();

  const onClickHandler = () => {
    openModalHandler();
  };

  return (
    <>
      <ModalComponent modalType="center" closeType="top" titleText="카드사 선택" {...optionalProps}>
        {children}
      </ModalComponent>

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
