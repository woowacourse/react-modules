# Button Module 사용 가이드

## Modal Component 사용 방법

### 설치

```bash
npm install hash-modal
```

### 사용법

Modal 컴포넌트는 다음과 같이 사용할 수 있습니다.

```jsx
import React from "react";
import Modal from "hash-modal";
function App() {
  const handleConfirm = (event) => {
    console.log("Confirmed!");
  };
  const handleClose = (event) => {
    console.log("Closed!");
  };
  return (
    <div>
      <Modal
        title="Modal Title"
        isXButton={true}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        position="center" // "center" 또는 "bottom"
        buttonLayout="row" // "row" 또는 "column"
        confirmButtonContent="확인"
        closeButtonContent="취소"
      >
        <p>This is the content of the modal!</p>
      </Modal>
    </div>
  );
}
export default App;
```

## Props

`Modal` 컴포넌트는 다음과 같은 props를 받을 수 있습니다.

- `title` (string): 모달의 제목을 설정합니다.
- `isXButton` (boolean): 우측 상단에 X 버튼의 표시 여부를 결정합니다. 기본값은 `true`입니다.
- `handleClose` (function): 모달을 닫을 때 실행할 함수입니다.
- `handleConfirm` (function): 확인 버튼을 클릭할 때 실행할 함수입니다.
- `position` (string): 모달의 위치를 설정합니다. "center" 또는 "bottom" 중 선택할 수 있습니다. 기본값은 "center"입니다.
- `buttonLayout` (string): 버튼의 배열 방향을 설정합니다. "row" 또는 "column"을 사용할 수 있습니다. 기본값은 "row"입니다.
- `confirmButtonContent` (string): 확인 버튼의 텍스트를 설정합니다. 기본값은 "확인"입니다.
- `closeButtonContent` (string): 닫기 버튼의 텍스트를 설정합니다.

## 스타일링

`Modal` 컴포넌트는 `styled-components`를 사용하여 스타일을 적용할 수 있습니다. 기본적으로 제공되는 스타일 이외에 추가적인 커스터마이징이 필요한 경우, 컴포넌트를 더 상세히 조정할 수 있습니다.

이 문서가 컴포넌트의 사용 방법을 이해하는 데 도움이 되길 바랍니다. 필요에 따라 추가적인 정보를 더 제공할 수 있으므로 필요한 경우 개발자에게 문의하시기 바랍니다.

---

## 기능 요구사항

### 모달 컴포넌트

- [x] 모달 위치: 중앙, 하단 등
      모달 내용: 제목, 버튼 등

- [x] 사용자 정의 이벤트 핸들러를 지원해야 한다.

- [x] 모달 열기, 닫기, 확인 등의 동작에 대한 이벤트 핸들러

- [x] 모달 컴포넌트를 npm으로 배포하고 사용할 수 있어야 한다.

- 모달 구성 요소

  - modal-backdrop

  - modal 컨테이너

    - position
    - title
    - contents(children)
    - closeButtonType
    - closeButtonContent
    - confirmButton
    - confirmButtonContent
    - confirmEvent
