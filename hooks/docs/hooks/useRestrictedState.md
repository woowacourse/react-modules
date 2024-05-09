# useRestrictedState hook

## How to use

```js
import { useRestrictedState } from "easy-payments-hooks";

function App() {
  const { valueState, errorState } = useRestrictedState();

  //...
}
```

```js
const { valueState, errorState } = useRestrictedState({ type: "english" });
const { valueState, errorState } = useRestrictedState({ type: "number" });
const { valueState, errorState } = useRestrictedState({ type: "english", maxLength: 10 });
```

## Parameters

1. type [optional] : "english" | "number", 타입이 없을 경우 모두 포함.
   1-1. english일 경우 영어를 제외한 나머지 입력값은 받을 수 없다.
   1-2. number일 경우 숫자를 제외한 나머지 입력값은 받을 수 없다.
2. maxLength [optional]: 최대 문자열 길이를 나타내는 인자

## Return

1. valueState: input의 value에 대한 state
2. errorState:
   2-1. isError: 에러의 여부
   2-2. errorMessage
   2-3. setError: 에러를 관리하는 함수
