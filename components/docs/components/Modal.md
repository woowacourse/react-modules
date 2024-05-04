# Modal Component

## How to use

```tsx
import { Modal } from "easy-payments-ui";

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

## Attributes

1. `position`[default : "center"] : "center" | "bottom"
2. `closeButtonPosition`[default : "top"] : "top" | "bottom"
3. `hasConfirmButton`[default : true] : 확인 버튼이 아래에 위치할지 결정하는 요소
4. `title`[optional]: 모달창 최상단에 위치할 제목 문자열
5. `children`[optional] : 모달 내부에 들어갈 컨텐츠 요소를 넣어준다.
6. `onConfirm`[optional]: 확인 버튼 함수
7. `onClose`[optional]: 취소 버튼 함수
