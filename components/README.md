# @roqkftjs/react-payments-module

이 라이브러리는 개발자가 쉽게 모달을 생성하고 관리할 수 있도록 도와줍니다. 다양한 기능이 내장되어 있으며, 모달의 위치, 스타일, 닫기 동작 등을 쉽게 커스터마이징할 수 있습니다.

## 설치

```
npm install @roqkftjs/react-payments-module
```

## 사용 방법

원하는 대로 모달의 컴포넌트를 구성할 수 있습니다.
기본적인 사용 방법은 다음과 같습니다.

```ts
import React, { useState } from 'react';
import Modal from 'react-custom-modal';
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

## 프로퍼티

Modal 컴포넌트는 다음과 같은 프로퍼티를 지원합니다.

- isOpen: 모달이 열려있는지의 여부를 결정합니다. (true | false)
- onClose: 모달을 닫을 때 호출되는 함수입니다.
- position: 모달의 위치를 결정합니다. (top | bottom | center)
- style: 모달의 스타일을 직접 지정할 수 있습니다. (CSSProperties)

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

- 기본으로 제공하는 스타일 prop 외에도 style 프로퍼디를 이용하여 스타일을 입힐 수 있습니다.
  - 사용 예시
    ```ts
    <Modal.TextButton onClose={onClose} style={{ borderRadius: 30 }}>안녕</Modal.TextButton>
    ```

## 기능

- ESC 키로 닫기: 사용자가 ESC 키를 누를 때 모달을 닫을 수 있습니다.
- 배경 클릭으로 닫기: 모달 외부(배경)을 클릭할 때 모달을 닫을 수 있습니다.
- 배경 스크롤 방지: 모달이 열려 있을 때 배경의 스크롤을 방지합니다.

## 기여하기

이 프로젝트에 기여하고 싶으신 분은 언제든지 Pull Request를 보내주시거나 이슈를 등록해주세요.

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 제공됩니다.
