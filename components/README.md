# 📦 Modal 컴포넌트

우아한테크코스 components 모듈 배포 실습용 **조립형 모달 컴포넌트**입니다.  
`isOpen`, `handleCloseModal`과 함께 내부 구조를 구성할 수 있는 여러 컴포넌트를 제공하여, **유연하게 레이아웃을 조합**할 수 있습니다.

---

## ✨ Features

- Compound Component Pattern 기반 구조 제공
- `Modal.Title`, `Modal.Content`, `Modal.CloseButton` 등 **조립 가능한 서브 컴포넌트**
- 가운데 또는 하단 위치 지정 가능 (`"center"`, `"bottom"`)
- 외부 영역 클릭 및 키보드 이벤트로 모달 닫기 지원
- React + TypeScript 기반

---

## 📦 설치

```bash
npm install @woowacourse/modal
# 또는
yarn add @woowacourse/modal
```

---

## 🧩 사용 예시

```tsx
import Modal from "./lib/Modal";
import { useState } from "react";
import React from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>

      <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <Modal.Background onClick={handleCloseModal}>
          <Modal.ModalContainer
            position="center"
            onClick={(e) => e.stopPropagation()}
          >
            <Modal.HeaderSection>
              <Modal.Title>모달 타이틀</Modal.Title>
              <Modal.ModalCloseButton onClick={handleCloseModal}>
                <img src="./closeIcon.png" alt="닫기" />
              </Modal.ModalCloseButton>
            </Modal.HeaderSection>
            <Modal.ModalContent>
              <p>모달 내용입니다.</p>
            </Modal.ModalContent>
          </Modal.ModalContainer>
        </Modal.Background>
      </Modal>
    </>
  );
};

export default App;
```

---
