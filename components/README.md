# @seongjinme/react-modal

우아한테크코스 6기 FE 미션을 위해 제작된 React 기반의 간단한 모달 컴포넌트입니다.

## 설치 방법

```Bash
npm install @seongjinme/react-modal
```

## 사용 방법

```tsx
<Modal
  isOpen={isOpen}
  title="Title"
  position="center"
  width={{ basicWidth: '50%', minWidth: '300px' }}
  hasCloseButton={true}
  footerButtons={buttons}
  isClosableOnClickBackdrop={true}
  zIndex={{ backdrop: 999, modal: 1000 }}
  backdropOpacity="50%"
  onClose={() => setIsOpen(false)}
>
  <p>Sample Modal!</p>
</Modal>
```

### 필수 속성

- `isOpen` : 모달을 열고 닫을 수 있는 상태값을 주입합니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `onClose` : 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

### 선택 속성

- `position` : 모달의 위치를 정합니다. (`center`(기본값) / `bottom`)
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다.
- `width` : 모달의 기본 가로 길이(`basicWidth`)와 최소 가로 길이(`minWidth`)를 정합니다.
- `hasCloseButton` : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 설정합니다. (`true`(기본값) / `false`)
- `footerButtons` : 모달 하단에 배치할 버튼들을 설정합니다. 이 버튼들은 `ModalButtonType` 타입의 배열 형태로 추가 가능합니다.
- `isClosableOnClickBackdrop` : 모달의 배경 영역 클릭 시 `onClose` 콜백 함수의 실행 여부를 정합니다. (`true`(기본값) / `false`)
- `zIndex` : 모달의 배경 영역(`backdrop`; 기본값 `999`)과 모달 영역(`modal`; 기본값 `1000`)의 z-index 값을 정합니다.
- `backdropOpacity` : 모달의 배경 영역에 부여할 투명도를 정합니다. 기본값은 `50%`입니다.

### `footerButtons`를 통해 버튼을 추가하는 방법

`ModalButtonType` 타입의 데이터로 추가할 버튼 항목과 스타일을 지정합니다. 아래 예시를 참고해주세요.

```TypeScript
[
  {
    text: 'Primary Button Style',
    style: 'primary',
    onClick: () => alert('Clicked primary button!'),
  },
  {
    text: 'Secondary Button Style',
    style: 'secondary',
    onClick: () => alert('Clicked secondary button!'),
  },
]
```

## 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const buttons: ModalButtonType[] = [
    {
      text: 'Primary Button Style',
      style: 'primary',
      onClick: () => alert('Clicked primary button!'),
    },
    {
      text: 'Secondary Button Style',
      style: 'secondary',
      onClick: () => alert('Clicked secondary button!'),
    },
  ];

  return (
    <>
      <h1>@seongjinme/react-modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <Modal
        isOpen={isOpen}
        title="Title"
        position="center"
        hasCloseButton={true}
        footerButtons={buttons}
        onClose={() => setIsOpen(false)}
      >
        <p>Sample Modal!</p>
      </Modal>
    </>
  );
}
```
