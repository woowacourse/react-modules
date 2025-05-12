# Hooks Module

`@sinjuk1/payments-hooks`는 카드 상태를 active하게 변경할 때 자주 사용되는 입력값(카드 번호, 유효기간, CVC, 비밀번호 등)에 대한 유효성 검사, 상태 관리, 이벤트 핸들링을 손쉽게 처리할 수 있도록 도와주는 React 커스텀 훅 모음입니다.

## 사용 예시

### 카드 번호 4자리 입력 필드 관리 – `useCardNumber`

```tsx
import { useCardNumber } from '@sinjuk1/payments-hooks';

const CardNumberForm = () => {
  const { cardNumbers, handleCardNumberChange, errorMessage } = useCardNumber();

  return (
    <div>
      {cardNumbers.map((card, index) => (
        <input
          key={index}
          type="text"
          maxLength={4}
          value={card}
          onChange={(e) => handleCardNumberChange(e, index)}
          placeholder="0000"
        />
      ))}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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

- [ ] 다양한 카드 브랜드 지원 확장

  - [ ] 카드사 식별 로직 추가
    - [ ] Visa
      - [ ] 4로 시작하는 16자리 숫자
    - [ ] Mastercard
      - [ ] 51~55로 시작하는 16자리 숫자
    - [ ] AMEX
      - [ ] 34, 37로 시작하는 15자리 숫자
        - 예시 (34로 시작): 3412 345678 90123
        - 예시 (37로 시작): 3712 345678 90123
    - [ ] Diners
      - [ ] 36으로 시작하는 14자리 숫자
        - 예시: 3612 345678 9012
    - [ ] UnionPay
      - [ ] 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
        - 622126~622925로 시작하는 경우: 6221 2612 3456 7890
        - 624~626로 시작하는 경우: 6240 1234 5678 9012
        - 6282~6288로 시작하는 경우: 6282 1234 5678 9012
  - [ ] 카드사 유효성 검사 로직 추가
    - [ ] 공통
      - [ ] 숫자만 입력 가능해야함
      - [ ] 처음 상태는 빈문자열이지만 입력하다 지워서 빈문자열 되면 에러
      - [ ] 카드 번호 전체 길이가 14~16자리가 아니면 에러
    - [ ] Visa
    - [ ] Mastercard
    - [ ] AMEX
    - [ ] Diners
    - [ ] UnionPay

- [ ] 카드 번호 포맷팅 기능 추가

  - [ ] 사용자 입력 시 자동으로 카드사별 규칙에 맞게 카드 번호를 구분하여 표시
    - [ ] Visa
      - [ ] 4, 4, 4, 4
    - [ ] Mastercard
      - [ ] 4, 4, 4, 4
    - [ ] AMEX
      - [ ] 4, 6, 5
    - [ ] Diners
      - [ ] 4, 6, 4
    - [ ] UnionPay
      - [ ] 4, 4, 4, 4

## 라이센스

@keemsebin @dlsxjzld
