# React-Modules-Hooks

## useInput hook

### How to use

```js
import { useInput } from "easy-payments-hooks";

function App() {
  const { valueState, errorState } = useInput();

  //...
}
```

### Return

1. valueState: input의 value에 대한 state
2. errorState:
   2-1. isError: 에러의 여부
   2-2. errorMessage
   2-3. setError: 에러를 관리하는 함수

## useExpiryPeriod hook

### How to use

```js
import { useExpiryPeriod } from "easy-payments-hooks";

function App() {
  const  {
    yearState
    monthState
    isError,
    errorState: {
      errorMessage,
      setYear: (errorMessage: string) => setError("year", errorMessage),
      setMonth: (errorMessage: string) => setError("month", errorMessage),
    },
  }  = useExpiryPeriod();

  //...
}
```

### Return

1. yearState: 월에 대한 state
2. monthState: 달에 대한 state
3. isError: 에러 여부를 판단하는 boolean 값
4. errorState:
   4-1. errorMessage: 에러메세지
   4-2. setYearError: 연도의 에러를 관리하는 함수
   4-3. setMonthError: 월의 에러를 관리하는 함수

## useCardCompany hook

### How to use

```js
import { useCardCompany } from "easy-payments-hooks";

function App() {
  const {
    cardCompany,
    errorState: { isError, errorMessage, setError, resetError },
    cardCompanyRef,
    clickCardCompany,
  } = useCardCompany();

  //...
}
```

### Parameters

1. `cardCompanyList` [default : ["BC카드","신한카드","카카오뱅크","현대카드","우리카드","롯데카드","하나카드","국민카드"]] : 카드사에 대한 정보를 배열로 받는다.

### Return

1. cardCompany: 현재 선택한 카드 회사의 정보
2. errorState: 에러에 대한 정보
   2-1. isError: 에러 여부를 판단하는 boolean 값
   2-2. errorMessage: 에러 메세지
   2-3. setError: 에러를 변경하는 함수
   2-4. resetError: 에러를 초기화 하는 함수
3. cardCompanyRef: input에 적용할 ref 값
4. clickCardCompany: button, select에 적용할 click 이벤트 핸들러

## useCardNumbers hook

### How to use

```js
import { useCardNumbers } from "easy-payments-hooks";

function App() {
  const { cardNumbers, cardBrand, handleCardNumbers, isError, errorMessage } =
    useCardNumbers();

  //...
}
```

### Return

1. cardNumbers: 카드 번호 문자열
2. cardBrand: 카드 브랜드
3. handleCardNumbers: 카드 번호를 변경하는 handler 함수
4. isError: Error 여부를 판단하는 boolean 값
5. errorMessage: 에러 메세지
