# 페이먼츠 커스텀 훅

- [x] 페이먼츠 커스텀 훅 모듈을 npm으로 배포하고 사용할 수 있어야 한다.
- [x] 페이먼츠 카드의 다양한 정보에 대한 유효성 검사 로직을 여러 개의 작은 커스텀 훅으로 분리하고, 필요에 따라 조합하여 사용할 수 있도록 한다.
- [x] 커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게 제공할 수 있어야 한다.

## common

- ### [x] useInput

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

- ### [x] useValidation
  - 유효성 검증 후 에러 상태 관리
  - **return**
    - `error`: 에러 상태 값
      - `state`: 에러라면 true, 에러가 아니라면 false
      - `message`: 에러 메시지
    - `setError`: 에러 상태 setState
    - `validate`: 유효성 검사 함수

## 비지니스 로직

- ### [x] useCardNumbers

  - **props**
    - `initialValue`: 카드 번호 배열 상태 초기값 설정
  - **getCardType**

    - 조건 탐색 후 해당 조건에 맞는 상태값(`cardBrand: string`) 반환

      ```
      visa: 4로 시작하는 16자리 숫자
      mastercard: 51~55로 시작하는 16자리 숫자
      ```

  - **return**
    - `cardNumbers`: 4개의 카드 번호 입력 배열
    - `cardBrand`: 카드 브랜드(visa, mastercard) 상태값
    - `isCardNumberValid`: 카드 번호 입력 유효성 상태값

- ### [x] useCardCompany

  - **props**

    - `initialValue`: 카드사 상태 초기값 설정

  - **return**
    - `cardCompany`: 카드사 상태값
    - `isCardCompanyValid`: 카드사 입력 유효성 상태값

- ### [x] useCardCVC

  - **props**

    - `initialValue`: CVC번호 상태 초기값 설정

  - **return**
    - `cardCVC` : CVC번호 상태값
    - `isCardCVCValid`: CVC번호 입력 유효성 상태값

- ### [x] useCardExpirationDate

  - **props**

    - `initialValue`: 월, 년도 상태 배열 초기값 설정

  - **reuturn**
    - `month`: 월 상태값
    - `year`: 년도 상태값
    - `isCardExpirationDateValid`: 월, 년도 입력 유효성 상태값

- ### [x] useCardOwner

  - **props**

    - `initialValue`: 카드 소유자 상태 초기값 설정

  - **return**
    - `cardOwner`: 카드 소유자 상태값
    - `isCardOwnerValid`: 카드 소유자 입력 유효성 상태값

- ### [x] useCardPassword

  - **props**

    - `initialValue`: 비밀번호 상태 초기값 설정

  - **return**
    - `cardPassword`: 비밀번호 상태값
    - `isCardPasswordValid`: 비밀번호 입력 유효성 상태값

## 유효성 검사

### 카드 번호 유효성 검증

- 4자리가 아니라면 에러 발생
- 숫자가 아니라면 에러 발생 및 입력 제한
- 카드 브랜드 구분
  - Visa: 4로 시작하는 16자리 숫자
  - MasterCard: 51~55로 시작하는 16자리 숫자

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
