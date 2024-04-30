# Modal Component Module

## Modal 컴포넌트의 기능 목록

- [ ] 모달 닫기 기능
  - X 버튼 click
  - esc keydown
  - dimmed 영역 click

### 외부에서 주입받아야 할 값들 (인터페이스)

- [ ] isOpen: 모달의 오픈 여부 설정
- [ ] position: 모달의 위치 설정값 -> 'center' | 'bottom'
- [ ] title: 모달의 Header 영역에 삽입할 모달 이름
- [ ] hasCloseButton: 모달의 Header 영역에 '닫기' 버튼 여부 설정
- [ ] children: 모달의 Main 영역에 삽입할 JSX 코드
- [ ] footerButtons: 모달의 Footer 영역에 삽입할 버튼 목록
- [ ] onClose: 모달을 닫을 경우 실행할 콜백 함수

### 기본 포함 요소

- [ ] ModalOverlay: 모달 바깥 영역 (dimmed 처리)
- [ ] ModalWrapper: 모달 영역
  - [ ] Header: 모달의 Header 영역
    - [ ] Title: 모달의 제목
    - [ ] CloseButton: 모달 닫기 버튼
  - [ ] Main: 모달에 children으로 주입된 콘텐츠 노출 영역
  - [ ] Footer: 모달의 하단 버튼 노출 영역
    - [ ] FooterButtons: 모달의 하단에 위치하는 버튼 요소들
