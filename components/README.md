# React Modal 컴포넌트

다양한 위치 옵션을 제공하는 유연하고 커스터마이징 가능한 React 모달 컴포넌트입니다.

## 설치

```bash
npm install dslgpgh-modal
# 또는
yarn add dslgpgh-modal
```

## 사용법

### 기본 사용법

```jsx
import { Modal } from 'dslgpgh-modal';
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
          <Modal.ConfirmButton onClick={() => setIsOpen(false)}>
            확인
          </Modal.ConfirmButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

### 위치 옵션

모달은 두 가지 방식으로 위치를 지정할 수 있습니다:

```jsx
// 중앙 모달 (기본값)
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} position="center">
  {/* 모달 내용 */}
</Modal>

// 하단 모달
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} position="bottom">
  {/* 모달 내용 */}
</Modal>
```

### 컴파운드 컴포넌트

Modal 컴포넌트는 컴파운드 컴포넌트 패턴을 사용하여 모달 구조에 대한 유연성을 제공합니다:

- `Modal`: 루트 컴포넌트
- `Modal.Header`: 모달 헤더, 닫기 버튼을 포함할 수 있음
- `Modal.Body`: 모달 콘텐츠 영역
- `Modal.Footer`: 버튼을 위한 모달 푸터
- `Modal.ConfirmButton`: 스타일이 적용된 확인 버튼
- `Modal.CloseButton`: 스타일이 적용된 닫기 버튼

## API 레퍼런스

### Modal

| 속성 | 타입 | 기본값 | 설명 |
|------|------|---------|-------------|
| isOpen | boolean | 필수 | 모달의 표시 여부를 제어 |
| onClose | function | 필수 | 모달이 닫혀야 할 때 호출되는 함수 |
| position | 'center' \| 'bottom' | 'center' | 화면에서의 모달 위치 |
| children | ReactNode | - | 모달의 내용 |

### Modal.Header

| 속성 | 타입 | 기본값 | 설명 |
|------|------|---------|-------------|
| children | ReactNode | 필수 | 헤더의 내용 |
| showCloseButton | boolean | false | 헤더에 닫기 버튼 표시 여부 |

### Modal.Body

모달 콘텐츠를 위한 기본 div 요소

### Modal.Footer

확인/취소 버튼과 같은 액션 버튼을 위한 컨테이너

### Modal.ConfirmButton

확인 액션을 위한 스타일이 적용된 버튼 컴포넌트

### Modal.CloseButton

닫기/취소 액션을 위한 스타일이 적용된 버튼 컴포넌트

## 스타일링

이 컴포넌트는 스타일링을 위해 `@emotion/styled`를 사용합니다. 다음과 같은 방법으로 외관을 커스터마이징할 수 있습니다:

1. emotion의 styled API를 사용하여 컴포넌트를 직접 스타일링
```tsx
import { Modal } from 'dslgpgh-modal';
import styled from '@emotion/styled';

// 기존 모달 컴포넌트를 확장하여 스타일 커스터마이징
const CustomModal = styled(Modal)`
  background-color: #f9f9f9;
`;

// 모달 바디를 커스터마이징
const CustomBody = styled(Modal.Body)`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// 모달 헤더 커스터마이징
const CustomHeader = styled(Modal.Header)`
  border-bottom: 1px solid #eee;
  padding-bottom: 16px;
  margin-bottom: 16px;
  color: #333;
`;

// 사용 예시
function StyledModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      
      <CustomModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CustomHeader showCloseButton>커스텀 스타일 모달</CustomHeader>
        <CustomBody>
          <p>커스텀 스타일이 적용된 모달 내용입니다.</p>
        </CustomBody>
        <Modal.Footer>
          <Modal.ConfirmButton onClick={() => setIsOpen(false)}>확인</Modal.ConfirmButton>
        </Modal.Footer>
      </CustomModal>
    </>
  );
}
```

2. Modal 구조 내에서 자신만의 컴포넌트 사용

```tsx
import { Modal } from 'dslgpgh-modal';
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

const CustomButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

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
          <CustomButton onClick={() => setIsOpen(false)}>
            확인했습니다
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

## 라이선스
MIT