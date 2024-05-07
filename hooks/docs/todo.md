# Hooks Module

## TODO

### useInput

- [x] value, setValue,
- [x] error, setError

  1. type : number -> 예상된 입력값 이외의 타입 문자열을 입력하는 경우 에러 발생
  2. validator를 pram으로 받고 에러를 발생시킨다.

- 추가적으로 해볼 것.
  1. onChange함수 -> debounce적용.

### useCardCompany

- [x] value, setValue,
- [x] error, setError
  1. 카드사가 등록되지 않은 value가 감지되면 에러를 만든다.

### useCardNumbers

- [x] value, setValue
      {
      first : string,
      //...
      }
- [x] error, setError
      {
      isError,
      errorMessag
      }
  1. 비자카드인지 아닌지 에러
  2. 각각의 카드 넘버가 4자리인지 아닌지 에러 (16자인지 확인)

### useRestrictedState

1. usePassword
2. useCVC
3. useOwnerName

- [x] value, setValue
- [x] error, setError

세 개의 공통점 -> 하나의 형태만 입력받을 수 있음. 특정 문자열 이상 입력할 수 없음.
-> "english" | "number"
-> maxLength

### useExpiryPeriod

- [x] value, setValue
- [x] error, setError
  - 과거일 시 에러

### docs

- [x] useCardCompany.md
- [x] useCardNumbers.md
- [x] useExpiryPeriod.md
- [x] useInput.md
- [x] useRestrictedState.md

### Test

- [x] act -> React.act로 변경
- [x] fireEvent이벤트 적용

### Refactor

- [x] state, error 관리 훅. useRestrictedState으로 변경
- [ ] useRestrictedState에 reset함수 추가
- [x] 상수 분리
- [x] 마크다운 개행 정리
- [x] useInput register만들어보기
  - [x] required, type
  - [x] max, maxLength, min, minLength

## STEP2 TODO

1. [ ] 카드 브랜드가 달라지에 따라서, 총 카드번호의 갯수, input의 갯수가 달라진다.

   - 카드 브랜드 종류 ["Visa", "Master", "AMEX", "Diners", "UnionPay"]
     1. Visa는 4로 시작한다. input은 4개. 16자리
     2. Master는 51~54로 시작한다. input은 4개. 16자리
     3. AMEX는 34, 27로 시작한다. input은 3개. 15자리
     4. Diners는 36으로 시작한다. input은 3개. 14자리
     5. UnionPay는 622126~622925, 624~626, 6282~6288로 시작한다. 16자리

2. [ ] 카드 브랜드에 따라서 cardNumber state의 갯수가 정해진다.
   - useCardNumbers는 카드 브랜드를 반환한다.
3. [ ] useInput에서 maxLength가 아닌 경우일 때 에러를 뱉은 경우 추가
