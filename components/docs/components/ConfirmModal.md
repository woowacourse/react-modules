# ConfirmModal Component

## How to use

1. ConfirmModal를 사용하는 컴포넌트를 `ModalProvider`으로 감싸줍니다.

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

2. `ModalProvider`내부 요소에서 `ConfirmModal` 컴포넌트와 `useModalAction`을 사용할 수 있습니다.

```tsx
import { ConfirmModal } from "easy-payments-ui";

function App() {
  const action = useModalAction();
  //...
  return (
    <>
      <button onClick={action.handleOpen}>모달을 켜는 버튼</button>
      <ConfirmModal title="삭제하시겠습니까?">삭제하면 복구할 수 없습니다.</ConfirmModal>
    </>
  );
}
```

## ConfirmModal Component Attributes

| 속성(Attribute) | 필수 여부(Required) | 기본값(Default) | 설명(Description)                                                                                                        |
| --------------- | ------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `title`         | -                   | -               | 모달창 최상단에 위치할 제목 문자열 혹은 리액트 컴포넌트                                                                  |
| `width`         | -                   | 242 (number)    | 모달창의 너비를 결정하는 요소. 단위는 픽셀. 242px 미만은 권장하지 않는다. 'position'속성이 'center'일 경우에만 적용된다. |
| `theme`         | -                   | window 설정 값  | "light" 혹은 "dark" 색상 테마                                                                                            |
| `onConfirm`     | -                   | -               | 확인 버튼 함수                                                                                                           |
