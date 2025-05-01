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
