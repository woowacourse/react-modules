# choriver-modal-component

## Install

이 라이브러리를 사용하기 위해서는 다음 패키지를 설치해야 합니다:

```bash
npm install choriver-modal-component
```

## Usage

React 컴포넌트에서 모달 라이브러리를 사용하려면 다음 단계를 따르세요

```jsx
import { useModal } from "choriver-modal-component";

function App() {
  const { isOpen, openModal, closeModal, ModalComponent } = useModal();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <ModalComponent
        modalPosition="bottom"
        title="모달의 제목"
        closeButtonPosition="top"
        onClose={closeModal}
      >
        {/* 모달 내용 */}
      </ModalComponent>
    </>
  );
}

export default App;
```

## API

### ModalComponent

`ModalComponent`는 다음 props를 받습니다:

| props                        | description                                                     |
| ---------------------------- | --------------------------------------------------------------- |
| `modalPosition` (필수)       | 모달의 위치입니다. 가능한 값은 `"center"`와 `"bottom"`입니다.   |
| `title` (필수)               | 모달의 제목입니다.                                              |
| `children` (필수)            | 모달의 내용입니다.                                              |
| `closeButtonPosition` (필수) | 닫기 버튼의 위치입니다. 가능한 값은 `"top"`과 `"bottom"`입니다. |

### useModal

`useModal` 훅은 다음 속성을 가진 객체를 반환합니다:

| props            | description                                               |
| ---------------- | --------------------------------------------------------- |
| `isOpen`         | 모달이 현재 열려 있는지 여부를 나타내는 boolean 값입니다. |
| `openModal`      | 모달을 열기 위한 함수입니다.                              |
| `closeModal`     | 모달을 닫기 위한 함수입니다.                              |
| `ModalComponent` | 지정된 props로 모달을 렌더링하는 컴포넌트입니다.          |
