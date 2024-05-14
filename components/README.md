# @roqkftjs/react-payments-module

이 라이브러리는 개발자가 쉽게 모달을 생성하고 관리할 수 있도록 도와줍니다. 다양한 기능이 내장되어 있으며, 모달의 위치, 스타일, 닫기 동작 등을 쉽게 커스터마이징할 수 있습니다. 커스텀 모달을 통해 커스텀하여 모달을 구성할 수 있을 뿐만 아니라 알람 모달, 확인/취소 모달, 입력 모달을 제공하여 간편하게 사용할 수 있습니다.

## 설치

```
npm install @roqkftjs/react-payments-module
```

## 서브 컴포넌트

Modal 컴포넌트는 다음과 같은 서브 컴포넌트를 포함합니다.

- Modal.Header: 모달의 헤더 부분입니다.
- Modal.Title: 모달 헤더의 제목입니다.
  - fontSize?: 제목의 폰트 크기를 조절할 수 있습니다. (string, default: 18px)
- Modal.IconButton: 이미지 아이콘 버튼입니다.
  - onClose: 모달을 닫는 함수를 호출합니다.
  - src: 이미지 버튼에 들어가는 이미지를 설정할 수 있습니다. (string, default: 닫기 이미지)
  - imgSize?: 버튼에 들어가는 이미지의 크기를 조절할 수 있습니다. (string, default: 16px)
- Modal.TextButton: 텍스트 버튼입니다. 버튼 사이즈와 폰트 사이즈를 받을 수 있고 모달을 닫는 등의 동작에 사용할 수 있습니다.
  - onClose: 모달을 닫는 함수를 호출합니다.
  - buttonSize?: 버튼 크기를 조절할 수 있습니다.(string, default: 100%)
  - fontSize?: 버튼 폰트 크기를 조절할 수 있습니다. (string, default: 15px)
- Modal.Content: 모달의 내용 부분입니다.
- Modal.Footer: 모달의 푸터 부분입니다.

## 스타일 커스터마이징

- 기본으로 제공하는 스타일 prop 외에도 style 프로퍼티를 이용하여 스타일을 입힐 수 있습니다.
  - 사용 예시
    ```ts
    <Modal.TextButton onClose={onClose} style={{ borderRadius: 30 }}>안녕</Modal.TextButton>
    ```

## 기능

- ESC 키로 모달 닫기: 사용자가 ESC 키를 누를 때 모달을 닫을 수 있습니다.
- 배경 클릭으로 모달 닫기: 모달 외부(배경)을 클릭할 때 모달을 닫을 수 있습니다.
- 배경 스크롤 방지: 모달이 열려 있을 때 배경의 스크롤을 방지합니다.

## 사용 방법

기본적인 사용 방법은 다음과 같습니다.

### 커스텀 모달

원하는 대로 모달의 컴포넌트를 구성할 수 있습니다.

#### 프로퍼티

Modal 컴포넌트는 다음과 같은 프로퍼티를 지원합니다.

- 필수 프로퍼티
  - isOpen: 모달이 열려있는지의 여부를 결정합니다. (true | false)
  - onClose: 모달을 닫을 때 호출되는 함수입니다.
  - position: 모달의 위치를 결정합니다. (top | bottom | center)
- 선택 프로퍼티
  - onConfirm: 모달에서 입력된 값을 확인할 때 호출되는 함수입니다.
  - size: 모달의 크기를 결정합니다. (small | medium | large, default: 480px)
  - style: 모달의 스타일을 직접 지정할 수 있습니다. (CSSProperties)

```ts
import React, { useState } from 'react';
import { Modal } from '@roqkftjs/react-payments-module';
import Image from '../asset/example.png'
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} position="center">
        <Modal.Header>
          <Modal.Title>모달 제목</Modal.Title>
          <Modal.IconButton src={Image} imgSize={'20px'} onClose={closeModal}></Modal.IconButton>
        </Modal.Header>
        <Modal.Content>
          모달 내용
        </Modal.Content>
        <Modal.Footer>
          <Modal.TextButton onClose={closeModal}>확인</Modal.TextButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
```

### 알람 모달

사용자에게 간단한 메시지를 전달하기 위한 모달 컴포넌트입니다.

#### 프로퍼티

AlertModal 컴포넌트는 다음과 같은 프로퍼티를 지원합니다.

- 필수 프로퍼티
  - isOpen: 모달이 열려있는지의 여부를 결정합니다. (true | false)
  - onClose: 모달을 닫을 때 호출되는 함수입니다.
  - position: 모달의 위치를 결정합니다. (top | bottom | center)
- 선택 프로퍼티
  - onConfirm: 모달에서 입력된 값을 확인할 때 호출되는 함수입니다.
  - size: 모달의 크기를 결정합니다. (small | medium | large, default: 480px)
  - style: 모달의 스타일을 직접 지정할 수 있습니다. (CSSProperties)
  - buttonText: 모달의 버튼 텍스트를 지정할 수 있습니다. (string, default: 확인)
  - buttonBackgroundColor: 모달의 버튼 배경 색상을 지정할 수 있습니다. (string, default: #333333)
  - buttonFontColor: 모달의 버튼 글자 색상을 지정할 수 있습니다. (string, default: #ffffff)

```
  import React from 'react';
  import { AlertModal } from '@roqkftjs/react-payments-module';

  function App() {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
      <div>
        <button onClick={openModal}>Alert Modal Open</button>
        <AlertModal
          isOpen={isOpen}
          onClose={closeModal}
          title="알람 제목"
          message="이것은 알람 모달의 메시지입니다."
        />
      </div>
    );
  }
  export default App;
```

### 확인/취소 모달

확인 및 취소 버튼이 있는 모달 컴포넌트입니다. 사용자에게 질문을 하거나 확인을 요구할 때 사용됩니다.

#### 프로퍼티

ConfirmModal 컴포넌트는 다음과 같은 프로퍼티를 지원합니다.

- 필수 프로퍼티
  - isOpen: 모달이 열려있는지의 여부를 결정합니다. (true | false)
  - onClose: 모달을 닫을 때 호출되는 함수입니다.
  - title: 모달의 제목을 결정합니다. (string)
  - children: 모달의 내용을 결정합니다. (React.ReactNode)
- 선택 프로퍼티
  - onConfirm: 모달에서 입력된 값을 확인할 때 호출되는 함수입니다.
  - position: 모달의 위치를 결정합니다. (top | bottom | center, default: center)
  - size: 모달의 크기를 결정합니다. (small | medium | large, default: medium)
  - style: 모달의 스타일을 직접 지정할 수 있습니다. (CSSProperties)
  - primaryButtonText: 모달의 메인 버튼 텍스트를 지정할 수 있습니다. (string, default: '확인')
  - secondaryButtonText: 모달의 서브 버튼 텍스트를 지정할 수 있습니다. (string, default: '취소')
  - primaryButtonBackgroundColor: 모달의 메인 버튼 배경 색상을 지정할 수 있습니다. (string, default: '#333333')
  - secondaryButtonBackgroundColor: 모달의 서브 버튼 배경 색상을 지정할 수 있습니다. (string, default: '#ffffff')
  - primaryButtonFontColor: 모달의 메인 버튼 텍스트 색상을 지정할 수 있습니다. (string, default: '#ffffff')
  - secondaryButtonFontColor: 모달의 서브 버튼 텍스트 색상을 지정할 수 있습니다. (string, default: '#ffffff')

```
import React from 'react';
import { ConfirmModal } from '@roqkftjs/react-payments-module';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        title="제목"
        position="center"
        size="medium"
      >
        여기에 내용을 채워주세요.
      </ConfirmModal>
    </div>
  );
}
```

### 입력 모달

사용자로부터 입력을 받기 위한 모달 컴포넌트입니다. 폼을 제출하거나 데이터를 입력 받는 데 사용됩니다.

#### 프로퍼티

Prompt 컴포넌트는 다음과 같은 프로퍼티를 지원합니다.

- 필수 프로퍼티
  - isOpen: 모달이 열려있는지의 여부를 결정합니다. (true | false)
  - onClose: 모달을 닫을 때 호출되는 함수입니다.
  - title: 모달의 제목을 결정합니다. (string)
- 선택 프로퍼티
  - onConfirm: 모달에서 입력된 값을 확인할 때 호출되는 함수입니다.
  - position: 모달의 위치를 결정합니다. (top | bottom | center, default: center)
  - size: 모달의 크기를 결정합니다. (small | medium | large, default: medium)
  - style: 모달의 스타일을 직접 지정할 수 있습니다. (CSSProperties)
  - primaryButtonText: 모달의 메인 버튼 텍스트를 지정할 수 있습니다. (string, default: '제출')
  - secondaryButtonText: 모달의 서브 버튼 텍스트를 지정할 수 있습니다. (string, default: '취소')
  - primaryButtonBackgroundColor: 모달의 메인 버튼 배경 색상을 지정할 수 있습니다. (string, default: '#333333')
  - secondaryButtonBackgroundColor: 모달의 서브 버튼 배경 색상을 지정할 수 있습니다. (string, default: '#ffffff')
  - primaryButtonFontColor: 모달의 메인 버튼 텍스트 색상을 지정할 수 있습니다. (string, default: '#ffffff')
  - secondaryButtonFontColor: 모달의 서브 버튼 텍스트 색상을 지정할 수 있습니다. (string, default: '#ffffff')

```
import React from 'react';
import { PromptModal } from '@roqkftjs/react-payments-module';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <PromptModal
        isOpen={isOpen}
        onClose={handleClose}
        title="입력"
        position="center"
        size="medium"
      >
        <input type="text" placeholder="여기에 입력해주세요." />
      </PromptModal>
    </div>
  );
}
```

## 기여하기

이 프로젝트에 기여하고 싶으신 분은 언제든지 Pull Request를 보내주시거나 이슈를 등록해주세요.

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 제공됩니다.
