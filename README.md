# react-modules

## 📦 components

### Modal

- `position`: `bottom | center` 입력 값에 따라 모달 중앙, 하단 배치
- `title`: 모달 제목 입력
- `onClose`: 모달 닫기 함수 전달
- `isCloseButton`: 모달 닫기 버튼 유무 입력
- `children`: 하위 요소 전달

## 📦 hooks

### useInput

**props**

- `initialValue`: 초기값 설정
- `inputValidations`: 입력 값에 대한 유효성 검증
- `preventInputValidations`: 입력 값에 대한 유효성 검증 실패 시 입력 제한
  **return**
- `value` : 입력 상태 값
- `onChange`: onChange구현 함수
- `onBlur`: onBlur 구현 함수
- `error`: 에러 상태 값
  - `state`: 에러라면 true, 에러가 아니라면 false
  - `message`: 에러 메시지
- `setError`: 에러 상태 setState
- `ref`: 현재 입력 값에 대한 ref

### useCardType

조건 탐색 후 해당 조건에 맞는 상태값(`cardBrand: string`) 반환

```
visa: 4로 시작하는 16자리 숫자
mastercard: 51~55로 시작하는 16자리 숫자
```

### useValid

유효성 검증 후 유효성 상태값(`isValid: boolean`) 반환

### useCardNumbers

**props**

- `initialValue`: 카드 번호 배열 상태 초기값 설정
  **return**
- `cardNumbers`: 4개의 카드 번호 입력 배열
- `cardBrand`: 카드 브랜드(visa, mastercard) 상태값
- `isCardNumberValid`: 카드 번호 입력 유효성 상태값

### useCardCardCompany

**props**

- `initialValue`: 카드사 상태 초기값 설정
  **return**
- `cardCompany`: 카드사 상태값
- `isCardCompanyValid`: 카드사 입력 유효성 상태값

### useCardExpirationDate

**props**

- `initialValue`: 월, 년도 상태 배열 초기값 설정
  **reuturn**
- `month`: 월 상태값
- `year`: 년도 상태값
- `isCardExpirationDateValid`: 월, 년도 입력 유효성 상태값

### useCardOwner

**props**

- `initialValue`: 카드 소유자 상태 초기값 설정
  **return**
- `cardOwner`: 카드 소유자 상태값
- `isCardOwnerValid`: 카드 소유자 입력 유효성 상태값

### useCardCVC

**props**

- `initialValue`: CVC번호 상태 초기값 설정
  **return**
- `cardCVC` : CVC번호 상태값
- `isCardCVCValid`: CVC번호 입력 유효성 상태값

### usePassword

**props**

- `initialValue`: 비밀번호 상태 초기값 설정
  **return**
- `cardPassword`: 비밀번호 상태값
- `isCardPasswordValid`: 비밀번호 입력 유효성 상태값
