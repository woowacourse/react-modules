# LongButton Component

## How to use

```tsx
import { LongButton } from "easy-payments-ui";

function App() {
    const {isCLose, setIsClose} = useState(false)
  //...
  return (
    <LongButton handleClick={setIsClose(false)}>
        <div>Hello World</div>
    </LongButton>;
  )
}
```

## Attributes

1. `type` : "cancel" | "confirm"
2. `handleClick` [optional] : 버튼을 클릭했을 때 실행할 핸들러 함수
3. `children`[optional] : 버튼 내부에 들어갈 요소
