## 🚀 페이먼츠 모듈 2단계 - Refactoring

### 📍 학습 목표

- ✔️ 모듈화된 컴포넌트의 재사용성 및 확장성 경험
- ✔️ 실제 프로젝트에서의 컴포넌트 통합 및 활용
- ✔️ 요구사항 변경에 따른 컴포넌트 리팩터링 및 개선

### 기능명세서

- 모달
- [x] 백드롭 해제시에도 백그라운드 누를 시, 모달 닫힘 구현
- [x] 백드롭 내부 props 변경 및 구조 위치 변경
- [x] 새로운 타입의 모달 형태 구현 -> container 부분만 만들어준다. -> Modal과 Backdrop은 기존꺼 써야함.
  - [x] 확인(Alert) 모달: 사용자에게 메시지를 전달하고 확인 버튼만 제공
    - [x] props로 받아야할 것 - title / description
    - [x] 버튼 제작 (모달 전용) (기본값 - onClick, children / 기본 css - color,backgroundColor, borderColor, borderRadius, fontSize )
  - [x] 확인/취소(Confirm) 모달: 사용자에게 선택지를 제공하고 확인 및 취소 버튼 제공
    - [x] props로 받아야할 것 - title / description / 확인에 대한 액션 onClick
  - [x] trigger wrapper 제작 (여기 안에 들어가는 버튼은 무조건 onhide 이벤트를 디폴트로 실행한다.)
  - [x] 입력(Prompt) 모달: 사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/취소 버튼 제공
    - [x] Modal.Input 컴포넌트 제작
    - [x] 입력 필드 컴포넌트 제작 (기본 값 : value / onChange)
    - [x] props로 받아야할 것 - title / value / setValue / 확인에 대한 액션 onClick
- [x] 모달 크기 옵션 추가 (container)
  - [x] small, medium, large 등의 크기 옵션을 prop으로 전달받아 모달 크기 조절
- [x] 모달 레이아웃 style 수정
- [x] 모달 내부 자동 포커스 기능 구현
  - [x] focusTrap wrapper 구현
- [x] 웹접근성 적용
- [x] 모달 컴포넌트 별 스토리 작성
- [x] 베포시) dependencies 제거 -> peer dependencies 설정
- [x] 컴포넌트 타입 재정의 - componentProps 이용 태그들 타입 재정의

---

- 훅
- [ ] 다양한 카드 브랜드 지원 확장
  - [ ] Visa, Mastercard 외에 AMEX, Diners, UnionPay 등의 주요 카드사 식별 및 유효성 검사 로직 추가
  - [ ] 카드 브랜드별 식별 번호 및 카드 번호 유효성 검사 구현
- [ ] 카드 번호 포맷팅 기능 추가
  - [ ] 사용자 입력 시 자동으로 카드사별 규칙에 맞게 카드 번호를 구분하여 표시
  - [ ] 카드사별 포맷팅 규칙 적용
- [ ] 카드사 식별 (AMEX, Diners, UnionPay 포함) 및 유효성 검사 로직 테스트
- [ ] 카드 번호 포맷팅 기능 테스트

- [ ] useCardNumber 훅 변경

  - [x] 카드번호 상태 단일 string으로 변경
  - [x] 카드번호 에러 상태 단일 값으로 변경
  - [x] 카드번호 상태 변경 onChange 함수의 역할
  - [x] 1.  유효성 검증 (이 카드 번호가 숫자가 맞는지) > (validInput)
  - [x] 2. 카드 타입 (visa,master) > (카드 앞자리 숫자바탕으로 값 생성)
  - [x] 3. 파싱 기준 설정 (위에서 설정된 카드타입을 바탕으로 설정 후, onChange에 넣어주어야한다.)
  - [x] 4. 실제 useInputValue에서 나오는 setter를 이용해 값 업데이트
  - [ ] 길이 체크 에러 함수 추가

#### 리팩토링

- [x] input 상태에 따른 에러 및 에러메시지 처리 (상태 제거 -> 파생 값으로 관리)
- [x] expirationDate 훅 단일 값으로 수정
  - [x] 화면에 보일 때, parsing 해서 보여주기 (month, year)
- [x] useInputValue 단일값만 처리 (상태 단일값만)
- [x] useCardNumber, useExpirationDate 훅 인자로 splitter 받기

### 웹접근성

✅ 역할 정리

#### role="dialog"

- 이 요소가 **대화 상자(modal dialog)**임을 알림
- 스크린 리더가 이 영역을 독립적인 인터랙션 단위로 인식하게 함
- 보통 title, description도 함께 제공되어야 함 (aria-labelledby, aria-describedby)

#### aria-modal="true"

- 이 dialog가 modal임을 명시
- 즉, "현재 dialog 외의 콘텐츠는 일시적으로 접근 불가하다"고 알림
- 스크린 리더는 이 속성을 보고 배경 콘텐츠를 무시하거나 skip함
