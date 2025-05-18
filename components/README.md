# oa-modal-components

> 간단하게 사용할 수 있는 모달 컴포넌트와 관련 훅을 제공합니다.
> <br />
> 사용자는 모달의 열고 닫힘의 동작, 기본적인 모달 UI에 신경쓸 필요 없이 Modal 컴포넌트와 useModalContext 훅만으로 모달 구현이 가능합니다.

## 📦 Install

```bash
npm install oa-modal-components
```

---

## ✨ 제공 기능

- `Modal` - 모달 컴포넌트
  - `modalPosition`: 중앙 / 하단 모달
  - `modalType` : 확인(Alert) / 확인/취소(Confirm) / 입력(Prompt) 모달
  - `modalSize` : small / medium / large 모달
- `useModalContext` - 모달 제어 훅
  - `openModalHandler` : 모달을 여는 함수
  - `closeModalHandler` : 모달을 닫는 함수
- `ModalProvider` - 모달 컨텍스트 제공자
- `ModalInput` - 모달 입력 컴포넌트
- `useInput` - 입력값 관리 훅

---

## 🔧 ModalProvider Props

모달의 상태와 설정을 관리합니다:

| Prop                     | Type                                                  | Description                                  |
| ------------------------ | ----------------------------------------------------- | -------------------------------------------- |
| `modalPosition`          | `'center'` \| `'bottom'`                              | 모달 위치 설정                               |
| `modalType` _(optional)_ | `'default'` \| `'alert'` \| `'confirm'` \| `'prompt'` | 모달 타입 설정 (기본값: 'default')           |
| `modalSize` _(optional)_ | `'small'` \| `'medium'` \| `'large'`                  | 모달 크기 설정 (기본값: 'medium')            |
| `titleText` _(optional)_ | `string`                                              | 모달의 제목 (기본값: '')                     |
| `closeType`              | `'top'` \| `'bottom'` \| `'none'`                     | 닫기 버튼 위치 설정                          |
| `onClose` _(optional)_   | `() => void`                                          | 모달이 닫히기 전에 실행되는 사용자 정의 함수 |
| `children`               | `ReactNode`                                           | 모달 컨텍스트 내부에 위치할 컴포넌트         |

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
import { Modal, ModalProvider, useModalContext } from 'oa-modal-components';
import './App.css';

function App() {
  return (
    <ModalProvider modalPosition="center" closeType="top" titleText="카드사 선택">
      <ModalExample />
    </ModalProvider>
  );
}

function ModalExample() {
  const { openModalHandler } = useModalContext();

  const onClickHandler = () => {
    openModalHandler();
  };

  return (
    <>
      <Modal>
        {/* 모달 내용 */}
        <div>모달 내용이 여기에 들어갑니다.</div>
      </Modal>

      <div className="button-container">
        <button className="click-me-button" onClick={onClickHandler}>
          모달 열기
        </button>
      </div>
    </>
  );
}

export default App;
```

## 🔍 추가 기능 활용

### useInput 훅 사용하기

```tsx
import { useInput, ModalInput } from 'oa-modal-components';

function PromptExample() {
  const { inputValue, handleInputChange } = useInput('');

  return (
    <ModalInput value={inputValue} onChange={handleInputChange} placeholder="내용을 입력하세요" />
  );
}
```

---

## 🪪 License

MIT
