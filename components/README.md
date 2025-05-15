## 📦 @hakukudh/modal-components

React 프로젝트에서 간편하게 모달 UI를 구성할 수 있는 모달 컴포넌트 모듈입니다.
다양한 위치 설정과 컴포넌트 분리 설계를 통해 유연하게 사용할 수 있습니다.

### 설치

```Typescript
npm install @hakukudh/modal-components
# 또는
yarn add @hakukudh/modal-components
```

### 사용 방법

기본 예시

```Typescript
import React, { useState } from 'react';
import { ModalComponent as Modal } from '@hakukudh/modal-components';
import Button from './Button';
import Input from './Input';
import ButtonContainer from './ButtonContainer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>

      <Modal isOpen={isOpen} position="top" width="large" onClose={onClose}>
        <Modal.Overlay>
          <Modal.Container>
            <Modal.CloseButton />
            <Modal.Title>모달 제목</Modal.Title>
            <Modal.Body>
              모달 내용입니다! <Input type="text" />
              <ButtonContainer>
                <Button position="left">취소</Button>
                <Button position="right">확인</Button>
              </ButtonContainer>
            </Modal.Body>
          </Modal.Container>
        </Modal.Overlay>
      </Modal>
    </>
  );
}

export default App;
```

보다 자세한 사용방법은 storybook을 참고해주세요
storybook : [storybook](https://6820cf52e1a6c61bea8a9829-sgrrdbvcve.chromatic.com/)

### Props

Modal
최상위 모달 컴포넌트입니다. isOpen, position, width, onClose, children 을 props로 받습니다.

| 이름       | 타입                            | 설명                  |
| ---------- | ------------------------------- | --------------------- |
| `isOpen`   | `boolean`                       | 모달의 열림 여부      |
| `position` | `'top' \| 'bottom' \| 'center'` | 모달의 위치           |
| `width`    | `small`\| 'medium' \| 'large'`  | 모달의 너비 설정      |
| `onClose`  | `() => void`                    | 모달을 닫는 콜백 함수 |
| `children` | `React.ReactNode`               | 모달의 내부 컨텐츠    |

### 스타일 커스터마이징

position에 따라 모달의 위치 및 border-radius가 자동 조정됩니다.

styled-components 기반이므로 ModalContainer 등 하위 컴포넌트를 확장하여 스타일 커스터마이징도 가능합니다.

### 컴포넌트

Modal: 기본 모달 래퍼

Modal.Overlay: 배경 오버레이

Modal.Container: 모달 컨테이너

Modal.Title: 제목 영역

Modal.Body: 본문 영역

Modal.CloseButton: 닫기 버튼

### 📝 라이선스

@ha-kuku
