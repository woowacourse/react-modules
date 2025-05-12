# Mingtae-Modal

React에서 쉽게 사용할 수 있는 모달 컴포넌트 라이브러리입니다. 다양한 종류의 모달(기본, 알림, 확인, 프롬프트)을 제공하며 직관적인 API로 쉽게 사용할 수 있습니다.

## 설치 방법

npm을 사용하여 설치할 수 있습니다:

```bash
npm install mingtae-modal
```

또는 yarn을 사용하는 경우:

```bash
yarn add mingtae-modal
```

## 기본 사용법

```jsx
import React, { useState } from 'react';
import Modal from 'mingtae-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Title title="기본 모달" />
          <p>모달 내용을 여기에 작성합니다.</p>
        </Modal.Content>
      </Modal>
    </div>
  );
}
```

## 컴포넌트 구성 요소

### Modal

모달의 루트 컴포넌트입니다.

#### Props

| 속성          | 타입      | 기본값 | 설명                                                  |
| ------------- | --------- | ------ | ----------------------------------------------------- |
| isOpen        | boolean   | -      | 모달의 표시 여부를 결정합니다.                        |
| onClose       | function  | -      | 모달이 닫힐 때 호출되는 함수입니다.                   |
| closeOnEscape | boolean   | true   | ESC 키를 눌렀을 때 모달이 닫히는지 여부를 결정합니다. |
| children      | ReactNode | -      | 모달 내용을 정의합니다.                               |

### Modal.Overlay

모달의 배경을 표시하는 컴포넌트입니다.

#### Props

| 속성         | 타입    | 기본값 | 설명                                                      |
| ------------ | ------- | ------ | --------------------------------------------------------- |
| closeOnClick | boolean | true   | 오버레이를 클릭했을 때 모달이 닫히는지 여부를 결정합니다. |

### Modal.Content

모달의 기본 컨텐츠 컴포넌트입니다.

#### Props

| 속성              | 타입                           | 기본값   | 설명                                                                |
| ----------------- | ------------------------------ | -------- | ------------------------------------------------------------------- |
| hasTopCloseButton | boolean                        | true     | 우측 상단에 닫기 버튼 표시 여부를 결정합니다.                       |
| position          | 'center' \| 'bottom'           | 'center' | 모달의 위치를 결정합니다.                                           |
| size              | 'small' \| 'medium' \| 'large' | 'small'  | 모달의 크기를 결정합니다. small(320px), medium(480px), large(600px) |
| children          | ReactNode                      | -        | 모달 내용을 정의합니다.                                             |

### Modal.AlertContent

확인 버튼이 있는 알림 모달입니다.

#### Props

| 속성              | 타입                           | 기본값                                                                     | 설명                                              |
| ----------------- | ------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------- |
| hasTopCloseButton | boolean                        | true                                                                       | 우측 상단에 닫기 버튼 표시 여부를 결정합니다.     |
| position          | 'center' \| 'bottom'           | 'center'                                                                   | 모달의 위치를 결정합니다.                         |
| size              | 'small' \| 'medium' \| 'large' | 'small'                                                                    | 모달의 크기를 결정합니다.                         |
| alertButton       | object                         | { text: '확인', color: '#fff', backgroundColor: '#333', onClick: onClose } | 알림 버튼의 스타일과 동작을 커스텀할 수 있습니다. |
| children          | ReactNode                      | -                                                                          | 모달 내용을 정의합니다.                           |

### Modal.ConfirmContent

확인 및 취소 버튼이 있는 확인 모달입니다.

#### Props

| 속성              | 타입                           | 기본값                                                                               | 설명                                              |
| ----------------- | ------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------- |
| hasTopCloseButton | boolean                        | true                                                                                 | 우측 상단에 닫기 버튼 표시 여부를 결정합니다.     |
| position          | 'center' \| 'bottom'           | 'center'                                                                             | 모달의 위치를 결정합니다.                         |
| size              | 'small' \| 'medium' \| 'large' | 'small'                                                                              | 모달의 크기를 결정합니다.                         |
| confirmButton     | object                         | { text: '확인', color: '#fff', backgroundColor: '#333', onClick: onClose }           | 확인 버튼의 스타일과 동작을 커스텀할 수 있습니다. |
| cancelButton      | object                         | { text: '취소', color: '#8B95A1', backgroundColor: 'transparent', onClick: onClose } | 취소 버튼의 스타일과 동작을 커스텀할 수 있습니다. |
| children          | ReactNode                      | -                                                                                    | 모달 내용을 정의합니다.                           |

### Modal.PromptContent

사용자 입력을 받을 수 있는 프롬프트 모달입니다.

#### Props

| 속성              | 타입                           | 기본값                                                                               | 설명                                              |
| ----------------- | ------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------- |
| inputValue        | string                         | -                                                                                    | 입력 필드의 값입니다.                             |
| setInputValue     | function                       | -                                                                                    | 입력 필드 값을 업데이트하는 함수입니다.           |
| hasTopCloseButton | boolean                        | true                                                                                 | 우측 상단에 닫기 버튼 표시 여부를 결정합니다.     |
| position          | 'center' \| 'bottom'           | 'center'                                                                             | 모달의 위치를 결정합니다.                         |
| size              | 'small' \| 'medium' \| 'large' | 'small'                                                                              | 모달의 크기를 결정합니다.                         |
| confirmButton     | object                         | { text: '확인', color: '#fff', backgroundColor: '#333', onClick: onClose }           | 확인 버튼의 스타일과 동작을 커스텀할 수 있습니다. |
| cancelButton      | object                         | { text: '취소', color: '#8B95A1', backgroundColor: 'transparent', onClick: onClose } | 취소 버튼의 스타일과 동작을 커스텀할 수 있습니다. |
| children          | ReactNode                      | -                                                                                    | 모달 내용을 정의합니다.                           |

### Modal.Title

모달의 제목을 표시하는 컴포넌트입니다.

#### Props

| 속성  | 타입   | 기본값 | 설명                      |
| ----- | ------ | ------ | ------------------------- |
| title | string | -      | 표시할 제목 텍스트입니다. |

## 사용 예시

### 기본 모달

```jsx
import React, { useState } from 'react';
import Modal from 'mingtae-modal';

function BasicModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>기본 모달 열기</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Title title="기본 모달" />
          <p>기본 모달 내용입니다.</p>
        </Modal.Content>
      </Modal>
    </>
  );
}
```

### 알림 모달 (AlertContent)

```jsx
import React, { useState } from 'react';
import Modal from 'mingtae-modal';

function AlertModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>알림 모달 열기</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.AlertContent
          alertButton={{
            text: '확인했습니다',
            backgroundColor: '#007bff',
          }}>
          <Modal.Title title="알림" />
          <p>알림 메시지입니다.</p>
        </Modal.AlertContent>
      </Modal>
    </>
  );
}
```

### 확인 모달 (ConfirmContent)

```jsx
import React, { useState } from 'react';
import Modal from 'mingtae-modal';

function ConfirmModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    console.log('확인 버튼이 클릭되었습니다');
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>확인 모달 열기</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.ConfirmContent
          confirmButton={{
            text: '삭제',
            backgroundColor: '#dc3545',
            onClick: handleConfirm,
          }}
          cancelButton={{
            text: '취소하기',
          }}>
          <Modal.Title title="확인" />
          <p>정말로 삭제하시겠습니까?</p>
        </Modal.ConfirmContent>
      </Modal>
    </>
  );
}
```

### 프롬프트 모달 (PromptContent)

```jsx
import React, { useState } from 'react';
import Modal from 'mingtae-modal';

function PromptModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    console.log('입력된 값:', inputValue);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>프롬프트 모달 열기</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.PromptContent
          inputValue={inputValue}
          setInputValue={setInputValue}
          confirmButton={{
            text: '제출',
            onClick: handleSubmit,
          }}>
          <Modal.Title title="입력" />
          <p>이름을 입력해주세요:</p>
        </Modal.PromptContent>
      </Modal>
    </>
  );
}
```

### 위치 및 크기 조정

```jsx
import React, { useState } from 'react';
import Modal from 'mingtae-modal';

function CustomPositionModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>커스텀 모달 열기</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content position="bottom" size="large">
          <Modal.Title title="바텀 시트 모달" />
          <p>화면 하단에 큰 크기로 표시되는 모달입니다.</p>
        </Modal.Content>
      </Modal>
    </>
  );
}
```

## 주요 기능

- 다양한 모달 유형 제공 (기본, 알림, 확인, 프롬프트)
- ESC 키로 모달 닫기 기능
- 오버레이 클릭으로 모달 닫기 기능
- 위치 및 크기 조정 가능
- 접근성 지원 (포커스 관리)
- 사용자 정의 버튼 스타일링
- 간편한 API

## 라이센스

MIT
