# Modal Components

본 모듈은 React 애플리케이션에서 사용할 수 있는 모달 컴포넌트를 제공합니다.

## 💡 Installation

```
npm i @sooyeoniya/components
```

## 📚 Documentation

모달 컴포넌트의 사용 방법과 예제를 확인하려면 Storybook 문서를 참조하세요.

[📖 Storybook으로 확인하기]()

Storybook에서는 다음과 같은 정보를 확인할 수 있습니다.

- 기본 모달 및 다양한 변형 예시
- 모달의 다양한 상태와 스타일링 옵션 미리보기
- 인터랙티브 컨트롤을 통한 실시간 속성 변경 테스트

## 🔧 Modal Component Props

| Name            | Datatype                                          | Default  | Description                       |
| --------------- | ------------------------------------------------- | -------- | --------------------------------- |
| position        | 'center' \| 'bottom'                              | 'center' | 모달의 위치를 지정합니다          |
| title           | { text?: string; color?: string; size?: number; } | -        | 모달의 제목과 스타일을 설정합니다 |
| showCloseButton | boolean                                           | true     | 닫기 버튼 표시 여부를 설정합니다  |
| backgroundColor | string                                            | -        | 모달의 배경색을 설정합니다        |
| children        | ReactNode                                         | -        | 모달 내부에 표시될 콘텐츠입니다   |
| isOpen          | boolean                                           | -        | 모달의 열림 상태를 제어합니다     |
| onClose         | () => void                                        | -        | 모달을 닫는 함수입니다            |

## 📌 How to use

```tsx
import { Modal } from "@sooyeoniya/components";
import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div style={{ padding: "20px" }}>
          <h3>모달 내용</h3>
          <p>
            모달 컴포넌트의 children으로 다양한 콘텐츠를 추가할 수 있습니다.
          </p>
          <button onClick={closeModal}>닫기</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
```

## 🎨 Customizing Modal

```tsx
import { Modal } from "@sooyeoniya/components";
import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="bottom"
        title={{
          text: "알림",
          color: "#4a154b",
          size: 24,
        }}
        backgroundColor="#f5f5f5"
      >
        <div style={{ padding: "20px" }}>
          <p>다양한 props를 통해 모달을 커스터마이징할 수 있습니다.</p>
          <button onClick={() => setIsOpen(false)}>확인</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
```

## 👥 Author

[sooyeoniya](https://github.com/sooyeoniya),
[minji2219](https://github.com/minji2219)
