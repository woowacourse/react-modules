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
      <Modal isOpen={isOpen} onClose={handleClose} position="center" title="모달 제목">
        <div>모달 본문 내용입니다.</div>
        <div>
          <button onClick={handleClose}>취소</button>
          <button>확인</button>
        </div>
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

| 이름            | 타입                     | 필수 여부         | 설명                                         |
| --------------- | ------------------------ | ----------------- | -------------------------------------------- |
| isOpen          | boolean                  | ✅                | 모달이 열려 있는지 여부                      |
| onClose         | () => void               | ✅                | 모달 닫기 함수                               |
| children        | ReactNode                | ✅                | 모달 컨텐츠 |
| position        | `'center'` \| `'bottom'` | ✅                | 모달 위치                                    |
| onAfterOpen     | () => void               | ❌                | 모달 열린 후 실행될 콜백                     |
| title           | string                   | ❌                | 모달 제목                                    |
| showCloseButton | boolean                  | ❌ (기본값: true) | 닫기 버튼 표시 여부                          |

---

## 🎨 위치 옵션

모달 위치는 `position` prop으로 제어됩니다.

- `center`: 화면 중앙에 모달을 표시합니다.
- `bottom`: 화면 하단에서 올라오는 형태로 모달을 표시합니다.

---
