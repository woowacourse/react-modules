# Modal Module 라이브러리

jurunghappy-modal은 React 애플리케이션에서 모달 창을 쉽고 일관되게 구현할 수 있도록 돕는 라이브러리입니다.

## 주요 기능

- 헤더 & 닫기 버튼: title과 CloseButton으로 기본 헤더 레이아웃과 닫기 기능 제공
- 위치 제어: position prop으로 center/bottom 등 원하는 위치에 배치 가능
- 포함 콘텐츠: children에 어떤 JSX든 전달해 자유롭게 본문 구성
- 열림/닫힘 상태: isOpen과 onClose로 모달 제어
- ESC : ESC 키로 모달 닫힘 기능 제공
- 배경 클릭 시 닫힘: onBackdropClick 추가로 배경 클릭 시 모달 닫힘
- 배경 클릭 시 닫힘 여부 선택 가능 : closeOnBackdropClick true/false로 조절 가능 / 기본값 true
- 닫힘 버튼 유무 설정: showCloseButton을 통해 닫기 버튼 유무 결정 가능
- 사이즈 조절: 모달 사이즈 'small', 'medium', 'large' 크기 조절 가능 / 기본값 'small'로 설정

## 설치

```bash
npm install jurunghappy-modal
```

## 사용 예시

```js
import React, { useState } from 'react';
import Modal from 'jurunghappy-modal';
function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>모달 열기</button>
      <Modal
        isOpen={open}
        position="center"
        title="모달 제목"
        showCloseButton={true}
        size="small"
        onClose={() => setOpen(false)}
        closeOnBackdropClick={true}
      >
        <p>여기 모달 본문 내용을 작성하세요.</p>
      </Modal>
    </>
  );
}
export default App;
```

## 추가 모달 제공

### AlertModal

```js
<AlertModal
  isOpen={isOpen}
  position="center"
  size="large"
  title="타이틀"
  message="메시지"
  onClose={() => setIsOpen(false)}
  onBackdropClick={handleBackdropClick}
/>
```

### ConfirmModal

**추가 기능**

- onConfirm : '확인' 버튼에 대한 동작 수행

```js
<ConfirmModal
  isOpen={isOpen}
  position="center"
  size="large"
  title="타이틀"
  message="메시지"
  onClose={() => setIsOpen(false)}
  onConfirm={() => {}}
  onBackdropClick={handleBackdropClick}
/>
```

### PromptModal

**추가 기능**

- onChange : input value 값 적용
- onSubmit : input 폼 적용 완료에 대한 동작 수행

```js
<PromptModal
  isOpen={isOpen}
  position="center"
  size="large"
  title="타이틀"
  value={input}
  onClose={() => setIsOpen(false)}
  onChange={(e) => {
    setInput(e.target.value);
  }}
  onSubmit={(e) => {
    e.preventDefault();
  }}
  onBackdropClick={handleBackdropClick}
/>
```
