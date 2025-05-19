# React Modal Component

재사용 가능한 유연한 모달 컴포넌트 및 훅 라이브러리입니다.

---

## 🚀 설치 방법

```bash
npm install @sanghee01/modal
```

## 🛠️ 사용 방법

### 기본 사용법

```tsx
import { Modal, useModal } from '@sanghee01/modal';

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

### 컴파운드 컴포넌트 방식

Modal은 컴파운드 컴포넌트 패턴을 활용하여 더 유연한 구성이 가능합니다.

```tsx
import { Modal, useModal } from '@sanghee01/modal';

const App = () => {
  const { isOpen, handleOpen, handleClose } = useModal();

  return (
    <>
      <button onClick={handleOpen}>모달 열기</button>
      <Modal isOpen={isOpen} onClose={handleClose} position="center">
        <Modal.Header title="모달 제목" showCloseButton={true} />
        <Modal.Content>
          <p>모달 본문 내용입니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <button onClick={handleClose}>취소</button>
          <button
            onClick={() => {
              alert('확인 클릭!');
              handleClose();
            }}
          >
            확인
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
```

### AlertModal 사용법

단순 알림용 모달입니다. 확인 버튼만 있습니다.

```tsx
import { AlertModal, useModal } from '@sanghee01/modal';

const App = () => {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleConfirm = () => {
    console.log('확인 버튼 클릭');
    handleClose();
  };

  return (
    <>
      <button onClick={handleOpen}>알림 모달 열기</button>
      <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        position="center"
        title="알림"
        content="작업이 성공적으로 완료되었습니다."
        confirmText="확인"
        size="small"
      />
    </>
  );
};
```

### ConfirmModal 사용법

확인/취소 선택이 필요한 모달입니다.

```tsx
import { ConfirmModal, useModal } from '@sanghee01/modal';

const App = () => {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleConfirm = () => {
    console.log('확인 버튼 클릭');
    handleClose();
  };

  const handleCancel = () => {
    console.log('취소 버튼 클릭 - 추가 작업 수행');
    handleClose();
  };

  return (
    <>
      <button onClick={handleOpen}>확인 모달 열기</button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        position="center"
        title="확인"
        content="정말로 이 작업을 수행하시겠습니까?"
        confirmText="예"
        cancelText="아니오"
        size="medium"
      />
    </>
  );
};
```

### PromptModal 사용법

사용자 입력을 받는 모달입니다.

```tsx
import { PromptModal, useModal } from '@sanghee01/modal';

const App = () => {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleConfirm = (inputValue: string) => {
    console.log('입력 값:', inputValue);
    // 입력 값 처리 로직
  };

  const handleCancel = () => {
    console.log('입력 취소 - 추가 작업 수행');
    handleClose();
  };

  return (
    <>
      <button onClick={handleOpen}>프롬프트 모달 열기</button>
      <PromptModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        position="center"
        title="입력"
        content="이름을 입력해주세요:"
        placeholder="이름 입력"
        confirmText="제출"
        cancelText="취소"
        size="large"
      />
    </>
  );
};
```

### 전역 스타일 설정

box-sizing 등의 전역 스타일을 적용하려면 GlobalStyles 컴포넌트를 사용하세요.

```tsx
import { GlobalStyles } from '@sanghee01/modal';

const App = () => {
  return (
    <>
      <GlobalStyles />
      {/* 나머지 앱 컴포넌트 */}
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

### 공통 Props

| 이름        | 타입                                                | 필수 여부 | 설명                     |
| ----------- | --------------------------------------------------- | --------- | ------------------------ |
| isOpen      | boolean                                             | ✅        | 모달이 열려 있는지 여부  |
| onClose     | () => void                                          | ✅        | 모달 닫기 함수           |
| position    | `'center'` \| `'bottom'`                            | ✅        | 모달 위치                |
| onAfterOpen | () => void                                          | ❌        | 모달 열린 후 실행될 콜백 |
| size        | `'small'` \| `'medium'` \| `'large'` \| `undefined` | ❌        | 모달 크기                |

### Modal Props

| 이름     | 타입      | 필수 여부 | 설명        |
| -------- | --------- | --------- | ----------- |
| children | ReactNode | ✅        | 모달 컨텐츠 |

### Modal.Header Props

| 이름            | 타입    | 필수 여부         | 설명                |
| --------------- | ------- | ----------------- | ------------------- |
| title           | string  | ❌                | 모달 제목           |
| showCloseButton | boolean | ❌ (기본값: true) | 닫기 버튼 표시 여부 |

### AlertModal Props

| 이름        | 타입       | 필수 여부           | 설명                   |
| ----------- | ---------- | ------------------- | ---------------------- |
| onConfirm   | () => void | ✅                  | 확인 버튼 클릭 시 콜백 |
| content     | ReactNode  | ✅                  | 모달 내용              |
| title       | string     | ❌                  | 모달 제목              |
| confirmText | string     | ❌ (기본값: '확인') | 확인 버튼 텍스트       |

### ConfirmModal Props

| 이름        | 타입       | 필수 여부           | 설명                                                                          |
| ----------- | ---------- | ------------------- | ----------------------------------------------------------------------------- |
| onConfirm   | () => void | ✅                  | 확인 버튼 클릭 시 콜백                                                        |
| onCancel    | () => void | ✅                  | 취소 버튼 클릭 시 콜백 (onClose와 달리 취소 버튼 클릭 시 추가 기능 수행 가능) |
| content     | ReactNode  | ✅                  | 모달 내용                                                                     |
| title       | string     | ❌                  | 모달 제목                                                                     |
| confirmText | string     | ❌ (기본값: '확인') | 확인 버튼 텍스트                                                              |
| cancelText  | string     | ❌ (기본값: '취소') | 취소 버튼 텍스트                                                              |

### PromptModal Props

| 이름        | 타입                    | 필수 여부           | 설명                                                                          |
| ----------- | ----------------------- | ------------------- | ----------------------------------------------------------------------------- |
| onConfirm   | (value: string) => void | ✅                  | 확인 버튼 클릭 시 콜백                                                        |
| onCancel    | () => void              | ✅                  | 취소 버튼 클릭 시 콜백 (onClose와 달리 취소 버튼 클릭 시 추가 기능 수행 가능) |
| content     | ReactNode               | ✅                  | 모달 내용                                                                     |
| title       | string                  | ❌                  | 모달 제목                                                                     |
| placeholder | string                  | ❌                  | 입력 필드 플레이스홀더                                                        |
| confirmText | string                  | ❌ (기본값: '확인') | 확인 버튼 텍스트                                                              |
| cancelText  | string                  | ❌ (기본값: '취소') | 취소 버튼 텍스트                                                              |

---

## 🎨 위치 및 크기 옵션

### 위치 옵션

모달 위치는 `position` prop으로 제어됩니다.

- `center`: 화면 중앙에 모달을 표시합니다.
- `bottom`: 화면 하단에서 올라오는 형태로 모달을 표시합니다.

### 크기 옵션

모달 크기는 `size` prop으로 제어됩니다.

- `small`: 작은 크기 모달 (320px)
- `medium`: 중간 크기 모달 (480px)
- `large`: 큰 크기 모달 (600px)
- `undefined`: 기본 크기 (100%)

---
