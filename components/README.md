## Modal 라이브러리

`@sinjuk1/modal`는 모달을 쉽게 사용할 수 있도록 돕는 컴포넌트 라이브러리 입니다.

## 사용 예시

useModal 훅과 Modal 컴포넌트를 함께 사용하면 간편하게 모달 기능을 구현할 수 있습니다.
모달 열기/닫기 상태를 관리하고, 외부 클릭이나 닫기 버튼 등을 통해 유연하게 모달을 제어할 수 있습니다.

### useModal

- isOpen: 모달이 보이는지 여부
- handleOpenModal: 모달을 여는 함수
- handleCloseModal: 모달을 닫는 함수

### Modal

- isOpen: 모달이 보이는지 여부(`boolean`)

- onClose: 모달 닫기 시 호출되는 함수
- $zIndex: 모달의 기본 z-index, modalBackdrop = 1000, modalContainer = 1001 (`number`)
- closeByEscapeKey: 모달 Esc 키 닫기 여부(`boolean`)

```tsx
// 현재 사용 가능한 컴포넌트
Modal.Backdrop = ModalBackdrop;
Modal.Container = ModalContainer;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.CloseButton = ModalCloseButton;
Modal.ButtonWrapper = ModalButtonWrapper;
Modal.CancelButton = ModalCancelButton;
Modal.ConfirmButton = ModalConfirmButton;
```

```tsx
import { Modal, useModal } from '@sinjuk1/modal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>기본 모달 버튼</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <Modal.Backdrop />
        <Modal.Container>
          <Modal.Title title="모달 제목" />
          <Modal.CloseButton />
          <h1>안녕</h1>
        </Modal.Container>
      </Modal>
    </>
  );
}

export default App;
```

### AlertModal

- Alert 모달 컴포넌트는 중요한 정보를 사용자에게 제공하는 용도로 사용됩니다. 이 컴포넌트는 화면 중앙(또는 하단)에 띄워지는 팝업 창으로, 사용자가 다른 작업을 진행하기 전에 확인을 요구할 수 있는 UI 요소입니다. 따라서 Esc키로 닫히지 않습니다.
- 기본 Modal 컴포넌트로 사용자가 커스텀해서 구현 가능합니다.

```tsx
import { AlertModal, useModal } from '@sinjuk1/modal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>alert 모달 버튼</button>
      <AlertModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onConfirm={() => {
          console.log('alert 확인!');
        }}
        title="아이디를 입력해 주세요."
        description="아이디는 필수로 입력해야 합니다."
      />
    </>
  );
}

export default App;
```

### ConfirmModal

- Confirm 모달 컴포넌트는 중요한 정보와 선택지를 사용자에게 제공하는 용도로 사용됩니다. 이 컴포넌트는 화면 중앙(또는 하단)에 띄워지는 팝업 창으로, 사용자가 다른 작업을 진행하기 전에 확인 및 휘소를 요구할 수 있는 UI 요소입니다. 따라서 Esc키로 닫히지 않습니다.
- 기본 Modal 컴포넌트로 사용자가 커스텀해서 구현 가능합니다.

```tsx
import { ConfirmModal, useModal } from '@sinjuk1/modal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>confirm 모달 버튼</button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onConfirm={() => {
          console.log('confirm 확인!');
        }}
        title="카드를 삭제하시겠습니까?"
        description="삭제하면 복구하실 수 없습니다."
      />
    </>
  );
}

export default App;
```

### PromptModal

- Prompt 모달 컴포넌트는 간단한 입력 창과 선택지를 사용자에게 제공하는 용도로 사용됩니다. 이 컴포넌트는 화면 중앙(또는 하단)에 띄워지는 팝업 창으로, 사용자가 중요한 정보를 입력하고 제출 및 휘소를 요구할 수 있는 UI 요소입니다. 따라서 Esc키로 닫히지 않습니다.
- 기본 Modal 컴포넌트로 사용자가 커스텀해서 구현 가능합니다.

```tsx
import { PromptModal, useModal } from '@sinjuk1/modal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>prompt 모달 버튼</button>
      <PromptModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onConfirm={(value) => {
          console.log('prompt 확인!:', value);
        }}
        title="쿠폰 번호를 입력해 주세요."
      />
    </>
  );
}

export default App;
```

스토리북을 통해서도 사용 예시를 확인할 수 있습니다.
[🎨 스토리북 예시](https://6811a7be4413c4e808171622-mmqdrezsap.chromatic.com/)

---

### 현재 사용 가능한 Modal 내부의 컴포넌트

#### Modal.Backdrop

- 모달의 백드롭
- closeByBackdrop: 백드롭 클릭 시 모달 닫기 여부(`boolean`)

#### Modal.Container

- 모달의 내용을 담은 컨테이너
- position: 모달 위치 설정 (`center` | `bottom`):
- containerStyle: 모달 컨테이너의 커스텀 스타일 (`React.CSSProperties`)
- size: 모달의 크기 (`small` | `medium` | `large`)

#### Modal.Title

- 모달 내용의 제목
- title: 모달 내부의 제목 (`string`)

#### Modal.Description

- 모달 내용의 설명
- description: 모달 내부의 설명 (`string`)

#### Modal.CloseButton

- 닫기 버튼: 닫기 아이콘 제공
- $autoFocus: autoFocus(`boolean`) 기본 값은 true

#### Modal.ButtonWrapper

- 버튼들을 가로 정렬해서 보여주는 컴포넌트

#### Modal.CancelButton

- 취소 버튼
- $autoFocus: autoFocus(`boolean`) 기본 값은 false

#### Modal.ConfirmButton

- 확인 버튼
- $autoFocus: autoFocus(`boolean`) 기본 값은 false

---

## 라이센스

@keemsebin @dlsxjzld
