# Payments Hooks

## 설치 방법

> npm install soosoo-react-payments-hooks

- ### useCardNumbers

  - **props**
    - `initialValue`: 카드 번호 초기값 설정
  - **getCardBrand**

    - 조건 탐색 후 해당 조건에 맞는 상태값(`cardBrand: string`) 반환

      ```
      visa: 4로 시작하는 16자리 숫자
      mastercard: 51~55로 시작하는 16자리 숫자
      diners: 36으로 시작하는 14자리 숫자
      amex: 34, 37로 시작하는 15자리 숫자
      unionpay: 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
      ```

  - **getCardFormat**

    - 입력된 카드 번호를 각 카드사 규칙에 맞게 포맷하여 표시

      ```
      visa: [4, 4, 4, 4]
      mastercard: [4, 4, 4, 4]
      diners: [4, 6, 4]
      amex: [4, 6, 5]
      unionpay: [4, 4, 4, 4]
      ```

  - **return**

    - `cardNumbers`: 4개의 카드 번호 입력 배열
    - `cardBrand`: 카드 브랜드(visa, mastercard, diners, amex, unionpay) 상태값
    - `isCardNumberValid`: 카드 번호 입력 유효성 상태값

  - ### 예시 화면

    <img width="452" alt="스크린샷 2024-05-12 오후 5 25 46" src="https://github.com/woowacourse/react-modules/assets/80167893/18eed271-09b0-44ae-8adc-850e0feb4bdc">

    - 특징
      - 카드 번호 입력 시, 입력값이 각 카드사의 조건에 부합하는 경우 해당 카드 브랜드가 표시된다.
      - 그러나 입력값의 길이가 해당 카드사의 요구 사항에 맞지 않으면 에러 메시지가 함께 표시된다.

  - ### 사용 방법

  ```js
  import { useCardNumbers } from "soosoo-react-payments-hooks";

  const { cardNumbers, cardBrand, isCardNumbersValid } = useCardNumbers();

  return (
    <>
      <h1>쑤쑤의 눈물겨운 페이먼츠 훅~</h1>
      <input
        autoFocus
        value={cardNumbers.value}
        onBlur={cardNumbers.onBlur}
        onChange={cardNumbers.onChange}
      />
      <label>{cardNumbers.error.message}</label>
      <h2>{cardBrand}</h2>
    </>
  );
  ```

- ### useCardCompany

  - **props**

    - `initialValue`: 카드사 상태 초기값 설정

  - **return**
    - `cardCompany`: 카드사 상태값
    - `isCardCompanyValid`: 카드사 입력 유효성 상태값

- ### useCardCVC

  - **props**

    - `initialValue`: CVC번호 상태 초기값 설정

  - **return**
    - `cardCVC` : CVC번호 상태값
    - `isCardCVCValid`: CVC번호 입력 유효성 상태값

- ### useCardExpirationDate

  - **props**

    - `initialValue`: 월, 년도 상태 배열 초기값 설정

  - **reuturn**
    - `month`: 월 상태값
    - `year`: 년도 상태값
    - `isCardExpirationDateValid`: 월, 년도 입력 유효성 상태값

- ### useCardOwner

  - **props**

    - `initialValue`: 카드 소유자 상태 초기값 설정

  - **return**
    - `cardOwner`: 카드 소유자 상태값
    - `isCardOwnerValid`: 카드 소유자 입력 유효성 상태값

- ### useCardPassword

  - **props**

    - `initialValue`: 비밀번호 상태 초기값 설정

  - **return**
    - `cardPassword`: 비밀번호 상태값
    - `isCardPasswordValid`: 비밀번호 입력 유효성 상태값

- ### useInput

  - **props**
    - `initialValue`: 초기값 설정
    - `inputValidations`: 입력 값에 대한 유효성 검증
    - `preventInputValidations`: 입력 값에 대한 유효성 검증 실패 시 입력 제한
  - **return**
    - `value` : 입력 상태 값
    - `onChange`: onChange구현 함수
    - `onBlur`: onBlur 구현 함수
    - `error`: 에러 상태 값
      - `state`: 에러라면 true, 에러가 아니라면 false
      - `message`: 에러 메시지
    - `setError`: 에러 상태 setState
    - `ref`: 현재 입력 값에 대한 ref

- ### useValidation
  - 유효성 검증 후 에러 상태 관리
  - **return**
    - `error`: 에러 상태 값
      - `state`: 에러라면 true, 에러가 아니라면 false
      - `message`: 에러 메시지
    - `setError`: 에러 상태 setState
    - `validate`: 유효성 검사 함수

## 유효성 검사

### 카드 번호 유효성 검증

- 숫자가 아니라면 에러 발생 및 입력 제한
- 카드 브랜드 구분 로직
  - Visa: 4로 시작하는 16자리 숫자
    - 예시: 4444 3333 2222 1111
  - MasterCard: 51~55로 시작하는 16자리 숫자
    - 예시: 5555 4444 3333 2222
  - Diners: 36으로 시작하는 14자리 숫자
    - 예시: 3612 345678 9012
  - AMEX: 34, 37로 시작하는 15자리 숫자
    - 예시 (34로 시작): 3412 345678 90123
    - 예시 (37로 시작): 3712 345678 90123
  - 유니온페이: 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
    - 예시 (622126~622925로 시작): 6221 2612 3456 7890
    - 예시 (624~626로 시작): 6240 1234 5678 9012
    - 예시 (6282~6288로 시작): 6282 1234 5678 9012

### 카드사 선택 유효성 검증

- 빈 문자열일 때 에러 발생

### 카드 유효기간 유효성 검증

- 유효기간이 지났으면 에러 발생
- 월
  - 2자리가 아니라면 에러 발생
  - 숫자가 아니라면 에러 발생 및 입력 제한
  - 1~12 사이의 숫자가 아니라면 에러 발생
- 년
  - 2자리가 아니라면 에러 발생
  - 숫자가 아니라면 에러 발생 및 입력 제한
  - 올해 이전 년도라면 에러 발생

### 소유자 이름 유효성 검증

- 영어가 아니라면 에러 발생 및 입력 제한

### CVC 유효성 검증

- 3자리가 아니라면 에러 발생
- 숫자가 아니라면 에러 발생 및 입력 제한

### 비밀번호 유효성 검증

- 2자리가 아니라면 에러 발생
- 숫자가 아니라면 에러 발생 및 입력 제한

### 다양한 카드사 대응

- 다양한 카드 브랜드 지원 확장
  - Visa, Mastercard 외에 AMEX, Diners, UnionPay 등의 주요 카드사 식별 및 유효성 검사 로직 추가
  - 카드 브랜드별 식별 번호 및 카드 번호 유효성 검사 구현
- 카드 번호 포맷팅 기능 추가

  - 사용자 입력 시 자동으로 카드사별 규칙에 맞게 카드 번호를 구분하여 표시
  - 카드사별 포맷팅 규칙 적용
