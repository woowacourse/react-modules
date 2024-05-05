# brgndy-modal

Common React Modal Library Component

## - 실행 영상

![](https://velog.velcdn.com/images/brgndy/post/08fdf1b2-ffcb-415a-a513-b9a1fa92f11a/image.gif)

## - install

```
npm install brgndy-react-modal
yarn add brgndy-react-modal
```

## - How to use

```javascript
import { useState } from "react";
import { Modal } from "brgndy-react-modal";

export const CloseContent = () => {
  return <div>Close Modal Button Content</div>;
};

export const Content = () => {
  return <div>Modal Content</div>;
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
      <Modal isOpen={modalOpen} onClose={handleModalClose} position="center">
        <Modal.Portal id="modal">
          <Modal.Backdrop>
            <Modal.Container className="container">
              <Content />
              <Modal.CloseButton>
                <CloseContent />
              </Modal.CloseButton>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal.Portal>
      </Modal>

      <button onClick={handleModalOpen}>모달 열기</button>
    </>
  );
}

export default App;
```

## Modal Component Props

| Name     | Datatype          | Default  | Description              |
| -------- | ----------------- | -------- | ------------------------ |
| isOpen   | boolean           | false    | 모달의 열림 상태         |
| onClose  | ()=> void         | none     | 모달이 닫혔을때의 이벤트 |
| position | 'center' 'bottom' | 'center' | 모달 컨테이너의 위치     |

## Pitfalls

❗️ Before using a modal, first create a root div for the modal in index.js ❗️

```html
<body>
  <div id="modal"></div>
</body>
```

## Author

- [brgndyy github](https://github.com/brgndyy)

## License

MIT
