# react-modules

## 📍 모달 컴포넌트

### 모달 컴포넌트 기능 구현

- 모달 컴포넌트를 npm으로 배포하고 사용할 수 있어야 한다.

  - [x] 컴포넌트 생성
    - Modal
    - CardBrand
    - Button
    - AgreementCheckList
  - [x] 컴포넌트 스토리북 테스트
  - [x] 컴포넌트 빌드 및 배포
  - [x] 컴포넌트 설치 및 사용

- 피그마 시안 예시처럼 모바일에서 사용 가능한 모달 컴포넌트를 만들어야 한다.

  - [x] 모바일에서 사용 가능한 레이아웃으로 만든다.

- 모달 위치 및 내용 구성 옵션을 prop으로 전달받아 유연하게 모달을 구성할 수 있어야 한다.

  - [x] isModalOpen을 전달받을 수 있다. : 모달 열기
  - [x] position을 전달받을 수 있다. : 모달 위치
  - [x] title을 전달받을 수 있다. : 모달 제목
  - [x] children을 전달받을 수 있다. : 모달 내용
  - [x] onClose 전달받을 수 있다. : 모달 닫기

- 사용자 정의 이벤트 핸들러
  - [x] modalOpen으로 모달 열기
  - [x] modalClose으로 모달 닫기

### 모달 컴포넌트 storybook

- [x] 카드사 선택 컴포넌트
  - [x] 중앙에 위치하는지
- [x] 동의 컴포넌트
  - [x] 하단에 위치하는지

## 📍 페이먼츠 커스텀 훅

### 페이먼츠 커스텀 훅 기능 구현

- 페이먼츠 커스텀 훅 모듈을 npm으로 배포하고 사용할 수 있어야 한다.

  - [x] 커스텀 훅 생성
    - useCardNumber
    - useExpiryDate
    - useCVC
    - usePassword
  - [x] 커스텀 훅 RTL 테스트
  - [x] 커스텀 훅 빌드 및 배포
  - [x] 커스텀 훅 설치 및 사용

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

- 커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게 제공할 수 있어야 한다. 예를 들어 useCardNumber hook을 만든다면 카드 번호 유효성 검사 결과를 불리언 값으로 반환해야 한다. 만약 유효성 검사에 실패한 경우, 에러 정보를 문자열 형태로 반환할 수 있어야 한다.
  - [x] useCardNumber 훅에서 유효성 검사 결과로 불리언 값과 에러 메시지를 반환할 수 있다.
  - [x] useExpiryDate 훅에서 유효성 검사 결과를 불리언 값과 에러 메시지를 반환할 수 있다.
  - [x] useCVC 훅에서 유효성 검사 결과를 불리언 값과 에러 메시지를 반환할 수 있다.
  - [x] usePassword 훅에서 유효성 검사 결과를 불리언 값과 에러 메시지를 반환할 수 있다.

### 페이먼츠 커스텀 훅 RTL 테스트

- [x] useCardNumber (성공케이스 & 실패케이스)
- [x] useExpiryDate (성공케이스 & 실패케이스)
- [x] useCVC (성공케이스 & 실패케이스)
- [x] usePassword (성공케이스 & 실패케이스)

## 📝 커밋메시지

- feat : 새로운 기능을 추가한 경우
- fix : 버그 수정
- docs : 문서를 수정한 경우
- style : 코드 스타일, 포멧, 주석을 변경
- refactor : 코드 리팩토링
- test : 테스트 관련 코드를 수정한 경우
- chore : 코드 수정이 아닌, 단순 폴더명 파일명 등을 수정한 경우
