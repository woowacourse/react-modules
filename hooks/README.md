# Hooks Module

## 기능

### 페이먼츠 커스텀 훅

- 페이먼츠 커스텀 훅 모듈을 npm으로 배포하고 사용할 수 있어야 한다.

  - [] 커스텀 훅 생성
  - [] 커스텀 훅 스토리북 테스트
  - [] 커스텀 훅 빌드 및 배포
  - [] 커스텀 훅 설치 및 사용

- 페이먼츠 카드의 다양한 정보에 대한 유효성 검사 로직을 여러 개의 작은 커스텀 훅으로 분리하고, 필요에 따라 조합하여 사용할 수 있도록 한다.

  - [x] useCardNumber
    - [x] cardNumber는 숫자여야 한다. (errorMessage: "카드 번호는 숫자로 입력해 주세요.")
    - [x] cardNumber는 각 칸마다 4자리여야 한다. (errorMessage: "카드 번호는 4자리로 입력해 주세요.")
  - [x] useExpiryDate
    - [x] month
      - [x] month는 숫자여야 한다. (errorMessage: "월은 숫자로 입력해 주세요.")
      - [x] month는 두 자리여야 한다. (errorMessage: "월은 2자리로 입력해 주세요.")
      - [x] month는 1~12 사이의 숫자여야 한다. (errorMessage: "유효하지 않은 월입니다.")
    - [x] year
      - [x] year는 숫자여야 한다. (errorMessage: "연도는 숫자로 입력해 주세요.")
      - [x] year는 두 자리여야 한다. (errorMessage: "연도는 2자리로 입력해 주세요.")
      - [x] year는 25 이상의 숫자여야 한다. (errorMessage: "유효하지 않은 연도입니다.")
  - [x] useCVC
    - [x] cvc는 숫자여야 한다. (errorMessage: "CVC는 숫자로 입력해 주세요.")
    - [x] cvc는 세 자리여야 한다. (errorMessage: "CVC는 3자리로 입력해 주세요.")
  - [x] usePassword
    - [x] password는 숫자여야 한다. (errorMessage: "카드 비밀번호는 숫자로 입력해 주세요.")
    - [x] password는 두 자리여야 한다. (errorMessage: "카드 비밀번호는 2자리로 입력해 주세요.")
  - [] useCardBrand

- 커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게 제공할 수 있어야 한다. 예를 들어 useCardNumber hook을 만든다면 카드 번호 유효성 검사 결과를 불리언 값으로 반환해야 한다. 만약 유효성 검사에 실패한 경우, 에러 정보를 문자열 형태로 반환할 수 있어야 한다.
  - [x] useCardNumber 훅에서 유효성 검사 결과로 불리언 값과 에러 메시지를 반환할 수 있다.
  - [x] useExpiryDate 훅에서 유효성 검사 결과를 불리언 값과 에러 메시지를 반환할 수 있다.
  - [x] useCVC 훅에서 유효성 검사 결과를 불리언 값과 에러 메시지를 반환할 수 있다.
  - [x] usePassword 훅에서 유효성 검사 결과를 불리언 값과 에러 메시지를 반환할 수 있다.
  - [x] useCardBrand 훅에서 유효성 검사 결과를 불리언 값과 에러 메시지를 반환할 수 있다.

### 페이먼츠 커스텀 훅

- useCardNumber
- useExpiryDate
- useCVC
- usePassword
- useCardBrand

### storybook

## 커밋메시지

- feat : 새로운 기능을 추가한 경우
- fix : 버그 수정
- docs : 문서를 수정한 경우
- style : 코드 스타일, 포멧, 주석을 변경
- refactor : 코드 리팩토링
- test : 테스트 관련 코드를 수정한 경우
- chore : 코드 수정이 아닌, 단순 폴더명 파일명 등을 수정한 경우
