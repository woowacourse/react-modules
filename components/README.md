# Modal

React 애플리케이션을 위한 접근성과 유연성을 고려한 모달 컴포넌트 라이브러리입니다.

<br/>

## 특징

```
합성 컴포넌트 패턴: 자유롭게 구성 가능한 API를 통해 다양한 모달 유형 구현 가능
접근성(A11y) 최적화: 키보드 네비게이션, 포커스 트랩
내장 액션 컴포넌트: 확인, 취소 등 자주 사용되는 액션 버튼 내장
TypeScript 지원: 완전한 타입 정의로 개발 경험 향상
```

<br/>

## 설치

### npm

npm install @suhwa/react-modal

### yarn

yarn add @suhwa/react-modal

<br/>

## 기본 사용법

```jsx
import { Modal } from '@suhwa/react-modal';
import { Button } from './components';

function App() {
  return (
    <Modal>
      <Modal.Trigger>
        <Button>모달 열기</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>기본 모달</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>

        <p>모달 내용을 여기에 작성합니다.</p>
        <Modal.Footer>
          <Modal.ActionButton action="confirm">확인</Modal.ActionButton>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
```

<br/>

## 컴포넌트 API

### Modal

모달의 루트 컴포넌트로, 합성 패턴의 기반이 됩니다.

```jsx
<Modal size="medium">모달 내용</Modal>
```

#### Props

- `size` ('small' | 'medium' | 'large' 'medium') : 모달의 크기를 지정합니다
- `children` (ReactNode) : 모달 구성 요소 (Trigger, Content 등)
- `className` (string) : 커스텀 CSS 클래스

<br/>

### Modal.Trigger

모달을 여는 트리거 컴포넌트입니다.

```jsx
<Modal.Trigger>
  <Button>모달 열기</Button>
</Modal.Trigger>
```

#### Props

- `children` (ReactNode) : 클릭 가능한 요소
- `asChild` (boolean) : 자식 요소의 속성을 트리거에 전달할지 여부
- `className` (string) : 커스텀 CSS 클래스

<br/>

### Modal.Content

모달의 실제 내용을 포함하는 컨테이너입니다.

```jsx
<Modal.Content>{/_ 모달 내용 _/}</Modal.Content>
```

#### Props

- `children` (ReactNode) 모달 내용
- `className` (string) 커스텀 CSS 클래스

<br/>

### Modal.Header

모달의 헤더 영역입니다.

```jsx
<Modal.Header>
  <Modal.Title>제목</Modal.Title>
  <Modal.CloseButton />
</Modal.Header>
```

<br/>

### Modal.Title

모달의 제목 컴포넌트입니다.

```jsx
<Modal.Title>모달 제목</Modal.Title>
```

<br/>

### Modal.Description

모달의 설명 텍스트를 표시합니다.

```jsx
<Modal.Description>모달에 대한 설명입니다.</Modal.Description>
```

<br/>

### Modal.Footer

모달의 하단 영역으로, 주로 액션 버튼을 포함합니다.

```jsx
<Modal.Footer>
  <Modal.ActionButton action="cancel">취소</Modal.ActionButton>
  <Modal.ActionButton action="confirm">확인</Modal.ActionButton>
</Modal.Footer>
```

<br/>

### Modal.CloseButton

모달을 닫는 버튼 컴포넌트입니다.

```jsx
<Modal.CloseButton />
```

<br/>

### Modal.ActionButton

모달 내 액션 버튼 컴포넌트로, 자동으로 모달을 닫는 기능이 포함되어 있습니다.

```jsx
<Modal.ActionButton action="confirm" onClick={() => console.log('확인 클릭')}>
  확인
</Modal.ActionButton>
```

#### Props

- `action` ('confirm' | 'cancel' | 'custom' 'confirm') : 버튼의 역할과 스타일 지정
- `onClick` ((e: React.MouseEvent) => void) : 클릭 이벤트 핸들러
- `closeOnClick` (boolean) : 클릭 시 모달 닫기 여부
- `children` (ReactNode) : action에 따라 다름 버튼 텍스트
- `className` (string) : 커스텀 CSS 클래스

<br/>

### 사용 예제

#### 알림 모달

```jsx
<Modal>
  <Modal.Trigger>
    <Button>알림 모달 열기</Button>
  </Modal.Trigger>
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>알림</Modal.Title>
      <Modal.CloseButton />
    </Modal.Header>
    <Modal.Description>작업이 완료되었습니다.</Modal.Description>
    <Modal.Footer>
      <Modal.ActionButton action="confirm">확인</Modal.ActionButton>
    </Modal.Footer>
  </Modal.Content>
</Modal>
```

#### 확인 모달

```jsx
<Modal>
  <Modal.Trigger>
    <Button>확인 모달 열기</Button>
  </Modal.Trigger>
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>정말 삭제하시겠습니까?</Modal.Title>
      <Modal.CloseButton />
    </Modal.Header>
    <Modal.Description>이 작업은 되돌릴 수 없습니다.</Modal.Description>
    <Modal.Footer>
      <Modal.ActionButton action="cancel">취소</Modal.ActionButton>
      <Modal.ActionButton action="confirm" onClick={() => console.log('삭제 확인')}>
        삭제
      </Modal.ActionButton>
    </Modal.Footer>
  </Modal.Content>
</Modal>
```

#### 입력 모달

```jsx
function PromptExample() {
  const [inputValue, setInputValue] = useState('');

  return (
    <Modal>
      <Modal.Trigger>
        <Button>입력 모달 열기</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>쿠폰 번호를 입력해 주세요</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="COUPON" />
        <Modal.Footer>
          <Modal.ActionButton action="cancel">취소</Modal.ActionButton>
          <Modal.ActionButton action="confirm" onClick={() => console.log(`쿠폰 번호: ${inputValue}`)}>
            확인
          </Modal.ActionButton>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
```

### 크기 변형

모달은 `small`, `medium`, `large` 세 가지 크기를 지원합니다.

```jsx
<Modal size="small">
  // 작은 크기 모달 내용
</Modal>

<Modal size="medium">
  // 중간 크기 모달 내용
</Modal>

<Modal size="large">
  // 큰 크기 모달 내용
</Modal>
```

<br/>

### 접근성

이 모달 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

```
키보드 사용자를 위한 포커스 트랩 구현
ESC 키를 눌러 모달 닫기 지원
모달이 닫힐 때 이전 포커스 위치로 복귀
```
