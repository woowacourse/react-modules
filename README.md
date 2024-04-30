# react-modules

### Modal component

- [ ] 모달 props
  - [ ] 모달 위치
  - [ ] 모달 내용
  - [ ] 모달 닫는 방식
    - [ ] prop 이름 : closeButtonPosition : 'top' | 'bottom'
- [ ] 모달 event
  - [ ] 열기
  - [ ] 닫기 - deem 눌러도 닫혀야된다.
  - [ ] 확인 - optional

### Payment custom hook

- 유효성 검사 결과와 에러 정보를 반환한다.

- [ ] useCardNumber
  - [ ] 숫자여야한다.
  - [ ] 16자리여야한다.
- [ ] useCardHolder
  - [ ] 영어 대문자+공백만 입력가능하다.
  - [ ] 공백 포함 15자까지만 가능하다.
- [ ] useExpiryDate
  - [ ] 월은 1~12만 입력 가능하다. (월도 두자리로 입력해달라는 description 추가 )
  - [ ] 년도 2자리 숫자만 입력 가능하다.
  - [ ] 년,월 조합을 봤을 때 오늘보다 과거이면 에러를 낸다.
- [ ] useCVC
  - [ ] 3자리 숫자만 입력 가능하다.
- [ ] useCardType

  - [ ] 선택한 값이 있는지 검증한다.

- [ ] usePassword

  - [ ] 2자리 숫자만 입력 가능하다.

  ### Storybook

  - [ ] 모달 위치에 대한 테스트 시나리오
  - [ ] 모달 내용에 대한 테스트 시나리오
  - [ ] 모달 이벤트 핸들러에 대한 테스트 시나리오

  ### RTL

  - [ ] 페이먼트 유효성 검사 커스텀 훅의 동작을 검증
  - [ ] 다양한 입력 값에 대한 커스텀 훅의 결과
    - [ ] 유효성 통과하는 경우
    - [ ] 유효성 통과하지 않는 경우
