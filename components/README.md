# React Modal 컴포넌트

다양한 위치 옵션과 크기를 제공하는 유연하고 커스터마이징 가능한 React 모달 컴포넌트입니다.

## 설치

```bash
npm install dslgpgh-modal
# 또는
yarn add dslgpgh-modal
```

## 사용법

### 기본 사용법

```jsx
import Modal from 'dslgpgh-modal';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header showCloseButton>모달 제목</Modal.Header>
        <Modal.Body>
          <p>모달 내용이 여기에 들어갑니다...</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.ActionButton onClick={() => setIsOpen(false)}>
            확인
          </Modal.ActionButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

### 위치 및 크기 옵션

모달은 위치와 크기를 다양하게 지정할 수 있습니다:

```jsx
// 중앙 모달 (기본값)
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition="center" size="medium">
  {/* 모달 내용 */}
</Modal>

// 하단 모달
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition="bottom" size="medium">
  {/* 모달 내용 */}
</Modal>
```

### 모달 타입 예시

#### 알림 모달 (Alert Modal)

```jsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition="center" size="medium">
  <Modal.Header>아이디를 입력해 주세요.</Modal.Header>
  <Modal.Body>
    <p>아이디는 필수로 입력해야 합니다.</p>
  </Modal.Body>
  <Modal.Footer>
    <Modal.ActionButton onClick={() => setIsOpen(false)}>확인</Modal.ActionButton>
  </Modal.Footer>
</Modal>
```

#### 확인 모달 (Confirm Modal)

```jsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition="center" size="medium">
  <Modal.Header>카드를 삭제하시겠습니까?</Modal.Header>
  <Modal.Body>
    <p>삭제하면 복구하실 수 없습니다.</p>
  </Modal.Body>
  <Modal.Footer>
    <CancelButton onClick={() => setIsOpen(false)}>취소</CancelButton>
    <Modal.ActionButton onClick={() => setIsOpen(false)}>확인</Modal.ActionButton>
  </Modal.Footer>
</Modal>
```

#### 프롬프트 모달 (Prompt Modal)

```jsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition="center" size="medium">
  <Modal.Header>쿠폰 번호를 입력해 주세요.</Modal.Header>
  <Modal.Body>
    <Modal.ModalInput placeholder="" />
  </Modal.Body>
  <Modal.Footer>
    <CancelButton onClick={() => setIsOpen(false)}>취소</CancelButton>
    <Modal.ActionButton onClick={() => setIsOpen(false)}>확인</Modal.ActionButton>
  </Modal.Footer>
</Modal>
```

### 컴파운드 컴포넌트

Modal 컴포넌트는 컴파운드 컴포넌트 패턴을 사용하여 모달 구조에 대한 유연성을 제공합니다:

- `Modal`: 루트 컴포넌트
- `Modal.Header`: 모달 헤더, 닫기 버튼을 포함할 수 있음
- `Modal.Body`: 모달 콘텐츠 영역
- `Modal.Footer`: 버튼을 위한 모달 푸터
- `Modal.ActionButton`: 스타일이 적용된 액션 버튼 (확인 버튼)
- `Modal.CloseButton`: 스타일이 적용된 닫기 버튼
- `Modal.ModalInput`: 모달 내부에서 사용할 수 있는 입력 필드

## API 레퍼런스

### Modal

| 속성 | 타입 | 기본값 | 설명 |
|------|------|---------|-------------|
| isOpen | boolean | 필수 | 모달의 표시 여부를 제어 |
| onClose | function | 필수 | 모달이 닫혀야 할 때 호출되는 함수 |
| modalPosition | 'center' \| 'bottom' | 'center' | 화면에서의 모달 위치 |
| size | 'small' \| 'medium' \| 'large' \| 'full' | 'medium' | 모달의 크기 |
| children | ReactNode | - | 모달의 내용 |

### Modal.Header

| 속성 | 타입 | 기본값 | 설명 |
|------|------|---------|-------------|
| children | ReactNode | 필수 | 헤더의 내용 |
| showCloseButton | boolean | false | 헤더에 닫기 버튼 표시 여부 |

### Modal.Body

모달 콘텐츠를 위한 기본 div 요소입니다.

### Modal.Footer

확인/취소 버튼과 같은 액션 버튼을 위한 컨테이너입니다.

### Modal.ActionButton

확인 액션을 위한 스타일이 적용된 버튼 컴포넌트입니다.

### Modal.CloseButton

닫기/취소 액션을 위한 스타일이 적용된 버튼 컴포넌트입니다.

### Modal.ModalInput

| 속성 | 타입 | 기본값 | 설명 |
|------|------|---------|-------------|
| placeholder | string | 필수 | 입력 필드의 플레이스홀더 텍스트 |
| onChange | function | - | 입력값 변경 시 호출되는 함수 |

## 크기 옵션

모달은 4가지 크기 옵션을 제공합니다:

| 옵션 | 너비 | 설명 |
|------|------|-------------|
| small | 320px | 작은 크기의 모달 |
| medium | 480px | 중간 크기의 모달 (기본값) |
| large | 600px | 큰 크기의 모달 |
| full | 100% | 화면 너비 전체를 차지하는 모달 |

## 접근성

이 모달 컴포넌트는, 모달이 열릴 때 첫 번째 포커스 가능한 요소에 자동으로 포커스를 주고, 탭 키로 모달 내에서 포커스를 순환할 수 있도록 하는 키보드 접근성 기능을 제공합니다. 모달이 열려 있는 동안 탭 키를 누르면 모달 내부의 포커스 가능한 요소들 사이에서만 포커스가 이동합니다.

## 스타일링

이 컴포넌트는 스타일링을 위해 `@emotion/styled`를 사용합니다. 다음과 같은 방법으로 외관을 커스터마이징할 수 있습니다:

1. emotion의 styled API를 사용하여 컴포넌트를 직접 스타일링
```tsx
import Modal from 'dslgpgh-modal';
import styled from '@emotion/styled';

// 모달 푸터 커스터마이징
const Footer = styled(Modal.Footer)`
  display: flex;
  justify-content: end;
  gap: 12px;
`;

// 확인 버튼 커스터마이징
const ConfirmButton = styled(Modal.ActionButton)`
  width: 80px;
`;

// 취소 버튼 커스터마이징
const CancelButton = styled(Modal.ActionButton)`
  width: 80px;
  border: 1px solid #333333;
  font-weight: 700;
  font-size: 15px;
  color: #333333;
  background-color: #fff;
`;

// 사용 예시
function StyledModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header showCloseButton>커스텀 스타일 모달</Modal.Header>
        <Modal.Body>
          <p>커스텀 스타일이 적용된 모달 내용입니다.</p>
        </Modal.Body>
        <Footer>
          <CancelButton onClick={() => setIsOpen(false)}>취소</CancelButton>
          <ConfirmButton onClick={() => setIsOpen(false)}>확인</ConfirmButton>
        </Footer>
      </Modal>
    </>
  );
}
```

2. Modal 구조 내에서 자신만의 컴포넌트 사용

```tsx
import Modal from 'dslgpgh-modal';
import styled from '@emotion/styled';

// 직접 만든 컴포넌트 사용
const CustomContent = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 10px 0;
  
  h3 {
    color: #2c3e50;
    margin-top: 0;
  }
  
  p {
    color: #34495e;
    line-height: 1.6;
  }
`;

// 사용 예시
function CustomComponentsExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header showCloseButton>자신만의 컴포넌트 사용</Modal.Header>
        <Modal.Body>
          <CustomContent>
            <h3>중요 공지사항</h3>
            <p>이 모달 내부에 완전히 새로운 컴포넌트를 사용할 수 있습니다.</p>
          </CustomContent>
        </Modal.Body>
        <Modal.Footer>
          <Modal.ActionButton onClick={() => setIsOpen(false)}>
            확인했습니다
          </Modal.ActionButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

## 라이선스
MIT