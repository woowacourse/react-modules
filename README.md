# react-modules

# 기능 명세

## 모달 컴포넌트

- 모달 위치 및 내용 구성 옵션을 prop으로 전달받아 유연하게 모달을 구성할 수 있어야 한다.
  - 모달 위치: 중앙, 하단 등
  - 모달 내용: 제목, 버튼 등
- 사용자 정의 이벤트 핸들러를 지원해야 한다.
- 모달 열기, 닫기, 확인 등의 동작에 대한 이벤트 핸들러

## 커스텀 훅

- 커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게 제공할 수 있어야 한다.
  - 예를 들어 useCardNumber hook을 만든다면 카드 번호유효성 검사 결과를 불리언 값으로 반환해야 한다.
  - 만약 유효성 검사에 실패한 경우, 에러 정보를 문자열 형태로 반환할 수 있어야 한다.

# 기능 목록

## 모달 컴포넌트

ModalComponentProps{modalType:"center"|"bottom", titleText?: string, children:React.HTMLElement, closeType:"top"|"bottom", onClose?: () => void}

- 모달이 열린다.
  - 백그라운드 오버레이가 바탕에 깔린다.
  - 아래에서 위로 올라오는 애니메이션으로 열린다.
  - 백그라운드 오버레이는 밝기 변화 애니메이션으로 나타난다.
  - 전달받은 title을 제목으로 가진다
- 모달 안에 Props로 전달한 컨텐츠가 렌더링된다.
- (닫기버튼/백그라운드 오버레이/ESC)를 누르면 모달이 닫힌다.
  - 위에서 아래로 내려가는 애니메이션으로 모달이 닫힌다.
  - 백그라운드 오버레이는 밝기 변화 애니메이션으로 나타난다.

## 커스텀 훅

useCardInfo > {useCardNumbers, useCompany ...} > useCardNumbers 는 카드 번호의 상태와 상태에 따른 유효성 검사 결과 상태를 관리

- useCardInfo : 카드 정보를 일괄 관리합니다.

  - cardNumber
    {cardNumber, setCardNumber}
    {error, setError}

  - cardCompany
    {cardCompany, setCardCompany}
    {error, setError}

  - cardExpDate
    {cardExpDate, setCardExpDate}
    {error, setError}

  - cardCVC
    {cardCVC, setCardCVC}
    {error, setError}

  - cardPassword
    {cardPassword, setCardPassword}
    {error, setError}

- validation

# 작업 내용 순서 (커밋메세지 - TDD)

## 모달 컴포넌트

- feat: 모달창 기본 UI(background, modal 창) 구현
  - 모달 오픈 이벤트가 생기면 모달창이 켜진다.
- feat: 닫기 기능 구현
  - 닫기 이벤트가 발생하면 onCloseHandler가 실행되고 모달창이 닫힌다.
- feat: Props(titleText, closeType)에 따른 UI 구현
  - titleText와 closeType에 따라 적절한 모달창 UI 렌더링된다.
- feat: Props(children)에 따른 UI 구현

  - children 이 모달창 내부에 렌더링된다.

- 모달 오픈 이벤트가 생기면 모달창이 페이지 위에 켜진다.
- 모달 닫기 이벤트가 발생하면 (닫기 버튼/백그라운드 오버레이/ESC) 닫힌다.
- 모달 onCloseHandler를 넘기면 전달 핸들러 수행 후 모달이 닫힌다.
- titleText 내용이 Title에 렌더링된다.
- closeButton 의 위치와 형태가 closeType에 따라 렌더링된다.
- children 이 모달 내부에 렌더링된다.

의문점 :

- z-index를 props 로 넘겨 받아야할지?

## 커스텀 훅

- feat: 변경 사안에 따라 useCardNumber의 상태를 관리한다.
- feat: 변경 사안에 따라 useCardNumber의 유효성 검사를 한다.
- feat: 변경 사안에 따라 useCardCompany의 상태를 관리한다.
- feat: 변경 사안에 따라 useCardCompany의 유효성 검사를 한다.
- feat: 변경 사안에 따라 useCardExpdate의 상태를 관리한다.
- feat: 변경 사안에 따라 usecardExpDate의 유효성 검사를 한다.
- feat: 변경 사안에 따라 usecardCVC의 상태를 관리한다.
- feat: 변경 사안에 따라 usecardCVC의 유효성 검사를 한다.
- feat: 변경 사안에 따라 usecardPassword의 상태를 관리한다.
- feat: 변경 사안에 따라 usecardPassword의 유효성 검사를 한다.
