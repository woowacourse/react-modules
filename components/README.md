# chlwlstlf-modal

텐텐과 버건디가 만든 공용 모달 라이브러리 컴포넌트

## - 실행 영상

![](https://velog.velcdn.com/images/brgndy/post/08fdf1b2-ffcb-415a-a513-b9a1fa92f11a/image.gif)

## - 설치

```
npm install chlwlstlf-modal
```

## - 사용법

```javascript
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
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        title="모달 제목"
        position="center"
        modalContainerStyle={customStyles}
        content={<ModalContent handleModalClose={handleModalClose} />}
      />

      <button onClick={handleModalOpen}>모달 열기</button>
    </>
  );
}

export default App;
```

## Modal Component Props

| Name                | Datatype            | Default  | Description                            |
| ------------------- | ------------------- | -------- | -------------------------------------- |
| isOpen              | boolean             | false    | 모달의 열림 상태                       |
| onClose             | ()=> void           | none     | 모달이 닫혔을때의 이벤트               |
| title               | string              | ""       | 모달 컨텐츠의 제목 텍스트              |
| position            | 'center' 'bottom'   | 'center' | 모달 컨테이너의 위치                   |
| modalContainerStyle | React.CSSProperties | ''       | 모달 컨테이너의 커스텀 인라인 스타일링 |
| content             | React.ReactNode     | ''       | 모달 컨테이너의 내용                   |
| className           | string              | ''       | 모달 컨테이너의 클래스명               |

## Author

- [tenten github](https://github.com/chlwlstlf)

- [brgndyy github](https://github.com/brgndyy)

## License

MIT
