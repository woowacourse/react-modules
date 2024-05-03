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
- [ ] 상수 분리
- [ ] 마크다운 개행 정리
- [ ] useInput register만들어보기
