# useCardCompany hook

## How to use

```js
//TODO: 문서화 경로 설정
import { useCardCompany } from "";

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

## Parameters

1. `cardCompanyList` [default : ["BC카드","신한카드","카카오뱅크","현대카드","우리카드","롯데카드","하나카드","국민카드"]] : 카드사에 대한 정보를 배열로 받는다.

## Return

1. cardCompany: 현재 선택한 카드 회사의 정보
2. errorState: 에러에 대한 정보
   2-1. isError: 에러 여부를 판단하는 boolean 값
   2-2. errorMessage: 에러 메세지
   2-3. setError: 에러를 변경하는 함수
   2-4. resetError: 에러를 초기화 하는 함수
3. cardCompanyRef: input에 적용할 ref 값
4. clickCardCompany: button, select에 적용할 click 이벤트 핸들러
