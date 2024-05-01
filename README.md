# Modal Component Module

## Modal 컴포넌트의 기능 목록

- [x] 모달 닫기 기능
  - X 버튼 click
  - esc keydown
  - dimmed 영역 click

### 외부에서 주입받아야 할 값들 (인터페이스)

- [x] isOpen: 모달의 오픈 여부 설정
- [x] position: 모달의 위치 설정값 -> 'center' | 'bottom'
- [x] title: 모달의 Header 영역에 삽입할 모달 이름
- [x] hasCloseButton: 모달의 Header 영역에 '닫기' 버튼 여부 설정
- [x] children: 모달의 Main 영역에 삽입할 JSX 코드
- [x] footerButtons: 모달의 Footer 영역에 삽입할 버튼 목록
- [x] onClose: 모달을 닫을 경우 실행할 콜백 함수

### 기본 포함 요소

- [x] ModalOverlay: 모달 바깥 영역 (dimmed 처리)
- [x] ModalWrapper: 모달 영역
  - [x] Header: 모달의 Header 영역
    - [x] Title: 모달의 제목
    - [x] CloseButton: 모달 닫기 버튼
  - [x] Main: 모달에 children으로 주입된 콘텐츠 노출 영역
  - [x] Footer: 모달의 하단 버튼 노출 영역
    - [x] FooterButtons: 모달의 하단에 위치하는 버튼 요소들

# Card Validation Module

## Card Validation Module에 포함된 훅 목록

- [x] useCardNumbers: 카드 번호 검증 및 결과 반환
- [x] useCardBrand: 카드사 검증 및 결과 반환
- [x] useCardExpiryDate: 카드 유효기간 검증 및 결과 반환
- [x] useCardHolder: 카드 소유자 이름 검증 및 결과 반환
- [x] useCardCVC: 카드 CVC 번호 검증 및 결과 반환
- [x] useCardPassword: 카드 비밀번호 검증 및 결과 반환
