# Hooks Module

`@sinjuk1/payments-hooks`는 카드 상태를 active하게 변경할 때 자주 사용되는 입력값(카드 번호, 유효기간, CVC, 비밀번호 등)에 대한 유효성 검사, 상태 관리, 이벤트 핸들링을 손쉽게 처리할 수 있도록 도와주는 React 커스텀 훅 모음입니다.

## 사용 예시

### 카드 번호 4자리 입력 필드 관리 – `useCardNumber`

```tsx
import { useCardNumber } from '@sinjuk1/payments-hooks';

const CardNumberForm = () => {
  const { cardNumber, errorMessage, isValid, cardType, handleCardNumberChange } = useCardNumber();

  return (
    <div>
      <input
        type="text"
        value={cardNumber.formatted}
        onChange={handleCardNumberChange}
        placeholder="카드 번호를 입력하세요"
      />
      {errorMessage && (
        <p style={{ border: `1px solid ${errorMessage === '' ? 'black' : 'red'}` }}>
          {errorMessage}
        </p>
      )}
      <p>카드 타입: {cardType}</p>
      <p>포맷팅 카드 번호: {cardNumber.formatted}</p>
      <p>원본 카드 번호: {cardNumber.raw}</p>
      <h1>Hooks Modules</h1>
      <button style={{ cursor: `${isValid ? 'pointer' : 'not-allowed'}` }}>카드 추가하기</button>
    </div>
  );
};
```

### 카드 유효기간 입력 필드 관리 – `useExpiryDate`

```tsx
import { useExpiryDate } from '@sinjuk1/payments-hooks';

const ExpiryDateInput = () => {
  const { expiryDate, handleChangeExpiryDate, errorMessage } = useExpiryDate();

  return (
    <div>
      <input
        type="text"
        value={expiryDate[0].value}
        onChange={(e) => handleChangeExpiryDate(e, 0)}
        placeholder="MM"
      />
      <input
        type="text"
        value={expiryDate[1].value}
        onChange={(e) => handleChangeExpiryDate(e, 1)}
        placeholder="YY"
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};
```

### 카드 CVC/Password 입력 필드 관리 – `useSingleCardInput`

```tsx
import { useSingleCardInput } from '@sinjuk1/payments-hooks';

// CVC
const CardCVCInput = () => {
  const { singleCardInput, handleSingleCardInputChange, errorMessage } = useSingleCardInput(3);

  return (
    <div>
      <input
        type="text"
        value={singleCardInput.value}
        onChange={handleSingleCardInputChange}
        placeholder="3자리 입력"
      />
      {!singleCardInput.isValid && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

// Password
const CardPasswordInput = () => {
  const { singleCardInput, handleSingleCardInputChange, errorMessage } = useSingleCardInput(2);

  return (
    <div>
      <input
        type="text"
        value={singleCardInput.value}
        onChange={handleSingleCardInputChange}
        placeholder="2자리 입력"
      />
      {!singleCardInput.isValid && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};
```

### 카드 브랜드 식별

- [x] 다양한 카드 브랜드 지원 확장

  - [x] 카드사 식별 로직 추가
    - [x] Visa
      - [x] 4로 시작하는 16자리 숫자
    - [x] Mastercard
      - [x] 51~55로 시작하는 16자리 숫자
    - [x] AMEX
      - [x] 34, 37로 시작하는 15자리 숫자
        - 예시 (34로 시작): 3412 345678 90123
        - 예시 (37로 시작): 3712 345678 90123
    - [x] Diners
      - [x] 36으로 시작하는 14자리 숫자
        - 예시: 3612 345678 9012
    - [x] UnionPay
      - [x] 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
        - 622126~622925로 시작하는 경우: 6221 2612 3456 7890
        - 624~626로 시작하는 경우: 6240 1234 5678 9012
        - 6282~6288로 시작하는 경우: 6282 1234 5678 9012
  - [x] 카드사 유효성 검사 로직 추가
    - [x] 공통
      - [x] 숫자만 입력 가능해야함
      - [x] 처음 상태는 빈문자열이지만 입력하다 지워서 빈문자열 되면 에러
      - [x] 카드 번호 전체 길이가 14~16자리가 아니면 에러
    - [x] Visa
    - [x] Mastercard
    - [x] AMEX
    - [x] Diners
    - [x] UnionPay

- [x] 카드 번호 포맷팅 기능 추가

  - [x] 사용자 입력 시 자동으로 카드사별 규칙에 맞게 카드 번호를 구분하여 표시
    - [x] Visa
      - [x] 4, 4, 4, 4
    - [x] Mastercard
      - [x] 4, 4, 4, 4
    - [x] AMEX
      - [x] 4, 6, 5
    - [x] Diners
      - [x] 4, 6, 4
    - [x] UnionPay
      - [x] 4, 4, 4, 4

## 라이센스

@keemsebin @dlsxjzld
