# react-modules

## Modal Module

### 기능 구현 목록

- [x] 모달 컴포넌트 제작
- [x] 모바일에서 사용 가능한 모달 컴포넌트
- props
  - [x] position : 모달 위치 ( 중앙, 하단 )
  - [x] title : 모달의 제목
  - [x] close 버튼 : icon, button, none
  - [x] confirm 버튼 : text string 만 전달받음
  - [x] 사용자 정의 이벤트 핸들러를 지원
    - [x] 모달 열기, 닫기, 확인
- 배포
  - [x] 모달 컴포넌트를 npm으로 배포
  - [x] 사용법 및 예시 코드 리드미 작성

# Hooks Module

### 페이먼츠 커스텀 훅

#### 기능 구현 목록

- [x] 페이먼츠 커스텀 훅 모듈을 npm으로 배포
- [x] 사용법 및 예시 코드 리드미 작성
- [x] 페이먼츠 카드의 다양한 정보에 대한 유효성 검사 로직을 여러 개의 작은 커스텀 훅으로 분리, 필요에 따라 조합하여 사용 가능
- [x] 필수적으로 만들어야 하는 커스텀 훅은 페이먼츠 앱에서 다루었던 카드 정보
- useCardValidation
  - [x] useCardNumbers
    - [x] 숫자인지 확인
    - [x] 4자리인지 확인
  - [x] useCardType (카드 회사)
    - [x] 선택 안한 경우에 에러
    - [x] 받은 옵션에 없는 회사이면 에러
- [x] useCardHolder (영문이름)
  - [x] 영어 입력 아닐 시 에라
  - [x] 스페이스 두개시 에러
- [x] useExpiryDate
  - [x] 월, 년도가 한글자 이상, 두자리 이하인지 확인(한자리 인 경우 0 붙이기)
  - [x] 월이 범위 내인지 확인
  - [x] 년도가 00 - 99 범위인지 확인 (-2인 경우 걸러주기)
- [x] useCVC
  - [x] 3글자 인지 확인
  - [x] 모두 숫자인지 확인
- [x] usePassword
  - [x] 2글자인지 확인
  - [x] 모두 숫자인지 확인
- [x] 커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게 제공
  - [x] 예를 들어 useCardNumber hook을 만든다면 카드 번호 유효성 검사 결과를 불리언 값으로 반환해야 한다.
  - [x] 만약 유효성 검사에 실패한 경우, 에러 정보를 문자열 형태로 반환할 수 있어야 한다.

```
예시.
type ValidationResult = {
isValid: boolean;
errorMessage?: string;
};
```
