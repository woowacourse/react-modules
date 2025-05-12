# Mingtae-Modal

React 애플리케이션을 위한 유연하고 접근성 높은 모달 컴포넌트입니다.

![NPM 버전](https://img.shields.io/npm/v/mingtae-modal)
![다운로드](https://img.shields.io/npm/dm/mingtae-modal)

## 주요 기능

- 🚀 다양한 모달 타입: 기본, 알림(Alert), 확인(Confirm), 프롬프트(Prompt) 지원
- 🎨 위치, 크기, 스타일 커스터마이징 가능
- ⌨️ 포커스 관리를 통한 키보드 접근성 지원
- 🔄 컨텍스트 기반 상태 관리
- 📱 반응형 디자인 지원

## 설치 방법

```bash
npm install mingtae-modal
# 또는
yarn add mingtae-modal
```

## 기본 사용법

```jsx
import { useState } from 'react';
import Modal from 'mingtae-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>모달 열기</button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Title title="모달 제목" />
          <p>커스터마이징 가능한 기본 모달입니다.</p>
        </Modal.Content>
      </Modal>
    </div>
  );
}
```

## 모달 타입

### 기본 모달

```jsx
<Modal isOpen={isOpen} onClose={handleClose}>
  <Modal.Overlay />
  <Modal.Content>
    <Modal.Title title="기본 모달" />
    <p>내용을 여기에 작성하세요...</p>
  </Modal.Content>
</Modal>
```

### 알림 모달 (Alert)

```jsx
<Modal isOpen={isOpen} onClose={handleClose}>
  <Modal.Overlay />
  <Modal.AlertContent
    alertButton={{
      text: '확인',
      color: '#fff',
      backgroundColor: '#007bff',
    }}>
    <Modal.Title title="알림" />
    <p>알림 메시지입니다!</p>
  </Modal.AlertContent>
</Modal>
```

### 확인 모달 (Confirm)

```jsx
<Modal isOpen={isOpen} onClose={handleClose}>
  <Modal.Overlay />
  <Modal.ConfirmContent
    confirmButton={{
      text: '확인',
      onClick: () => {
        console.log('확인됨!');
        handleClose();
      },
    }}
    cancelButton={{
      text: '취소',
      onClick: handleClose,
    }}>
    <Modal.Title title="작업 확인" />
    <p>정말 진행하시겠습니까?</p>
  </Modal.ConfirmContent>
</Modal>
```

### 프롬프트 모달 (Prompt)

```jsx
const [inputValue, setInputValue] = useState('');

<Modal isOpen={isOpen} onClose={handleClose}>
  <Modal.Overlay />
  <Modal.PromptContent
    inputValue={inputValue}
    setInputValue={setInputValue}
    confirmButton={{
      text: '제출',
      onClick: () => {
        console.log('제출됨:', inputValue);
        handleClose();
      },
    }}>
    <Modal.Title title="정보 입력" />
    <p>필요한 정보를 입력해주세요:</p>
  </Modal.PromptContent>
</Modal>;
```

## API 레퍼런스

### Modal 속성

| 속성            | 타입            | 기본값 | 설명                          |
| --------------- | --------------- | ------ | ----------------------------- |
| `isOpen`        | boolean         | -      | 모달 표시 여부를 제어         |
| `onClose`       | function        | -      | 모달이 닫힐 때 호출되는 함수  |
| `closeOnEscape` | boolean         | `true` | ESC 키 누를 때 모달 닫기 여부 |
| `children`      | React.ReactNode | -      | 모달 내용                     |

### Modal.Overlay 속성

| 속성           | 타입    | 기본값 | 설명                            |
| -------------- | ------- | ------ | ------------------------------- |
| `closeOnClick` | boolean | `true` | 오버레이 클릭 시 모달 닫기 여부 |

### Modal.Content 속성

| 속성                | 타입                           | 기본값   | 설명                            |
| ------------------- | ------------------------------ | -------- | ------------------------------- |
| `hasTopCloseButton` | boolean                        | `true`   | 우측 상단에 닫기 버튼 표시 여부 |
| `position`          | 'center' \| 'bottom'           | 'center' | 화면에서 모달의 위치            |
| `size`              | 'small' \| 'medium' \| 'large' | 'small'  | 모달의 크기                     |

### Modal.AlertContent 속성

Modal.Content 속성을 상속하며 다음을 추가:

| 속성          | 타입   | 기본값                                                     | 설명           |
| ------------- | ------ | ---------------------------------------------------------- | -------------- |
| `alertButton` | object | `{ text: '확인', color: '#fff', backgroundColor: '#333' }` | 알림 버튼 설정 |

### Modal.ConfirmContent 속성

Modal.Content 속성을 상속하며 다음을 추가:

| 속성            | 타입   | 기본값                                                               | 설명           |
| --------------- | ------ | -------------------------------------------------------------------- | -------------- |
| `confirmButton` | object | `{ text: '확인', color: '#fff', backgroundColor: '#333' }`           | 확인 버튼 설정 |
| `cancelButton`  | object | `{ text: '취소', color: '#8B95A1', backgroundColor: 'transparent' }` | 취소 버튼 설정 |

### Modal.PromptContent 속성

Modal.ConfirmContent 속성을 상속하며 다음을 추가:

| 속성            | 타입     | 기본값 | 설명                        |
| --------------- | -------- | ------ | --------------------------- |
| `inputValue`    | string   | -      | 입력 필드의 현재 값         |
| `setInputValue` | function | -      | 입력 값을 업데이트하는 함수 |

## 접근성 기능

- 모달 열림 시 자동으로 포커스 이동
- 모달 열림 상태에서 포커스 트랩 기능
- ESC 키로 모달 닫기 (설정 가능)
- 스크린 리더를 위한 ARIA 속성 지원

## 브라우저 지원

- Chrome: 최신 2개 버전
- Firefox: 최신 2개 버전
- Safari: 최신 2개 버전
- Edge: 최신 2개 버전

## 라이선스

MIT © MinSungJe
