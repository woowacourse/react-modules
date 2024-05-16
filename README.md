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

## 재사용 가능한 커스텀 훅

- [x] 페이먼츠 카드의 다양한 정보에 대한 유효성 검사 로직을 여러 개의 작은 커스텀 훅으로 분리하고, 필요에 따라 조합하여 사용할 수 있도록 한다.
- [x] 필수적으로 만들어야 하는 커스텀 훅은 페이먼츠 앱에서 다루었던 카드 정보에 대한 부분이다.

### `useCardNumber` 커스텀 훅

- [x] useCardNumber
- [x] useCardNumberValidation

### `useExpiryDate` 커스텀 훅

- [x] useExpiryDate
- [x] useExpiryDateValidation

### `useCardHolder` 커스텀 훅

- [x] useCardHolder
- [x] useCardHolderValidation

### `useCVC` 커스텀 훅

- [x] useCVC
- [x] useCVCValidation

### `useCardPassword` 커스텀 훅

- [x] useCardPassword
- [x] useCardPasswordValidation

커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게
제공할 수 있어야 한다. 예를 들어 useCardNumber hook을 만든다면 카드 번호 유효성 검사 결과를 불리언 값으로 반환해야 한다. 만약 유효성 검사에 실패한 경우, 에러 정보를 문자열 형태로 반환할 수 있어야 한다.

**예시**

```ts
type ValidationResult = {
  isValid: boolean;
  errorMessage?: string;
};
```

- [x] 페이먼츠 커스텀 훅 모듈을 npm으로 배포하고 사용할 수 있어야 한다.

## STEP 2

### 💡 학습 키워드

---

**Refactoring**

### 🍀 학습 목표

---

- 모듈화된 컴포넌트의 재사용성 및 확장성 경험
- 실제 프로젝트에서의 컴포넌트 통합 및 활용
- 요구사항 변경에 따른 컴포넌트 리팩터링 및 개선

### 📂 기능 요구 사항

---

**1) 모달 컴포넌트 재사용**

- [x] 다양한 모달 타입을 대응 가능하게 구현해야 한다.

새로운 타입의 모달 형태 구현을 통해서, 다양한 모달을 사용하기 위한 추가적인 요구 사항에 대응할 수 있도록 한다.

- PC 환경에서의 사용을 고려하여 대응한다.
- 새로운 타입의 모달 형태를 구현한다. → 반응형 디자인 확장?

  - [x] 확인(Alert) 모달: 사용자에게 메시지를 전달하고 확인 버튼만 제공
  - [x] 확인/취소(Confirm) 모달: 사용자에게 선택지를 제공하고 확인 및 취소 버튼 제공
  - [x] 입력(Prompt) 모달: 사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/취소 버튼 제공

- [x] 모달 크기 옵션을 추가하여, 고정된 하나의 모달 크기가 아닌 여러 사이즈를 동적으로 조절할 수 있도록 한다.
- small, medium, large 등 크기 옵션을 props로 받아서 모달 크기를 조절할 수 있어야 한다.

- [x] 모달 라이브러리 컴포넌트의 PC 환경 대응 스토리를 만들고 스토리북으로 UI 테스트를 진행한다.

**2) 페이먼츠 커스텀 훅**

- [x] 다앙한 카드사(카드 브랜드)에 대응할 수 있도록 구현한다.

다양한 카드 브랜드를 식별할 수 있는 API를 제공해줌으로써, 추가적인 카드 브랜드 식별 요청 요구 사항에 대응할 수 있도록 한다.

- 다양한 카드 브랜드 식별을 확장해야 한다.
  - [x] Visa, Mastercard 외에 AMEX, Diners, UnionPay 등의 주요 카드사 식별 및 유효성 검사 로직 추가한다.
  - [x] 카드 브랜드별 식별 번호 및 카드 번호 유효성 검사를 구현한다.
  - [x] 카드 번호 포매팅 기능을 추가한다, 카드 브랜드별 포매팅 규칙을 적용한다.
  - [x] 사용자가 입력 시, 자동으로 카드 브랜드별 규칙에 맞게 카드 번호를 구분해서 표시할 수 있도록 한다.
- [x] RTL을 활용해서, 페이먼츠 커스텀 훅이 예상대로 동작하는지 확인한다.

사용자가 입력할 수 있는 다양한 예시에 따라서, 테스트를 진행한다.

- [x] 카드 브랜드 식별 및 유효성 검사 로직 테스트
- [x] 카드 브랜드 별 규칙에 맞는 카드 번호 포매팅 기능 테스트

**💡 카드 브랜드 구분 로직 (Diners / AMEX / UnionPay)**

- Diners: 36으로 시작하는 14자리 숫자
  - 예시: 3612 345678 9012
- AMEX: 34, 37로 시작하는 15자리 숫자
  - 예시 (34로 시작): 3412 345678 90123
  - 예시 (37로 시작): 3712 345678 90123
- 유니온페이: 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
  - 622126~622925로 시작하는 경우: 6221 2612 3456 7890
  - 624~626로 시작하는 경우: 6240 1234 5678 9012
  - 6282~6288로 시작하는 경우: 6282 1234 5678 9012

**3) 모듈 통합 및 연동 (심화 요구사항)**

> 현재 단계에서 페이먼츠 스텝1~2를 진행한 저장소 내용은 코드 리뷰 대상이 아니다.
>
> 학습을 위해 독립적으로 만든 컴포넌트를 배포 및 적용해 보고 자신이 독립적으로 만든 모듈 저장소의 컴포넌트에 대해서 리뷰어에게 피드백을 요청한다.

- [ ] 구현한 모달과 커스텀 훅 모듈을 이전 프로젝트와 연동하여 직접 사용해본다.
