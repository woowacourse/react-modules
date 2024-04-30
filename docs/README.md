# 🎯 기능 구현 목록

## step 1 - 열고 닫을 수 있는 modal 컴포넌트 구현

- [x] 열고 닫기 기능이 있는 modal 컴포넌트를 구현 한다.

## step 2 - modal 컴포넌트 내 position 추가

- [x] position(center, bottom)에 따라 모달 위치를 변경한다.

## step 3 - modal 컴포넌트를 재 사용 가능한 형태로 분리

- [ ] 기존 컴포넌트에서 modal header, modal content, modal footer로 분리 한다.
- [ ] 카드사 선택 모달과 약관 동의 모달 형태를 storybook에 추가한다.

## step 4 - modal 컴포넌트 내 confirm action 추가

- [ ] modal 컴포넌트 내 confirm action을 추가한다.

## step 5 - 페이먼츠 커스텀 훅 구현

- [ ] 카드 정보에 대한 커스텀 훅을 구현한다.
  - 커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게 제공할 수 있어야 한다.
    - 예를 들어 useCardNumber hook을 만든다면 카드 번호 유효성 검사 결과를 불리언 값으로 반환해야 한다. 만약 유효성 검사에 실패한 경우, 에러 정보를 문자열 형태로 반환할 수 있어야 한다.
- [ ] 구현할 커스텀 훅 종류는 아래와 같다.
  - 카드 번호
  - 유효기간
  - cvc 번호
  - 카드 비밀번호
  - 소유자 이름
  - 카드 브랜드

## step 6 - npm 배포

- [ ] 구현한 컴포넌트 및 커스텀 훅을 npm에 배포 한다.
