# Modal Component

## How to use

1. Modal을 사용하는 컴포넌트를 `ModalProvider`으로 감싸줍니다.

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

2. `ModalProvider`내부 요소에서 `Modal` 컴포넌트와 `useModalAction`을 사용할 수 있습니다.

```tsx
import { Modal, useModalAction } from "easy-payments-ui";

function App() {
  const action = useModalAction();
  //...
  return (
    <>
      <button onClick={action.handleOpen}>모달을 켜는 버튼</button>
      <Modal title="타이틀에 해당하는 문자열, 혹은 리액트 요소입니다.">
        <div>모달 Contents에 해당하는 요소입니다.</div>
      </Modal>
    </>
  );
}
```

## Modal Component Attributes

| 속성(Attribute)       | 필수 여부(Required) | 기본값(Default) | 설명(Description)                                                                                                        |
| --------------------- | ------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `position`            | -                   | "center"        | "center" 혹은 "bottom" 값                                                                                                |
| `closeButtonPosition` | -                   | "top"           | "top" 혹은 "bottom" 값                                                                                                   |
| `hasConfirmButton`    | -                   | true (boolean)  | 확인 버튼이 아래에 위치할지 결정하는 요소                                                                                |
| `title`               | -                   | -               | 모달창 최상단에 위치할 제목 문자열 혹은 리액트 컴포넌트                                                                  |
| `width`               | -                   | 242 (number)    | 모달창의 너비를 결정하는 요소. 단위는 픽셀. 242px 미만은 권장하지 않는다. 'position'속성이 'center'일 경우에만 적용된다. |
| `theme`               | -                   | window 설정 값  | "light" 혹은 "dark" 색상 테마                                                                                            |
| `children`            | -                   | -               | 모달 내부에 들어갈 컨텐츠 요소를 넣어준다.                                                                               |
| `onConfirm`           | -                   | -               | 확인 버튼 함수                                                                                                           |
| `onClose`             | -                   | -               | 취소 버튼 함수                                                                                                           |

## useModalAction

| 기능 (action) | 설명(Description)  |
| ------------- | ------------------ |
| `handleOpen`  | 모달을 오픈합니다. |
| `handleClose` | 모달을 닫습니다.   |
