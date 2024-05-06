# react-modules

# 📦 components

### Modal

- `position`: `bottom | center` 입력 값에 따라 모달 중앙, 하단 배치
- `title`: 모달 제목 입력
- `onClose`: 모달 닫기 함수 전달
- `isCloseButton`: 모달 닫기 버튼 유무 입력
- `children`: 하위 요소 전달

---

# 📦 hooks

## useCardNumbers

### props

- `initialValue`: 카드 번호 배열 상태 초기값 설정
  - `{value: '', length: 4}`형태의 배열
    - value: 초기 값
    - length: input 입력 글자

### return

- `cardNumbers`: `id`, `value`, `length`, `isError` 속성이 담긴 객체 배열
- `cardBrand`: 카드 브랜드(visa, mastercard) 상태값
- `isValid`: 카드 번호 입력 유효성 상태값
- `onChange`: 각 입력 값에 대한 `onChange` 이벤트 핸들러. `event`와 `index`를 인자로 받습니다.
- `onBlur`: 각 입력 값에 대한 `onBlur` 이벤트 핸들러. `event`와 `index`를 인자로 받습니다.

## useCardCardCompany

### props

- `initialValue`: 카드사 상태 초기값 설정

### return

- `value`: 카드사 상태값
- `isValid`: 카드사 입력 유효성 상태값
- `error`: 에러 상태값
- `onChange`: `onChange` 이벤트 핸들러
- `onBlur`: `onBlur` 이벤트 핸들러

## useCardExpirationDate

### props

- `initialValue`: 월, 년도 상태 객체 초기값 설정
  - month: 월 입력
  - year: 년도 입력

### return

- `month`: 월 입력 상태
  - value
  - error
  - isValid
  - onChange
  - onBlur
- `year`: 년도 입력 상태
  - value
  - error
  - isValid
  - onChange
  - onBlur
- `expirationDateError`: 월, 년도 입력 유효성 상태값(유효기간 만료 여부)
- `isExpirationDateValid`: 각 입력값 유효성 상태값
- `expirationDateErrorMessage`: 에러 메시지

## useCardOwner

### props

- `initialValue`: 카드 소유자 상태 초기값 설정

### return

- `value`: 카드 소유자 상태값
- `isValid`: 카드 소유자 입력 유효성 상태값
- `error`: 에러 상태값
- `onChange`: `onChange` 이벤트 핸들러
- `onBlur`: `onBlur` 이벤트 핸들러

## useCardCVC

### props

- `initialValue`: CVC번호 상태 초기값 설정

### return

- `value` : CVC번호 상태값
- `isValid`: CVC번호 입력 유효성 상태값
- `error`: 에러 상태값
- `onChange`: onChange 이벤트 핸들러
- `onBlur`: onBlur 이벤트 핸들러

## usePassword

### props

- `initialValue`: 비밀번호 상태 초기값 설정

### return

- `value`: 비밀번호 상태값
- `isValid`: 비밀번호 입력 유효성 상태값
- `error`: 에러 상태값
- `onChange`: onChange 이벤트 핸들러
- `onBlur`: onBlur 이벤트 핸들러
