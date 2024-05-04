# 페이먼츠 컴포넌트

## 📦 Modal

페이먼츠 모달 컴포넌트입니다.

### install

```
npm install nakta-react-payments-components
```

### attribute

- `position`: `bottom | center` 입력 값에 따라 모달 중앙, 하단 배치
- `title`: 모달 제목 입력
- `onClose`: 모달 닫기 함수 전달
- `isCloseButton`: 모달 닫기 버튼 유무 입력
- `children`: 하위 요소 전달

### QuickStart

```javascript
import React, { useState } from 'react';
import 'nakta-react-payments-components/dist/style.css';
import { Modal } from 'nakta-react-payments-components';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={onClick}>modal open</button>
      {isOpen && (
        <Modal position='center' title='제목' onClose={onClose} isCloseButton={true}>
          <div>모달 내부 내용입니다.</div>
        </Modal>
      )}
    </>
  );
}

export default App;
```
