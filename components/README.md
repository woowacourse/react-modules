# Modal Module 라이브러리

## 소개

@happyjurung/modal은 React 애플리케이션에서 모달 창을 쉽고 일관되게 구현할 수 있도록 돕는 라이브러리입니다.

## 설치

```bash
npm install @happyjurung/modal
```

## 주요 기능

- 헤더 & 닫기 버튼: title과 CloseButton으로 기본 헤더 레이아웃과 닫기 기능 제공
- 위치 제어: position prop으로 center/bottom 등 원하는 위치에 배치 가능
- 포함 콘텐츠: children에 어떤 JSX든 전달해 자유롭게 본문 구성
- 열림/닫힘 상태: isModalOpen과 onClose로 모달 제어

## 사용 예시

```js
import React, { useState } from "react";
import Modal from "@happyjurung/modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>모달 열기</button>
      <Modal
        isModalOpen={open}
        position="center"
        title="모달 제목"
        onClose={() => setOpen(false)}
      >
        <p>여기 모달 본문 내용을 작성하세요.</p>
      </Modal>
    </>
  );
}

export default App;
```
