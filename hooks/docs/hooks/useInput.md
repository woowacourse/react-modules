# useInput hook

## How to use

```jsx
import { useInput } from "easy-payments-hooks";

function App() {
  const { valueState, errorState } = useInput();

  //...
}
```

## Return

1. valueState: input의 value에 대한 state
2. errorState:
   - 1. isError: 에러의 여부
   - 2. errorMessage
   - 3. setError: 에러를 관리하는 함수
