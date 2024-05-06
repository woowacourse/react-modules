# react-modules

## 📦 components

- ### Modal

  - `position`: `bottom | center` 입력 값에 따라 모달 중앙, 하단 배치
  - `title`: 모달 제목 설정
  - `children`: 하위 요소 전달
  - `isOpen`: `true | false`에 따라 모달 렌더링
  - `onClose`: 모달 닫기 함수 전달
  - `closeButton` : 모달 닫기 버튼 설정
  - `confirmButton` : 모달 확인 버튼 설정
  - `cancelButton` : 모달 취소 버튼 설정

- ### ModalHeader

  - **props**
    - `title` : 모달 제목 표시
      - `position` : `left | center` 입력 값에 따라 모달 제목 좌측, 중앙 배치
      - `content` : 모달 제목 내용
    - `closeButton` : 모달에 닫기 버튼을 표시하고, 닫기 버튼을 클릭했을 때 실행될 함수를 설정
      - `onClose` : 닫기 버튼을 클릭하면 onClose 함수 실행

- ### ModalContent

  - **props**
    - `children` : 모달 내용을 구성하는 하위 요소

- ### ModalFooter
  - **props**
    - `confirmButton` : 모달에 확인 버튼을 표시하고, 확인 버튼을 클릭했을 때 실행될 함수를 설정
      - `content` : 확인 버튼의 텍스트 내용
      - `onConfirm` : 사용자가 확인 버튼을 클릭하면 onConfirm 함수 실행
    - `cancelButton` : 모달에 취소 버튼을 표시하고, 취소 버튼을 클릭했을 때 실행될 함수를 설정
      - `content` : 취소 버튼의 텍스트 내용
      - `onCancel` : 사용자가 취소 버튼을 클릭하면 onCancel 함수 실행

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

### useValidation

- 유효성 검증 후 에러 상태 관리

**return**

- `error`: 에러 상태 값
  - `state`: 에러라면 true, 에러가 아니라면 false
  - `message`: 에러 메시지
- `setError`: 에러 상태 setState
- `validate`: 유효성 검사 함수

### useCardNumbers

**props**

- `initialValue`: 카드 번호 배열 상태 초기값 설정

**getCardType**

- 조건 탐색 후 해당 조건에 맞는 상태값(`cardBrand: string`) 반환

  ```
    visa: 4로 시작하는 16자리 숫자
    mastercard: 51~55로 시작하는 16자리 숫자
  ```

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
