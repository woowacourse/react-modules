# Modal Component Module

React 기반의 간단한 모달 컴포넌트입니다.

## 설치 방법

```Bash
npm install @cys4585/react-modal
```

## 사용 방법

```tsx
<Modal
  isOpen={isOpen}
  title="Title"
  position="center"
  hasCloseButton={true}
  footerButtons={footerButtons}
  onClose={() => setIsOpen(false)}
>
  <p>Sample Modal!</p>
</Modal>
```

- `isOpen` : 모달을 열고 닫을 수 있는 상태값입니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `position`(선택) : 모달의 위치를 정합니다. (`center`(기본값) / `bottom`)
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다.
- `hasCloseButton`(선택) : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 설정합니다. (`true`(기본값) / `false`)
- `footerButtons`(선택) : 모달 하단에 배치할 버튼들을 설정합니다. 이 버튼들은 `ModalButton` 컴포넌트 배열 형태로 추가 가능합니다.
- `onClose`: 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

## 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@cys4585/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>@cys4585/react-modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <Modal
        isOpen={isOpen}
        title="Title"
        position="center"
        hasCloseButton={true}
        footerButtons={[
          <ModalButton
            text="Primary Button Style"
            style="primary"
            onClick={() => alert('Clicked primary button!')}
          />,
          <ModalButton
            text="Secondary Button Style"
            style="secondary"
            onClick={() => alert('Clicked secondary button!')}
          />,
        ]}
        onClose={() => setIsOpen(false)}
      >
        <p>Sample Modal!</p>
      </Modal>
    </>
  );
}
```
