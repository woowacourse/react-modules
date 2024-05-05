# ModalHeader Component

## How to use

1. ModalHeader를 사용하는 컴포넌트를 `ModalProvider`으로 감싸줍니다.

```tsx
import { ModalProvider } from "easy-payments-ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
```

2. ModalHeader를 사용할 수 있습니다.

```tsx
import { ModalHeader } from "easy-payments-ui";

function App() {
  //...
  return (
    <ModalHeader>
      <div>Hello World</div>
    </ModalHeader>
  );
}
```

## Attributes

| 속성(Attribute)  | 필수 여부(Required) | 기본값(Default) | 설명(Description)                                                                            |
| ---------------- | ------------------- | --------------- | -------------------------------------------------------------------------------------------- |
| `hasCloseButton` | -                   | true (boolean)  | 모달을 닫는 버튼의 여부를 나타냅니다. false일 경우 `ModalProvider`를 사용하지 않아도 됩니다. |

## Description

1. 스타일 flex, space-between을 적용 시킨다.
