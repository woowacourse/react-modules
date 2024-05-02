# useExpiryPeriod hook

## How to use

```js
//TODO: 문서화 경로 설정
import { useExpiryPeriod } from "";

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

## Return

1. yearState: 월에 대한 state
2. monthState: 달에 대한 state
3. isError: 에러 여부를 판단하는 boolean 값
4. errorState:
   4-1. errorMessage: 에러메세지
   4-2. setYearError: 연도의 에러를 관리하는 함수
   4-3. setMonthError: 월의 에러를 관리하는 함수
