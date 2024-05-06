# brgndyy-react-modal

Common React Modal Library Component

## - Running Video

![](https://velog.velcdn.com/images/brgndy/post/08fdf1b2-ffcb-415a-a513-b9a1fa92f11a/image.gif)

## - install

```
npm install brgndyy-react-modal
yarn add brgndyy-react-modal
```

## - How to use

```tsx
import { useState } from "react";
import { Modal } from "brgndyy-react-modal";

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
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        position="center"
        mountAnimation="modal_enter"
        unMountAnimation="modal_exit"
        animationTime={300}
      >
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

      <button onClick={handleModalOpen}>Modal Open</button>
    </>
  );
}

export default App;
```

## Modal Component Props

| Name             | Datatype          | Default  | Description                          |
| ---------------- | ----------------- | -------- | ------------------------------------ |
| isOpen           | boolean           | false    | state of Modal Open                  |
| onClose          | ()=> void         | none     | event of Modal Close                 |
| position         | 'center' 'bottom' | 'center' | Position of Modal Container          |
| mountAnimation   | string            | ""       | Name of Animation When Modal mount   |
| unMountAnimation | string            | ""       | Name of Animation When Modal unmount |
| animationTime    | number            | 300      | time of animation duration           |

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
