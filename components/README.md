# llqqssttyy-react-modules-components

커스텀 가능한 모듈을 제공하는 라이브러리 입니다.

## 설치

```
npm i llqqssttyy-react-modules-components
```

## Modal 구조

- Modal.Header
- Modal.Title
- Modal.CloseBtn
- Modal.Body
- Modal.Backdrop

## Modal props

### 필수 옵션

- isOpen :
  - type: boolean
- children :
  - type: ReactNode
  - Modal.Body 안에 들어간다.
- type
  - type: 'center'|'bottom'|'toast'
  - 모달 형태를 결정하는 타입
- stopModalPropagation
  - type: boolean
  - true일때, modal에서 발생하는 이벤트 전파를 막는다.

### 선택 옵션

- HTMLDiveElement의 기본 속성들

## 제공하는 기능

- Modal : 합성 컴포넌트로 필요한 부분들을 가지고 사용자가 원하는 모달을 만들 수 있습니다.
- BasicCenterModal : 기본 제공하는 모달로, 화면의 하단에 나타납니다.
- BasicBottomModal : 기본 제공하는 모달로, 화면의 정가운데 나타납니다.
- useModal : 모달의 오픈,클로즈를 사용할 수 있는 커스텀 훅입니다.

## Basic Modal

해당 패키지에서는 'BasicBottomModal','BasicCenterModal'이라는 기본 모달을 제공하고 있습니다.

### 사용 예시

```js
import BasicCenterModal from './lib/Modal/BasicCenterModal/index';
import BasicBottomModal from './lib/Modal/BasicBottomModal/index';
import { Modal } from './lib';

function App() {
  const [openCenterModal, setOpenCenterModal] = useState(false);
  const [openBottomModal, setOpenBottomModal] = useState(false);
  return (
    <>
      <button onClick={() => setOpenCenterModal(true)}>basic center open</button>
      <button onClick={() => setOpenBottomModal(true)}>basic bottom open</button>
      <BasicCenterModal
        closeButtonType="icon"
        isOpen={openCenterModal}
        modalTitle="basic center"
        closeModal={() => setOpenCenterModal(false)}
      >
        <div>basic center modal</div>
      </BasicCenterModal>
      <BasicBottomModal
        closeButtonType="box"
        isOpen={openBottomModal}
        modalTitle="basic bottom"
        closeModal={() => setOpenBottomModal(false)}
      >
        <Modal.ActionAndCloseButton extraAction={() => alert('extraAction!!')}>
          <div>Action And Close Button</div>
        </Modal.ActionAndCloseButton>
        <div> basic bottom modal</div>
      </BasicBottomModal>
    </>
  );
}
```

## Custom Modal 사용 예시

합성 컴포넌트로 이루저여서 필요한 컴포넌트를 사용해 사용자가 원하는 모달을 생성할 수 있습니다.

### useModal을 사용한 Custom Modal

```tsx
function useModal(props: Props) {
  const [open, setOpen] = useState(props.initialState);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return { open: open, openModal, closeModal };
}

function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { open, openModal, closeModal } = useModal({ initialState: isOpenModal });

  //...
  return (
    <div>
      {open && (
        <Modal type="center" isOpen={open} closeModal={closeModal}>
          <Modal.Header className={styles.header}>
            <Modal.Title className={styles.title}>{props.modalTitle}</Modal.Title>
            <Modal.CloseIconButton className={styles.closeButton} />
          </Modal.Header>
          <Modal.Body className={styles.body}>
            <div> 모달 사용 예시 </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
```
