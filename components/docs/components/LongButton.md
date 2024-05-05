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

| 속성(Attribute) | 필수 여부(Required) | 기본값(Default) | 설명(Description)                                            |
| --------------- | ------------------- | --------------- | ------------------------------------------------------------ |
| `isHighlight`   | -                   | false           | 반전된 색상의 여부를 판단. true일 경우 반대 색상이 적용된다. |
| `handleClick`   | -                   | -               | 버튼을 클릭했을 때 실행할 핸들러 함수                        |
| `children`      | -                   | -               | 버튼 내부에 들어갈 요소                                      |
