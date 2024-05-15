# chlwlstlf-modal

공용 모달 라이브러리 컴포넌트

## - 설치

```
npm install chlwlstlf-modal
```

## - 사용법

1\. import

```jsx
import { Modal } from "chlwlstlf-modal";
```

<br>

2\. isOpen state 선언
컴포넌트 안에 state를 선언해줍니다.

```tsx
const [isOpen, setIsOpen] = useState(false);
```

<br>

3\. 핸들러 함수 선언

```tsx
const handleClose = () => setIsOpen(false);
const handleOpen = () => setIsOpen(true);
```

<br>

4\. 모달 컴포넌트 추가

```tsx
<div id="app">
  <button onClick={handleOpen}>Open Modal</button>
  <Modal
    isOpen={isOpen}
    onClose={handleClose}
    position="center"
  >
    <Modal.Header>모달 상단 내용</Modal.Header>
    <Modal.Content>모달 상세 내용</Modal.Content>
    <Modal.Footer>모달 하단 내용</Modal.Footer>
  </Modal>
</div>
```

<br>

5\. 사용법 예시 - App.tsx

![1](https://github.com/chlwlstlf/data/assets/63334368/4dd57dda-6f87-4faa-87d1-5a89f7fffefc)

```jsx
import React, { useState } from "react";
import { Modal } from "chlwlstlf-modal";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div id="app">
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        position="center"
      >
        <Modal.Header>
          <Modal.Title>기본 모달입니다.</Modal.Title>
          <Modal.CloseButton onClick={handleClose}></Modal.CloseButton>
        </Modal.Header>
        <Modal.Content>모달 content</Modal.Content>
        <Modal.Footer>
          <Modal.Button
            variant="primary"
            onClick={handleClose}
          >
            동의하고 저장하기
          </Modal.Button>
          <Modal.Button
            variant="secondary"
            onClick={handleClose}
          >
            닫기
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
```

<br>
<br>

## Modal Component Props

| Name       | Datatype                 | Default       | Description                                                                                                                          | Required |
| ---------- | ------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| isOpen     | boolean                  | false         | 모달의 열림 상태                                                                                                                     | Yes      |
| onClose    | () => void               | none          | 모달이 닫혔을 때의 이벤트, isOpen을 false로 바꾸는 이벤트를 기대합니다. (뒤에 어두운 배경을 눌렀을 때 모달을 닫히게 할 수 있습니다.) | Yes      |
| size       | 'small' 'medium' 'large' | 'medium'      | 모달 컨테이너의 크기                                                                                                                 | No       |
| position   | 'center' 'bottom'        | 'center'      | 모달 컨테이너의 위치                                                                                                                 | No       |
| className  | string                   | ''            | 모달 컨테이너의 클래스명                                                                                                             | No       |
| zIndex     | number                   | ''            | 모달 컨테이너의 z-index                                                                                                              | No       |
| portalRoot | HTMLElement null         | document.body | 스크롤 막고자하는 요소                                                                                                               | No       |

<br>
<br>

## Modal Component Combinations

| Name        | Description                    |
| ----------- | ------------------------------ |
| Header      | 모달 상단 - 제목, 닫기 버튼 등 |
| Content     | 모달 컨텐트 - 모달 상세 내용   |
| Footer      | 모달 하단 - 확인, 취소 버튼 등 |
| Title       | 모달 제목                      |
| Message     | 모달 내용                      |
| CloseButton | x 아이콘 버튼                  |
| Button      | 모달에 쓰이는 버튼             |
| Input       | 모달에 쓰이는 인풋             |

<br>
<br>

## AlertModal

### 사용법 예시

![2](https://github.com/chlwlstlf/data/assets/63334368/a6358216-448e-4090-8559-76c2481a776b)

```tsx
const AlertSample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <button onClick={handleOpen}>Open Alert Modal</button>

      <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        title="아이디를 입력해 주세요."
        message="아이디는 필수로 입력해야 합니다."
      ></AlertModal>
    </div>
  );
};
```

### AlertModal Component Props

※ 기본적으로 Modal의 Props를 모두 사용합니다.

| Name       | Datatype | Default | Description               | Required |
| ---------- | -------- | ------- | ------------------------- | -------- |
| title      | string   | ""      | 모달 제목                 | Yes      |
| message    | string   | ""      | 사용자에게 전달할 메시지  | Yes      |
| buttonText | string   | "확인"  | 확인 버튼에 들어갈 텍스트 | No       |

<br>
<br>

## ConfirmModal

### 사용법 예시

![3](https://github.com/chlwlstlf/data/assets/63334368/6a0183b3-8525-4a58-a193-2e1e15e3aadd)

```tsx
const ConfirmSample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleConfirm = () => {
    alert("확인되었습니다.");
    handleClose();
  };
  const handleCancel = () => {
    alert("취소되었습니다.");
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Confirm Modal</button>

      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        title="카드를 삭제하시겠습니까?"
        message="삭제하면 복구하실 수 없습니다."
      ></ConfirmModal>
    </div>
  );
};
```

### ConfirmModal Component Props

※ 기본적으로 Modal의 Props를 모두 사용합니다.

| Name              | Datatype   | Default | Description                    | Required |
| ----------------- | ---------- | ------- | ------------------------------ | -------- |
| onConfirm         | () => void | none    | 확인 버튼을 눌렀을 때의 이벤트 | Yes      |
| onCancel          | () => void | none    | 취소 버튼을 눌렀을 때의 이벤트 | Yes      |
| title             | string     | ""      | 모달 제목                      | Yes      |
| message           | string     | ""      | 사용자에게 전달한 선택지       | Yes      |
| confirmButtonText | string     | "확인"  | 확인 버튼에 들어갈 문구        | No       |
| cancelButtonText  | string     | "취소"  | 취소 버튼에 들어갈 문구        | No       |

<br>
<br>

## PromptModal

### 사용법 예시

※ Prompt이기 때문에 이 모달 안에는 input이 필수로 있습니다.

![4](https://github.com/chlwlstlf/data/assets/63334368/5dee223a-b1a5-4781-9629-d2bf0b9e7fe2)

```tsx
const PromptSample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };
  const handleSubmit = () => {
    alert(`${couponCode}를 입력하였습니다.`);
    handleClose();
    setCouponCode("");
  };
  const handleCancel = () => {
    alert("취소되었습니다.");
    handleClose();
    setCouponCode("");
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Prompt Modal</button>

      <PromptModal
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        title="쿠폰 번호를 입력해 주세요."
        value={couponCode}
        onChange={handleChange}
      ></PromptModal>
    </div>
  );
};
```

### PromptModal Component Props

※ 기본적으로 Modal의 Props를 모두 사용합니다.

| Name             | Datatype                                         | Default | Description                                                                        | Required |
| ---------------- | ------------------------------------------------ | ------- | ---------------------------------------------------------------------------------- | -------- |
| onSubmit         | () => void                                       | none    | 제출 버튼을 눌렀을 때의 이벤트, input에 적은 value를 제출하기를 기대합니다.        | Yes      |
| onCancel         | () => void                                       | none    | 취소 버튼을 눌렀을 때의 이벤트, input값이 초기화되면서 모달이 닫히기를 기대합니다. | Yes      |
| title            | string                                           | ""      | 모달 제목                                                                          | Yes      |
| submitButtonText | string                                           | "확인"  | 제출 버튼에 들어갈 문구                                                            | No       |
| cancelButtonText | string                                           | "취소"  | 취소 버튼에 들어갈 문구                                                            | No       |
| value            | string                                           | none    | input에 작성한 값                                                                  | Yes      |
| onChange         | (e: React.ChangeEvent<HTMLInputElement>) => void | none    | input 값이 바뀔 때마다 그 value를 저장하는 이벤트                                  | Yes      |

<br>
<br>

## Author

- [tenten github](https://github.com/chlwlstlf)

## License

MIT
