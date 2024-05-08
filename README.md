# react-modules

<details>
<summary>1단계 기능 요구사항 토글 접기/펼치기</summary>
<div markdown="1">

### Modal component

- [x] 모달 props
  - [x] 모달 위치
  - [x] 모달 타이틀
  - [x] 모달 내용
  - [x] 모달 닫는 방식
    - [x] prop 이름 : closeButtonPosition : 'top' | 'bottom'
- [x] 모달 event
  - [x] 열기
  - [x] 닫기 - deem 눌러도 닫혀야된다.
  - [ ] 확인 - optional
- [x] npm으로 배포하기
- [x] 설치 후 import해서 사용하기

### Payment custom hook

- 유효성 검사 결과와 에러 정보를 반환한다.

- [x] useCardNumber
  - [x] 숫자여야한다.
  - [x] 16자리여야한다.
- [x] useCardHolder
  - [x] 영어 대문자+공백만 입력가능하다.
  - [x] 공백 포함 15자까지만 가능하다.
- [x] useExpiryDate
  - [x] 월은 1~12만 입력 가능하다. (월도 두자리로 입력해달라는 description 추가 )
  - [x] 년도 2자리 숫자만 입력 가능하다.
  - [x] 년,월 조합을 봤을 때 오늘보다 과거이면 에러를 낸다.
- [x] useCVC
  - [x] 3자리 숫자만 입력 가능하다.
- [x] useCardType
  - [x] 선택한 값이 있는지 검증한다.
- [x] usePassword
  - [x] 2자리 숫자만 입력 가능하다.
- [x] npm으로 배포하기
- [x] 설치 후 import해서 사용하기

  ### Storybook

  - [x] 모달 위치에 대한 테스트 시나리오
  - [x] 모달 내용에 대한 테스트 시나리오
  - [x] 모달 이벤트 핸들러에 대한 테스트 시나리오

  ### RTL

  - [x] 페이먼트 유효성 검사 커스텀 훅의 동작을 검증
  - [x] 다양한 입력 값에 대한 커스텀 훅의 결과 - [x] 유효성 통과하는 경우 - [x] 유효성 통과하지 않는 경우
  </div>
  </details>

<br/>

<details>
<summary>2단계 기능 요구사항 토글 접기/펼치기</summary>
<div markdown="2">

### Modal component

- [ ] 다양한 모달 종류 대응
  - [ ] 확인(Alert) 모달 구현
  - [ ] 확인/취소(Confirm) 모달 구현
  - [ ] 입력(Prompt) 모달 구현
- [ ] 모달 크기 옵션 추가
  - [ ] small, medium, large 크기 옵션 prop 전달받아 모달 크기 조절

### Storybook

- [ ] 확인(Alert) 모달 스토리 작성
- [ ] 확인/취소(Confirm) 모달 스토리 작성
- [ ] 입력(Prompt) 모달 스토리 작성
- [ ] 모달 크기 옵션별 스토리 작성

### Payment custom hook

- [x] 4개의 인풋창에서 1개의 인풋창으로 변경
- [x] 카드번호 유효성 검사 수정 : 14~16자리의 숫자인지 검사
- [x] 입력한 카드번호 자릿수에 따라 카드 브랜드 식별 로직 추가
  - 14자리:
    - [x] 36으로 시작하면 Diners
  - 15자리:
    - [x] 34, 37로 시작하면 AMEX
  - 16자리:
    - [x] 4로 시작하면 VISA
    - [x] 51~55로 시작하면 MASTER
    - [x] 622126~622925, 624~626, 6282~6288로 시작하면 유니온페이
- [ ] 카드 번호 포맷팅 기능 추가
  - [ ] 14자리: [4, 6, 4]
  - [ ] 15자리: [4, 6, 5]
  - [ ] 16자리: [4, 4, 4, 4]

### RTL

- [ ] 카드사 식별 및 유효성 검사 로직 테스트
  - [ ] Diners 카드 식별 및 유효성 검사 테스트
  - [ ] AMEX 카드 식별 및 유효성 검사 테스트
  - [ ] 유니온페이 카드 식별 및 유효성 검사 테스트
  - [ ] VISA 카드 식별 및 유효성 검사 테스트
  - [ ] MASTER 카드 식별 및 유효성 검사 테스트
- [ ] 카드 번호 포맷팅 기능 테스트
  - [ ] 각 카드사별 포맷팅 규칙 적용 테스트

### Integrated

- [ ] 구현한 모달과 커스텀 훅 모듈을 이전 프로젝트와 연동하여 직접 사용

</div>
</details>
