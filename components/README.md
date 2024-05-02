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
    isModalOpen && (
    <Modal>
      <Modal.BackDrop onClose={closeModal} />
      <Modal.Container position=“bottom”>
        <Modal.Header>
          <Modal.Title text=“카드사 선택” />
          <Modal.CloseButton onCloseButtonClick={closeModal} />
        </Modal.Header>
        <YourContent /> 😊
        <Modal.ButtonContainer direction=“column”>
          <Modal.Button theme=“dark” onClick={closeModal}>
            동의하고 저장하기
          </Modal.Button>
          <Modal.Button theme=“white” onClick={closeModal}>
            닫기
          </Modal.Button>
        </Modal.ButtonContainer>
      </Modal.Container>
    </Modal>
    )
  );
}
export default App;
```

- **Modal.BackDrop**

```tsx
<Modal.BackDrop onClose={closeModal} />
```

| props   | type       | description                                                                                         |
| ------- | ---------- | --------------------------------------------------------------------------------------------------- |
| onClose | () => void | backDrop 클릭시 실행할 핸들러를 받습니다. <br/> 위의 예시처럼 모달을 끄는 핸들러를 넣어주면 됩니다. |

- **Modal.Container**

```tsx
<Modal.Container position=“bottom”>
  // Modal Header
  // Modal Content - Your Content
  // Modal ButtonContainer
</Modal.Container>
```

| props    | type                      | description                                                                                                                                                                                                                                                     |
| -------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position | 'top', 'center', 'bottom' | 모달 내용의 위치를 결정합니다.<br/> top의 경우 App의 상단, bottom의 경우 하단, 그리고 center의 경우 중간에 위치합니다.<br/> 이때 top과 bottom의 경우 App의 너비 100%를 차지하는 반면, center의 경우 85%을 가집니다. <br/> UI를 고려하여 너비에 차이를 뒀습니다. |

- **Modal.Header**

```tsx
<Modal.Header>
  <Modal.Title text=“안녕하세요👋🏻” />
  <Modal.CloseButton onCloseButtonClick={closeModal} />
</Modal.Header>
```

| props              | type       | description                                                                                           |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------------------- |
| text               | string     | 모달의 제목을 표시해줍니다.                                                                           |
| onCloseButtonClick | () => void | 모달 닫기 버튼을 클릭 시, 실행할 핸들러를 받습니다. 위의 예시처럼 모달을 끄는 들러를 넣어주면 됩니다. |

- **Modal.ButtonContainer**

```tsx
<Modal.ButtonContainer direction=“column”>
  <Modal.Button theme=“dark” onClick={closeModal}>
    동의하고 저장하기
  </Modal.Button>
  <Modal.Button theme=“white” onClick={closeModal}>
    닫기
  </Modal.Button>
</Modal.ButtonContainer>
```

| props     | type            | description                                                                                                                                                     |
| --------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| direction | 'row', 'column' | 버튼의 정렬 방향을 결정합니다. row의 경우 가로로 정렬을 하며, column의 경우 세로로 정렬합니다.                                                                  |
| theme     | 'dark', 'white' | 버튼의 색을 결정합니다. dark의 경우 검은색 버튼을, white의 경우 배경이 흰 버튼을 제공합니다. 현재는 이 두 theme만 있으며 언제든 새로운 theme이 추가 가능합니다! |
| onClick   | () => void      | 버튼을 클릭했을 경우 실행할 핸들러를 받습니다.                                                                                                                  |

### 고려한 점

- 예측 가능한 영역과, 그렇지 않은 영역 구분하기

![modal-description](modal-description.png)

우선 라이브러리의 사용자는 개발자이므로 어떻게 하면 개발자가 유연하게 사용할 수 있을지에 대해서 고민했습니다. 따라서, 예측 가능한 영역과 그렇지 않은 영역을 구분하고 예측이 불가능 한 영역 즉, `Content`와 같은 매번 달라질 수 있는 UI 영역을 `children`으로만 받을 수 있도록 하여 재사용성을 높였습니다.
