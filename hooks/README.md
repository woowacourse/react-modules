# Card Field Hooks

신용카드 정보를 입력하는 데 필요한 다양한 React Custom Hook과 유틸리티를 제공하는 npm 패키지입니다.

---

## 🚀 설치 방법

```bash
npm install @sanghee01/card-field-hooks
```

---

## 🛠️ 제공되는 훅

이 패키지는 신용카드 입력 필드를 관리하기 위한 다음과 같은 커스텀 훅을 제공합니다.

### useCardNumberField

- 카드 번호 입력 관리
- 입력값 자동 포맷팅 (VISA, MasterCard, AMEX, Diners, UnionPay 등 카드사별 포맷)
- 카드 브랜드 자동 감지 기능
- 카드사별 유효성 검사 자동 처리
- 카드 종류에 따른 최대 입력 길이 자동 설정

```tsx
const {
  cardNumbers, // 숫자만 포함된 원본 카드 번호
  formattedCardNumber, // 포맷팅된 카드 번호 (예: "4111 1111 1111 1111")
  cardBrand, // 감지된 카드 브랜드 (visa, master, amex, diners, unionpay 등)
  handleCardNumberChange,
  cardNumberErrors, // 유효성 검사 오류 메시지
  isCardNumberValid, // 카드 번호 유효한지 여부
  maxCardLength, // 카드 종류에 따른 최대 입력 길이 (공백 포함)
} = useCardNumberField();
```

#### 사용 예시

```tsx
import React from 'react';
import { useCardNumberField } from '@sanghee01/card-field-hooks';

function CardNumberInput() {
  const { formattedCardNumber, cardBrand, handleCardNumberChange, cardNumberErrors, isCardNumberValid, maxCardLength } =
    useCardNumberField();

  return (
    <div>
      <label htmlFor="cardNumber">카드 번호</label>
      <input
        type="text"
        name="cardNumber"
        value={formattedCardNumber}
        onChange={(e) => handleCardNumberChange(e.target.value)}
        placeholder="카드 번호를 입력해주세요."
        maxLength={maxCardLength}
      />
      {!isCardNumberValid && <p className="error">{cardNumberErrors}</p>}
      {cardBrand && <p>카드 종류: {cardBrand.toUpperCase()}</p>}
    </div>
  );
}
```

### useExpirationDateField

- 카드 유효기간 입력 관리
- MM/YY 형식 자동 처리 및 유효성 검사

```tsx
const { expirationDate, handleExpirationChange, expirationError } = useExpirationDateField();
```

### useCardPasswordField

- 카드 비밀번호 입력 관리 (앞 2자리)
- 유효성 검사 및 마스킹 처리

```tsx
const { password, handlePasswordChange, passwordError } = useCardPasswordField();
```

### useCvcField

- 카드 CVC 입력 관리
- 입력값 유효성 검사 자동 처리

```tsx
const { cvc, handleCvcChange, cvcError } = useCvcField();
```

### useCardCompanyField

- 카드 회사 선택 관리

```tsx
const { cardCompany, handleSelectChange } = useCardCompanyField();
```

---

## 📦 유틸리티

- **cardInputValidations**: 카드 번호, 유효기간, 비밀번호, CVC 입력에 대한 유효성 검사 로직을 제공합니다.

```tsx
import { validateCardNumber, validateExpiration, validatePassword, validateCvc } from '@sanghee01/card-field-hooks';

const isCardValid = validateCardNumber('1234 5678 9012 3456');
```

---

## 📌 사용 예시

```tsx
iimport React from 'react';
import { useCardNumberField, useExpirationDateField, useCardPasswordField, useCvcField, useCardCompanyField, CardCompany } from '@sanghee01/card-field-hooks';

const CardForm = () => {
  const { cardNumber, handleCardNumberChange } = useCardNumberField();
  const { expirationDate, handleExpirationChange } = useExpirationDateField();
  const { password, handlePasswordChange } = useCardPasswordField();
  const { cvc, handleCvcChange } = useCvcField();
  const { cardCompany, handleSelectChange } = useCardCompanyField();

  return (
    <form>
      <input value={cardNumber} onChange={handleCardNumberChange} placeholder="카드 번호" />
      <input value={expirationDate} onChange={handleExpirationChange} placeholder="유효 기간(MM/YY)" />
      <input value={password} onChange={handlePasswordChange} placeholder="비밀번호 앞 2자리" />
      <input value={cvc} onChange={handleCvcChange} placeholder="CVC" />
      <select value={cardCompany} onChange={e => handleSelectChange(e.target.value as CardCompany)}>
        <option value="BC카드">BC카드</option>
        <option value="신한카드">신한카드</option>
        <option value="카카오뱅크">카카오뱅크</option>
        <option value="현대카드">현대카드</option>
        <option value="우리카드">우리카드</option>
        <option value="롯데카드">롯데카드</option>
        <option value="하나카드">하나카드</option>
        <option value="국민카드">국민카드</option>
      </select>
    </form>
  );
};
```
