# 🎯 기능 구현 목록

## step 1 - 열고 닫을 수 있는 modal 컴포넌트 구현

- [x] 열고 닫기 기능이 있는 modal 컴포넌트를 구현 한다.

## step 2 - modal 컴포넌트 내 position 추가

- [x] position(center, bottom)에 따라 모달 위치를 변경한다.

## step 3 - modal 컴포넌트를 재사용 가능한 형태로 분리

- [x] 기존 컴포넌트에서 modal header, modal content, modal footer로 분리 한다.

- edge case
  - [x] modal content와 modal footer가 view port를 초과하는 case 추가

## step 4 - docs 작성 및 npm 배포

- [v] modal 사용 가이드를 위한 docs를 작성한다.
- [v] 각자 npm 배포를 진행한다.

## step 5 - 페이먼츠 커스텀 훅 구현

- [v] 카드 정보에 대한 커스텀 훅을 구현한다.
  - 커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게 제공할 수 있어야 한다.
    - 예를 들어 useCardNumber hook을 만든다면 카드 번호 유효성 검사 결과를 불리언 값으로 반환해야 한다. 만약 유효성 검사에 실패한 경우, 에러 정보를 문자열 형태로 반환할 수 있어야 한다.
- [v] 구현할 커스텀 훅 종류는 아래와 같다.
  - 카드 번호
  - 유효기간
  - cvc 번호
  - 카드 비밀번호
  - 소유자 이름

## step 6 - 커스텀 훅 npm 배포

- [v] 커스텀 훅을 npm에 배포 한다.

## step 7 - 카드사 식별 기능 구현

- [v] 다양한 카드 브랜드(amex, diners, union pay, visa, master card)에 대해 사용자 입력 시 자동으로 카드사 별 규칙에 맞게 카드 번호를 구분할 수 있어야 한다.
  - diners : 카드의 앞 번호가 36으로 시작하는 14자리 숫자
  - amex : 카드의 앞 번호가 34, 37로 시작하는 15자리 숫자
  - union pay : 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
    - 카드의 앞 번호가 622126 ~ 622925로 시작
    - 카드의 앞 번호가 624 ~ 626로 시작
    - 카드의 앞 번호가 6282 ~ 6288로 시작
  - visa : 앞자리 번호가 `4`로 시작하는 16자리 숫자
  - master card : 앞자리 번호가 `50` ~ `55`로 시작하는 16자리 숫자
- [v] 각 유효성 검사(카드사 별 규칙)에 대해 유효성 검사 테스트를 구현한다.
  - 테스트는 React Testing Library로 구현해야한다.

## step 8 - 카드 번호 포맷팅 기능 구현

- [v] 각 카드사 별 규칙에 맞게 카드 번호를 포맷팅 할 수 있어야 한다.
  - diners : 3612 345678 9012
  - amex : 3412 345678 90123
  - other(union pay, visa, master card) : 6240 1234 5678 9012
- [v] 각 카드 포맷팅 규칙에 대한 테스트를 구현한다.
  - 테스트는 React Testing Library로 구현해야한다.

## step 9 - 모달 컴포넌트 크기 옵션 구현

- [v] `small`, `medium`, `large` 등의 크기 옵션을 prop으로 전달받아 모달 크기를 조절할 수 있어야 한다.
- [] 각 크기 별 스토리를 스토리북에 추가한다.

# step 10 - AlertModal, ConfirmModal, PromptModal 구현

- [v] 주어진 Modal을 가지고 해당 Modal 들을 구현할 수 있어야 한다.
  - 각 디바이스(mobile, tablet, desktop)에 대응할 수 있어야 한다.
- [v] 각 Modal 들을 storybook에 추가할 수 있어야 한다.
