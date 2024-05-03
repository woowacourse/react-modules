# useCardNumbers hook

## How to use

```jsx
import { useCardNumbers } from "easy-payments-hooks";

function App() {
  const {
    firstState: [first, setFirst],
    secondState: [second, setSecond],
    thirdState: [third, setThird],
    fourthState: [fourth, setFourth],
    error: { isError, errorMessage },
  } = useCardNumbers();

  //...
}
```

## Return

1. firstState: 첫 번째 카드 번호에 대한 state
2. secondState: 두 번째 카드 번호에 대한 state
3. thirdState: 세 번째 카드 번호에 대한 state
4. fourthState: 네 번째 카드 번호에 대한 state
5. error:
   - 1. isError: 에러 여부를 판단하는 boolean 가,
   - 2. errorMessage,
