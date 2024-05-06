# chlwlstlf-modal

텐텐과 버건디가 만든 공용 모달 라이브러리 컴포넌트

## - 설치

```
npm install chlwlstlf-modal
```

## - 사용법

App.tsx

```jsx
import { useState } from "react";
import { Modal } from "chlwlstlf-modal";

const customStyles = {
  margin: "auto",
  borderRadius: "8px",
  padding: "24px 32px",
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button onClick={handleModalOpen}>모달 열기</button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        position="center"
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
    </>
  );
}

export default App;
```

## Modal Component Props

| Name        | Datatype            | Default  | Description                            |
| ----------- | ------------------- | -------- | -------------------------------------- |
| isOpen      | boolean             | false    | 모달의 열림 상태                       |
| onClose     | ()=> void           | none     | 모달이 닫혔을때의 이벤트               |
| position    | 'center' 'bottom'   | 'center' | 모달 컨테이너의 위치                   |
| className   | string              | ''       | 모달 컨테이너의 클래스명               |
| zIndex      | number              | ''       | 모달 컨테이너의 z-index                |
| customStyle | React.CSSProperties | ''       | 모달 컨테이너의 커스텀 인라인 스타일링 |

## Author

- [tenten github](https://github.com/chlwlstlf)

- [brgndyy github](https://github.com/brgndyy)

## License

MIT
