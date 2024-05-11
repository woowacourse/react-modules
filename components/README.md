# Modal Module

모달 관련 라이브러리

Modal - 커스터마이징이 가능한 모달
ConfirmModal - 취소/확인 버튼이 있는 모달
AlertModal - 알림창 모달
PromptModal - 입력 모달

## Modal

| props      | type               | description                          |
| ---------- | ------------------ | ------------------------------------ |
| position   | 'center', 'bottom' | modal의 위치를 결정한다.             |
| modalSize  | 's', 'm', 'l'      | modal의 크기를 결정한다.             |
| closeModal | () => void         | modal을 닫을 떄의 action을 정의한다. |
| modalTitle | string             | modal의 제목을 작성한다.             |
| children   | React.ReactNode    | modal의 내용을 작성한다.             |

### 사용방법 예시

```tsx
function Example() {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Modal Open</button>
      {openModal && (
        <Modal
          position="center"
          modalSize="m"
          modalTitle="제목을 입력해주세요"
          closeModal={() => setOpenModal(false)}
        >
          modal 내용은 이곳에 작성해주세요.
        </Modal>
      )}
    </>
  );
}

export default Example;
```

## AlertModal

| props             | type            | description                          |
| ----------------- | --------------- | ------------------------------------ |
| modalSize         | 's', 'm', 'l'   | modal의 크기를 결정한다.             |
| closeModal        | () => void      | modal을 닫을 떄의 action을 정의한다. |
| modalTitle        | string          | modal의 제목을 작성한다.             |
| modalContents     | string          | modal의 제목을 작성한다.             |
| confirmButtonText | string          | modal의 확인 버튼 텍스트를 설정한다. |
| children          | React.ReactNode | modal의 내용을 작성한다.             |

### 사용방법 예시

```tsx
function Example() {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Modal Open</button>
      {openModal && (
        <AlertModal
          modalSize="m"
          modalTitle="제목을 입력해주세요"
          modalContents="내용을 입력해주세요"
          closeModal={() => setOpenModal(false)}
          confirmButtonText="확인"
        >
          modal 내용은 이곳에 작성해주세요.
        </AlertModal>
      )}
    </>
  );
}

export default Example;
```

## ConfirmModal

| props             | type            | description                                |
| ----------------- | --------------- | ------------------------------------------ |
| modalSize         | 's', 'm', 'l'   | modal의 크기를 결정한다.                   |
| modalTitle        | string          | modal의 제목을 작성한다.                   |
| modalContents     | string          | modal의 제목을 작성한다.                   |
| confirmButtonText | string          | modal의 확인 버튼 텍스트를 설정한다.       |
| cancelButtonText  | string          | modal의 취소 버튼 텍스트를 설정한다.       |
| children          | React.ReactNode | modal의 내용을 작성한다.                   |
| closeModal        | () => void      | modal을 닫을 떄의 action을 정의한다.       |
| clickConfirm      | () => void      | modal 확인 버튼 클릭 시 action을 정의한다. |

### 사용방법 예시

```tsx
function Example() {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Modal Open</button>
      {openModal && (
        <ConfirmModal
          position="center"
          modalSize="m"
          modalTitle="제목을 입력해주세요"
          closeModal={() => setOpenModal(false)}
        >
          modal 내용은 이곳에 작성해주세요.
        </ConfirmModal>
      )}
    </>
  );
}

export default Example;
```

## PromptModal

| props             | type                                 | description                                |
| ----------------- | ------------------------------------ | ------------------------------------------ |
| modalTitle        | string                               | modal의 제목을 작성한다.                   |
| inputValue        | string                               | prompt 값을 작성한다.                      |
| handleInputChange | ChangeEventHandler<HTMLInputElement> | prompt 값을 변경하는 액션.                 |
| modalSize         | 's', 'm', 'l'                        | modal의 크기를 결정한다.                   |
| clickConfirm      | () => void                           | modal 확인 버튼 클릭 시 action을 정의한다. |
| closeModal        | () => void                           | modal을 닫을 떄의 action을 정의한다.       |
| confirmButtonText | string                               | modal의 확인 버튼 텍스트를 설정한다.       |
| cancelButtonText  | string                               | modal의 취소 버튼 텍스트를 설정한다.       |
| children          | React.ReactNode                      | modal의 내용을 작성한다.                   |

### 사용방법 예시

```tsx
function Example() {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Modal Open</button>
      {openModal && (
        <PromptModal
          position="center"
          modalSize="m"
          modalTitle="제목을 입력해주세요"
          closeModal={() => setOpenModal(false)}
        >
          modal 내용은 이곳에 작성해주세요.
        </PromptModal>
      )}
    </>
  );
}

export default Example;
```
