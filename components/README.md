## `harrysimodal` Get Started

### 설치하기

```shell
npm install harrysimodal
```

### 사용예시

```tsx
import React, { useState } from “react”;

import { Modal } from “harrysimodal”;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>click me, open modal!</button>

      <Modal isOpen={isModalOpen} onClose={closeModal} position="center" device="mobile">
        <Modal.ModalContent size="large">
          <Modal.ModalHeader>
            <Modal.ModalTitle text="your title" />
            <Modal.ModalCloseButton onCloseButtonClick={closeModal} />
          </Modal.ModalHeader>
          <YourContent /> 😊
          <Modal.ModalFooter direction="row" justify="between">
            <Modal.ModalButton theme="dark">button text</Modal.ModalButton>
            <Modal.ModalButton onClick={closeModal}>button text</Modal.ModalButton>
          </Modal.ModalFooter>
        </Modal.ModalContent>
      </Modal>
    </>
  );
}
```

- **Modal**

| Props    | Type              | Default   | Description                                                                                            |
| -------- | ----------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| children | `React.ReactNode` | -         | 모달 내부에 표시할 컨텐츠를 정의합니다.                                                                |
| isOpen   | `boolean`         | -         | 모달의 표시 상태를 결정합니다. `true`일 경우 모달이 렌더링됩니다.                                      |
| position | `ModalPosition`   | 'center'  | 모달의 위치를 정의합니다. 가능한 값은 'top', 'center', 'bottom'입니다.                                 |
| device   | `Device`          | 'desktop' | 디바이스 타입에 따른 모달의 최대 너비를 설정합니다. 가능한 값은 'mobile', 'tablet', 'desktop' 입니다.  |
| onClose  | `() => void`      | -         | 모달을 닫을 때 실행할 핸들러 함수입니다. 일반적으로 백드롭 클릭 시 모달을 닫기 위한 함수를 지정합니다. |

- **Modal.ModalContent**

| Props | Type                       | Default  | Description                                                                   |
| ----- | -------------------------- | -------- | ----------------------------------------------------------------------------- |
| size  | 'small', 'medium', 'large' | 'medium' | 모달 내용의 크기를 결정합니다. 가능한 값은 'small', 'medium', 'large' 입니다. |

- **Modal.Header**

| props              | type       | description                                                                                           |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------------------- |
| text               | string     | 모달의 제목을 표시해줍니다.                                                                           |
| onCloseButtonClick | () => void | 모달 닫기 버튼을 클릭 시, 실행할 핸들러를 받습니다. 위의 예시처럼 모달을 끄는 들러를 넣어주면 됩니다. |

- **Modal.ModalFooter**

| Props     | Type                                                     | Default   | Description                                                                                      |
| --------- | -------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------ |
| direction | `'row'`, `'column'`                                      | 'row'     | 모달 푸터에 위치할 수 있는 버튼의 정렬 방향을 결정합니다.                                        |
| justify   | `'center'`, `'start'`, `'end'`, `'stretch'`, `'between'` | 'between' | 버튼의 정렬 위치를 결정합니다. 가능한 값은 'center', 'start', 'end', 'stretch', 'between'입니다. |
| children  | `React.ReactNode`                                        | -         | 모달 푸터 내부에 표시할 컨텐츠를 정의합니다.                                                     |

- **Modal.ModalButton**

| Props    | Type               | Default  | Description                                                                  |
| -------- | ------------------ | -------- | ---------------------------------------------------------------------------- |
| children | `React.ReactNode`  | -        | 버튼 내부에 표시할 컨텐츠를 정의합니다.                                      |
| onClick  | `() => void`       | -        | 버튼 클릭 시 호출될 이벤트 핸들러입니다.                                     |
| theme    | `ModalButtonTheme` | 'white'  | 버튼의 테마를 설정합니다. 가능한 값은 'dark', 'white'가 있습니다.            |
| size     | `ModalButtonSize`  | 'medium' | 버튼의 크기를 정의합니다. 가능한 값은 'small', 'medium', 'large'가 있습니다. |
| width    | `ButtonWidthProps` | 'full'   | 버튼의 너비를 설정합니다. 가능한 값은 'full', 'fit', 'fixed'가 있습니다.     |

### 고려한 점

- 예측 가능한 영역과, 그렇지 않은 영역 구분하기

![modal-description](modal-description.png)

우선 라이브러리의 사용자는 개발자이므로 어떻게 하면 개발자가 유연하게 사용할 수 있을지에 대해서 고민했습니다. 따라서, 예측 가능한 영역과 그렇지 않은 영역을 구분하고 예측이 불가능 한 영역 즉, `Content`와 같은 매번 달라질 수 있는 UI 영역을 `children`으로만 받을 수 있도록 하여 재사용성을 높였습니다.
