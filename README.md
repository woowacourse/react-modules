# react-modules

## 1단계 기능 구현 목록 

### 컴포넌트 (모달)

- 구현 기능 목록 우선순위 중요한 순으로 작성
- [x]  포탈 컴포넌트 구현
- [x]  모달 컴포넌트 구현
    - [x]  모달의 props
        - [x]  위치
        - [x]  내용
        - [x]  isOpen (모달의 열기/닫기 상태) (true / false)
        - [x]  showCloseButton (true / false) : optional
        - [x]  handleClose (모달의 상태를 제어하는 함수)
            - [x]  Esc 키를 눌러서 닫을 수 있다
            - [x]  모달의 내용 말고 모달의 외부를 누르면 닫을 수 있다
            - [x]  모달의 X 버튼을 누르면 닫을 수 있다.
                - [x]  X버튼은 props로 유무를 결정할 수 있다.
    - [x]  모달 레이아웃 (박스) 구현
    - [x]  모달 스타일 제대로 되는지 구현
    - [x]  useModal 훅 구현
    - [x]  aria 접근성 태그 추가하기
    - [x]  스토리북 접근성 검사 테스트


### 페이먼츠 커스텀 훅

- [x]  유효성 검사 커스텀 훅
    - [x]  useCardNumber (카드 번호)
    - [x]  useExpiryDate (카드 유효기간)
    - [x]  useSingleCardInput (CVC/PassWord)
- [x]  커스텀 훅은 개발자에게 2가지 정보를 제공
    - [x]  카드 정보의 유효성 검사 결과
    - [x]  에러 정보
- [x]  RTL를 활용한 테스트
    - [x]  성공 시나리오
    - [x]  실패 시나리오
        - [x]  경계값 초과
        - [x]  빈 입력
        - [x]  형식 오류


## 2단계 기능 구현 목록 

### 컴포넌트 
- [] Button 구현
- [] Input 구현
- [] Flex 구현
- [] Loading 구현 
- [] Modal 
    - [] Modal Header, Content 분리
    - [] Modal Focus hook 구현
- [] useModal hook 테스트
- [] AlertModal 구현
    - [] 컴포넌트 구현
    - [] storybook 작성
- [] InputModal
    - [] 컴포넌트 구현
    - [] storybook 작성
- [] PromptModal
    - [] 컴포넌트 구현
    - [] storybook 작성

### 페이먼츠 커스텀 훅
- [] Visa, Mastercard 외에 AMEX, Diners, UnionPay 등의 주요 카드사 식별 및 유효성 검사 로직 추가
- [] 카드 브랜드별 식별 번호 및 카드 번호 유효성 검사 구현
- [] 카드 번호 포맷팅 기능 추가
- [] 사용자 입력 시 자동으로 카드사별 규칙에 맞게 카드 번호를 구분하여 표시
- [] 카드사 식별 (AMEX, Diners, UnionPay 포함) 및 유효성 검사 로직 테스트
- [] 카드 번호 포맷팅 기능 테스트
