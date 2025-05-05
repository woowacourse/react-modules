# react-modules

## 🚀 페이먼츠 모듈 1단계 - Module

이번 미션은 재사용 가능한 모듈화된 컴포넌트와 커스텀 훅을 개발하고, npm에 배포하는 과정을 경험하는 것을 목표로 합니다. 모듈화된 컴포넌트와 커스텀 훅은 다양한 프로젝트에서 유연하게 사용할 수 있어야 합니다. 또한 Storybook과 React Testing Library(RTL)을 활용하여 컴포넌트의 문서화와 테스트 시나리오 작성 방법을 익힐 수 있습니다.

## 🔑 키워드

Module

## 📍 학습 목표

- 재사용 가능한 모듈화된 컴포넌트(모달, 커스텀 훅)를 개발하고 npm에 배포할 수 있다.
- Storybook과 RTL을 활용한 컴포넌트 문서화 및 테스트 시나리오를 작성할 수 있다.

## 📝 기능명세서

### modal (컴파운드 컴포넌트 방식)

- [x] 모달 컴포넌트 모듈 제작

  - [x] Modal component 제작 (껍데기)
    - [x] show, onhide props
    - [x] background 스타일
    - [x] Modal Container position 동적 할당
    - [x] Modal Container 스타일
    - [x] Modal Container gap 속성추가
  - [x] Modal.Header 제작
    - [x] close Button 유무 (header에 종속)
    - [x] close 버튼과 children 스타일
  - [x] Modal.Body 제작
  - [x] Modal.Footer 제작
  - [x] Modal.Title 제작
    - [x] font, color 스타일 (color 동적)
  - [x] Modal Component 타입스크립트 적용
  - [x] Modal Component 스토리북 제작
  - [x] Modal Component 배포

- [x] 훅 모듈 제작

- [x] useCardNumberValidation

  - [x] 테스트 코드 작성
  - [x] errors, errorMessage 상태 생성
  - [x] 유효성 검증 + 상태 변경 함수
  - [x] 모든 에러가 없는지 변수

- [x] useExpirationDateValidation

  - [x] 테스트 코드 작성
  - [x] errors, errorMessage 상태 생성
  - [x] 유효성 검증 + 상태 변경 함수
  - [x] 모든 에러가 없는지 변수

- [x] useCvcNumberValidation

  - [x] 테스트 코드 작성
  - [x] errors, errorMessage 상태 생성
  - [x] 유효성 검증 + 상태 변경 함수
  - [x] 모든 에러가 없는지 변수

- [x] usePasswordValidation

  - [x] 테스트 코드 작성
  - [x] errors, errorMessage 상태 생성
  - [x] 유효성 검증 + 상태 변경 함수
  - [x] 모든 에러가 없는지 변수

- [x] 유효성 검증 함수 분리

  - [x] 숫자 검증
  - [x] 월 검증
  - [x] 년 검증

- [x] 모든 에러가 없는지 체크하는 함수

- [x] 훅 및 함수 매개변수 및 return 타입 추가

## 피드백 바탕 수정사항

- [x] (모달) svg 아이콘 컴포넌트 분리
- [x] (모달) 각각의 합성 컴포넌트 className 과 style을 부여
- [x] (모달) BackDrop 및 중앙 정렬에 사용되는 레이아웃 컴포넌트 커스터마이징
- [x] (모달) 타입, 스타일, 훅, context 파일 별도 분리

- [ ] (훅) 에러 로직 훅 단일화 처리 (base error 훅)
- [ ] 상태값 (base state 훅 제작)
- [ ] (훅) 실제 입력 상태값 함께 관리
  - [x] `const { cardNumber, onChange, isValid, errorMessage } = useCardNumber();`
  - [x] useCardNumber 훅
    - [x] cardNumber -> 객체로 상태 관리
  - [x] useExpirationDate 훅
    - [x] ExpirationDate -> 객체로 상태 관리
  - [x] useCvcNumber 훅
  - [x] usePassword 훅
- [x] useErrorCheckComplete 공통 훅으로 변경
- [x] isComplete 변수 return (모든 필드가 최대 입력을 쳤는지 확인)
  - [x] noError -> isErrorComplete으로 이름 변경
  - [ ] isComplete & isErrorComplete 합쳐서 -> isValid 변수 return
- [ ] errors와 errorMessage도 일반 변수로 관리 (상태 x -> 실제 입력값에 의존)
- [ ] isNumber 유틸 함수 이름 변경 (validateNumericString)
- [ ] 월 검증 및 년 검증 함수 분리 (validateMonth, validateYear)
- [ ] expirationDate 훅 -> 인덱스 기반 접근 대신 month와 year 상태를 각각 관리
- [ ] 유효성 훅 길이 체크
- [x] useKeyEscClose 훅 의존성 배열 onHide 함수 채우기
- [x] Context API 단일 값 수정 / null 타입 제거
- [x] (모달) React Portal 적용
