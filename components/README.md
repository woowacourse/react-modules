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
  - 중앙 모달
  - 하단 모달
- `useModal` - 모달 제어 훅
  - `openModalHandler` : 모달을 여는 함수
  - `closeModalHandler` : 모달을 닫는 함수

---

## 🔧 ModalComponent Props

모달의 형태와 내용을 구성합니다:

| Prop                     | Type                     | Description                                  |
| ------------------------ | ------------------------ | -------------------------------------------- |
| `modalType`              | `'center'` \| `'bottom'` | 모달 위치 설정                               |
| `titleText` _(optional)_ | `string`                 | 모달의 제목                                  |
| `children`               | `ReactNode`              | 모달에 들어갈 내용                           |
| `closeType`              | `'top'` \| `'bottom'`    | 닫기 버튼 위치 설정                          |
| `onClose` _(optional)_   | `() => void`             | 모달이 닫히기 전에 실행되는 사용자 정의 함수 |

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
