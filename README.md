# react-modules

## 재사용 가능한 모달 컴포넌트 모듈

### 🎯 기능 요구 사항

- [x] 피그마 시안 예시처럼 모바일에서 사용 가능한 모달 컴포넌트를 만들어야 한다.

※ 리액트 페이먼츠 미션 모바일 레이아웃을 참고한다.

- [x] 모달 위치 및 내용 구성 옵션을 prop으로 전달받아 유연하게 모달을 구성할 수 있어야 한다.

  - [x] 모달 위치: 중앙, 하단 등
  - [x] 모달 내용
    - [x] 제목
    - [x] 버튼
  - [x] 모달 열기, 닫기, 확인 등의 동작에 대한 이벤트 핸들러

- [x] 모달 컴포넌트를 npm으로 배포하고 사용할 수 있어야 한다.

**예시**

```jsx
<Modal>
  <Modal.BackDrop onClose={closeModal} />
  <Modal.Container position=“bottom”>
    <Modal.Header>
      <Modal.Title text=“카드사 선택” />
      <Modal.CloseButton onCloseButtonClick={closeModal} />
    </Modal.Header>
    <YourContent /> 😊
    <Modal.ButtonContainer direction=“column”>
      <Modal.Button theme=“dark” onClick={closeModal}>
        동의하고 저장하기
      </Modal.Button>
      <Modal.Button theme=“white” onClick={closeModal}>
        닫기
      </Modal.Button>
    </Modal.ButtonContainer>
  </Modal.Container>
</Modal>
```

## 재사용 가능한 커스텀 훅

- [ ] 페이먼츠 카드의 다양한 정보에 대한 유효성 검사 로직을 여러 개의 작은 커스텀 훅으로 분리하고, 필요에 따라 조합하여 사용할 수 있도록 한다.
- [ ] 필수적으로 만들어야 하는 커스텀 훅은 페이먼츠 앱에서 다루었던 카드 정보에 대한 부분이다.

### `useCardNumber` 커스텀 훅

- [ ] useCardNumber
- [ ] useCardNumberValidation

### `useExpiryDate` 커스텀 훅

- [ ] useExpiryDate
- [ ] useExpiryDateValidation

### `useCardHolder` 커스텀 훅

- [ ] useCardHolder
- [ ] useCardHolderValidation

### `useCVC` 커스텀 훅

- [ ] useCVC
- [ ] useCVCValidation

### `useCardPassword` 커스텀 훅

- [ ] useCardPassword
- [ ] useCardPasswordValidation

커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게
제공할 수 있어야 한다. 예를 들어 useCardNumber hook을 만든다면 카드 번호 유효성 검사 결과를 불리언 값으로 반환해야 한다. 만약 유효성 검사에 실패한 경우, 에러 정보를 문자열 형태로 반환할 수 있어야 한다.

**예시**

```ts
type ValidationResult = {
  isValid: boolean;
  errorMessage?: string;
};
```

- [ ] 페이먼츠 커스텀 훅 모듈을 npm으로 배포하고 사용할 수 있어야 한다.
