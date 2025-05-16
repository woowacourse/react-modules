# React Modal Component

재사용 가능한 유연한 모달 컴포넌트 및 훅 라이브러리입니다.

---

## 🚀 설치 방법

```bash
npm install @eunoia-jaxson/modal
```

## 🛠️ 사용 방법

### 기본 사용법

```tsx
import { Modal, useModal } from '@eunoia-jaxson/modal';

const App = () => {
  const { isOpen, handleOpen, handleClose } = useModal();

  return (
    <>
      <button onClick={handleOpen}>모달 열기</button>
      <Modal isOpen={isOpen} onClose={handleClose} position="center">
        <Modal.Header title="모달 제목" showCloseButton />
        <Modal.Body>
          <>모달 본문 내용입니다.</>
        </Modal.Body>
        <Modal.Actions>
          <>
            <button onClick={handleClose}>취소</button>
            <button>확인</button>
          </>
        </Modal.Actions>
      </Modal>
    </>
  );
};
```

### useModal 훅

모달 상태 관리 훅입니다.

```tsx
const { isOpen, handleOpen, handleClose } = useModal();
```

| 속성        | 설명                  |
| ----------- | --------------------- |
| isOpen      | 모달의 열림 여부 상태 |
| handleOpen  | 모달 열기 함수        |
| handleClose | 모달 닫기 함수        |

---

## 📌 Props

| 이름                     | 타입                                 | 필수 여부          | 설명                               |
| ------------------------ | ------------------------------------ | ------------------ | ---------------------------------- |
| isOpen                   | boolean                              | ✅                 | 모달이 열려 있는지 여부            |
| onClose                  | () => void                           | ✅                 | 모달 닫기 함수                     |
| children                 | ReactNode                            | ✅                 | 모달 컨텐츠                        |
| position                 | `'center'` \| `'bottom'`             | ✅                 | 모달 위치                          |
| size                     | `'small'` \| `'medium'` \| `'large'` | ✅                 | 모달 크기                          |
| title                    | string                               | ✅                 | 모달 제목                          |
| onAfterOpen              | () => void                           | ❌                 | 모달 열린 후 실행될 콜백           |
| onConfirm                | () => void                           | ❌                 | 모달 확인 버튼 클릭 시 실행될 콜백 |
| showCloseButton          | boolean                              | ❌ (기본값: false) | 닫기 버튼 표시 여부                |
| showDefaultCancelButton  | boolean                              | ❌                 | 기본 취소 버튼 표시 여부           |
| showDefaultConfirmButton | boolean                              | ❌                 | 기본 확인 버튼 표시 여부           |

---

## 🎨 위치 옵션

모달 위치는 `position` prop으로 제어됩니다.

- `center`: 화면 중앙에 모달을 표시합니다.
- `bottom`: 화면 하단에서 올라오는 형태로 모달을 표시합니다.

---

## ◻️ 크기 옵션

모달 크기는 `size` prop으로 제어됩니다.

- `small`: 가장 작은 너비(320px)의 모달을 표시합니다.
- `medium`: 중간 너비(480px)의 모달을 표시합니다.
- `large`: 가장 큰 너비(600px)의 모달을 표시합니다.

---

## 🅾️ 종류 옵션

모달 종류는 `Default`, `Alert`, `Confirm`, `Prompt` 입니다.
각 모달은 `${type}Modal`로 호출하며, Default는 `Modal` 입니다.

- `Default`: 기본 모달이며, 제목, 내용, 버튼 영역 모두 커스터마이징이 가능합니다.
- `Alert`: 알림 모달이며, 제목, 내용 영역이 커스터마이징 가능하고 기본 확인 버튼이 제공됩니다.
- `Confirm`: 확인/취소 모달이며, 제목, 내용 영역이 커스터마이징 가능하고 기본 취소, 확인 버튼이 제공됩니다.
- `Prompt`: 입력 모달이며, 제목 영역이 커스터마이징 가능하고 기본 input text와 취소, 확인 버튼이 제공됩니다.
