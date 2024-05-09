# React-Modules-Component

## How to use

```
npm i easy-payments-ui
```

## Components

### Modal Component

#### How to use

```ts
import { Modal } from "easy-payments-ui-pome";

function App() {
  const { isCLose, setIsClose } = useState(false);
  //...
  return (
    <Modal>
      <div>모달 Contents에 해당하는 요소입니다.</div>
    </Modal>
  );
}
```

#### Attributes

- `position`[default : "center"] : "center" | "bottom"
- `title`[optional]: 모달창 최상단에 위치할 제목 문자열
- `children`[optional] : 모달 내부에 들어갈 컨텐츠 요소를 넣어준다.
- `onConfirm`[optional]: 확인 버튼 함수
- `onClose`[optional]: 취소 버튼 함수
- `onChange`[optional]: input 값을 다루는 함수
- `inputValue`[optional]: input state value
- `size`[default: "midium"]: "small" | "medium" | "large"
- `type`[default: "confirm"]: "alert" | "confirm" | "prompt"
