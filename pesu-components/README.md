# `pesu-components` – React UI Components Library

React 프로젝트에서 바로 사용할 수 있는 UI 컴포넌트 모음입니다.  
현재는 모달(Modal) 컴포넌트를 제공합니다.

---

## 목차

- [설치](#설치)
- [컴포넌트 목록 및 시그니처](#컴포넌트-목록-및-시그니처)
  - [Modal](#modal)
- [예제 코드](#예제-코드)

---

## 설치

```bash
npm install pesu-components
# 또는
yarn add pesu-components
```

---

## 컴포넌트 목록 및 시그니처

### `Modal`

화면 중앙 또는 하단에 띄울 수 있는 모달 컴포넌트입니다.  
제목, 닫기 버튼, 위치, 마진, z-index 등 다양한 옵션을 제공합니다.

#### 시그니처

```tsx
import Modal from 'pesu-components/Modal';

<Modal
  title="모달 제목"
  isOpen={isOpen}
  onClose={handleClose}
  position="center" // 또는 "bottom"
  margin={20}
  zIndex={10}
>
  {/* 모달 내용 */}
</Modal>;
```

#### Props

| 이름     | 타입                 | 필수 | 기본값   | 설명                    |
| -------- | -------------------- | ---- | -------- | ----------------------- |
| title    | string               | ✔   | -        | 모달의 제목             |
| isOpen   | boolean              | ✔   | -        | 모달 표시 여부          |
| onClose  | () => void           | ✔   | -        | 모달 닫기 콜백          |
| position | 'center' \| 'bottom' |      | 'center' | 모달 위치               |
| margin   | number               |      | 20       | 좌우 마진(px)           |
| zIndex   | number               |      | 10       | z-index 값              |
| children | React.ReactNode      |      | -        | 모달 내부에 표시할 내용 |

---

## 예제 코드

```tsx
import Modal from 'pesu-components/Modal';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Modal title="안내" isOpen={isOpen} onClose={() => setIsOpen(false)} position="center">
        <p>이곳에 원하는 내용을 넣으세요.</p>
      </Modal>
    </>
  );
}
```
