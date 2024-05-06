# paran-simple-modal

- Simple modal component module made by paran and fe

## How to install

```
npm install paran-simple-modal
```

## Properties

### (optional)title: string

### (optional)subtitle: string

### onClose: () => void

### (optional)confirmButton

- content: string
- onConfirm: () => void

### (optional)cancelButton

- content: string
- onCancel: () => void

### modal-position

value: 'center' | 'bottom'

### (optional)preventCloseOnOutsideClick

default: false

### children: ReactNode

---

## Storybook

link: [here](https://6638f8463b7cb5cd9e63da7f-aawuumjsnf.chromatic.com/?path=/docs/modal-bottom--docs)

## Usage

```tsx
import React, { useState } from "react";
import { Modal } from "paran-simple-modal";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {isOpened ? (
        <Modal
          onClose={() => {
            setIsOpened(false);
          }}
          modalPosition="bottom"
          title="test"
          subtitle="123123"
          confirmButton={{
            content: "확인",
            onConfirm: () => {
              alert("확인");
            },
          }}
          cancelButton={{
            content: "취소",
            onCancel: () => {
              alert("취소");
            },
          }}
          children={<p>hi</p>}
          preventCloseOnOutsideClick={true}
        />
      ) : (
        <button onClick={() => setIsOpened(true)}>모달 열기</button>
      )}
    </>
  );
}

export default App;
```
