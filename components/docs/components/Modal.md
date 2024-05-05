# Modal Component

## How to use

```tsx
import { Modal } from "easy-payments-ui";

function App() {
  const { isCLose, setIsClose } = useState(false);
  //...
  return (
    <Modal title="타이틀에 해당하는 문자열, 혹은 리액트 요소입니다.">
      <div>모달 Contents에 해당하는 요소입니다.</div>
    </Modal>
  );
}
```

## Attributes

| 속성(Attribute)       | 필수 여부(Required) | 기본값(Default) | 설명(Description)                                                                                                        |
| --------------------- | ------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `position`            | -                   | "center"        | "center" 혹은 "bottom" 값                                                                                                |
| `closeButtonPosition` | -                   | "top"           | "top" 혹은 "bottom" 값                                                                                                   |
| `hasConfirmButton`    | -                   | true (boolean)  | 확인 버튼이 아래에 위치할지 결정하는 요소                                                                                |
| `title`               | -                   | -               | 모달창 최상단에 위치할 제목 문자열 혹은 리액트 컴포넌트                                                                  |
| `width`               | -                   | 242             | 모달창의 너비를 결정하는 요소. 단위는 픽셀. 242px 미만은 권장하지 않는다. 'position'속성이 'center'일 경우에만 적용된다. |
| `theme`               | -                   | window 설정 값  | "light" 혹은 "dark" 색상 테마                                                                                            |
| `children`            | -                   | -               | 모달 내부에 들어갈 컨텐츠 요소를 넣어준다.                                                                               |
| `onConfirm`           | -                   | -               | 확인 버튼 함수                                                                                                           |
| `onClose`             | -                   | -               | 취소 버튼 함수                                                                                                           |
