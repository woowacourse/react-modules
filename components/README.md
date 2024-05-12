# chlwlstlf-modal

공용 모달 라이브러리 컴포넌트

## - 설치

```
npm install chlwlstlf-modal
```

## - 사용법

App.tsx

```jsx
import React, { useState } from "react";
import { Modal } from "chlwlstlf-modal";
import "./App.css";

const App = () => {
  const portalRoot = document.querySelector("#app") as HTMLElement;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div id="app">
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        position="center"
        portalRoot={portalRoot}
      >
        <Modal.Title>제목</Modal.Title>
        <Modal.CloseButton onClick={handleClose}></Modal.CloseButton>
        <div>모달 content</div>
        <Modal.Button
          variant="primary"
          onClick={handleClose}
        >
          동의하고 저장하기
        </Modal.Button>
        <Modal.Button
          variant="secondary"
          onClick={handleClose}
        >
          닫기
        </Modal.Button>
      </Modal>
    </div>
  );
};

export default App;

```

## Modal Component Props

| Name       | Datatype                             | Default       | Description                                   |
| ---------- | ------------------------------------ | ------------- | --------------------------------------------- |
| isOpen     | boolean                              | false         | 모달의 열림 상태                              |
| onClose    | ()=> void                            | none          | 모달이 닫혔을 때의 이벤트                     |
| onConfirm  | ()=> void                            | none          | 확인 버튼 눌렀을 때의 이벤트                  |
| onCancel   | ()=> void                            | none          | 취소 버튼 눌렀을 때의 이벤트                  |
| onSubmit   | ()=> void                            | none          | 프롬프트 작성 후 확인 버튼 눌렀을 때의 이벤트 |
| type       | 'alert' 'confirm' 'prompt' 'default' | 'default'     | 모달 컨테이너의 타입                          |
| size       | 'small' 'medium' 'large'             | 'medium'      | 모달 컨테이너의 크기                          |
| position   | 'center' 'bottom'                    | 'center'      | 모달 컨테이너의 위치                          |
| className  | string                               | ''            | 모달 컨테이너의 클래스명                      |
| zIndex     | number                               | ''            | 모달 컨테이너의 z-index                       |
| portalRoot | HTMLElement null                     | document.body | 스크롤 막고자하는 요소                        |

## Modal Component Combinations

| Name            | Description                                |
| --------------- | ------------------------------------------ |
| Title           | 모달 제목                                  |
| Message         | 모달 내용                                  |
| CloseButton     | x 아이콘 버튼                              |
| Button          | 모달에 쓰이는 버튼                         |
| Input           | 모달에 쓰이는 인풋                         |
| ButtonContainer | 타입에 따라 보여줄 버튼을 감싸는 container |

## Author

- [tenten github](https://github.com/chlwlstlf)

## License

MIT
