# choco-modal-component

## Install

이 라이브러리를 사용하기 위해서는 다음 패키지를 설치해야 합니다:

```bash
npm install choco-modal-component
```

## Usage

React 컴포넌트에서 모달 라이브러리를 사용하려면 다음 단계를 따르세요

```jsx
import { useModal, Modal } from "choco-modal-component";

function App() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        modalPosition="bottom"
        title="모달의 제목"
        closeButtonPosition="top"
        isOpen={isOpen}
        onClose={closeModal}
      >
        {/* 모달 내용 */}
      </Modal>
    </>
  );
}

export default App;
```

## API

### ModalComponent

`ModalComponent`는 다음 props를 받습니다:

| props                 | description                                                                                      | Required |
| --------------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `modalPosition`       | 모달의 위치입니다. 가능한 값은 `"center"`와 `"bottom"`입니다.                                    | Yes      |
| `title`               | 모달의 제목입니다.                                                                               | Yes      |
| `children`            | 모달의 내용입니다.                                                                               | Yes      |
| `closeButtonPosition` | 닫기 버튼의 위치입니다. 가능한 값은 `"top"`과 `"bottom"`입니다. modalType이 지정되면 무시됩니다. | No       |
| `size`                | 모달의 크기입니다. 가능한 값은 `"small"`과 `"medium"`, `"large"`입니다.                          | No       |
| `modalType`           | 모달의 타입입니다. 가능한 값은 `"alert"`과 `"confirm"`, `"prompt"`입니다.                        | No       |

### useModal

`useModal` 훅은 다음 속성을 가진 객체를 반환합니다:

| props            | description                                               |
| ---------------- | --------------------------------------------------------- |
| `isOpen`         | 모달이 현재 열려 있는지 여부를 나타내는 boolean 값입니다. |
| `openModal`      | 모달을 열기 위한 함수입니다.                              |
| `closeModal`     | 모달을 닫기 위한 함수입니다.                              |
| `ModalComponent` | 지정된 props로 모달을 렌더링하는 컴포넌트입니다.          |

### ModalType

Modal Type은 다음과 같습니다.

| props     | description                                     |
| --------- | ----------------------------------------------- |
| `alert`   | "확인" 버튼만 있습니다.                         |
| `confirm` | "취소"와 "확인" 버튼이 있습니다.                |
| `prompt`  | 텍스트 입력란과 "취소", "확인" 버튼이 있습니다. |
