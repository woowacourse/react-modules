# Modal Module 라이브러리

## 소개

@happyjurung/modal은 React 애플리케이션에서 모달 창을 쉽고 일관되게 구현할 수 있도록 돕는 라이브러리입니다.

## 설치

```bash
npm install @happyjurung/modal
```

## 주요 기능

- AlertModal: 사용자에게 메시지를 전달하고 확인 버튼만 제공
- ConfirmModal: 사용자에게 선택지를 제공하고 확인 및 취소 버튼 제공
- PromptModal: 사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/취소 버튼 제공
- Option: small, medium, large 등의 크기 옵션을 prop으로 전달받아 모달 크기 조절

## 사용 예시

```js
import React, { useState } from "react";
import { AlertModal } from "happyjurung-modal";

const AlertModalExample = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button onClick={openModal}>경고창 열기</button>

      <AlertModal
        isModalOpen={isModalOpen}
        title="제목"
        description="모달 설명입니다."
        size="medium"
        onClose={closeModal}
      />
    </>
  );
};

export default AlertModalExample;

import React, { useState } from "react";
import { ConfirmModal } from "happyjurung-modal";

const ConfirmModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>삭제하기</button>

      <ConfirmModal
        isModalOpen={isOpen}
        title="제목"
        description="모달 설명입니다."
        size="medium"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ConfirmModalExample;

import React, { useState, ChangeEvent } from "react";
import { PromptModal } from "happyjurung-modal";

const PromptModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>프롬프트 열기</button>

      <PromptModal
        isModalOpen={isOpen}
        title="제목"
        size="medium"
        inputValue={value}
        onChangeInput={handleChange}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default PromptModalExample;


```
