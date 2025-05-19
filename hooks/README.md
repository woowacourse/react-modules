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
  cardNumbers, // 숫자만 포함된 원본 카드 번호 (예: "4111111111111111")
  formattedCardNumber, // 포맷팅된 카드 번호 (예: "4111 1111 1111 1111")
  cardBrand, // 감지된 카드 브랜드 (visa, master, amex, diners, unionpay 등)
  handleCardNumberChange, // 카드 번호 변경 핸들러 함수
  cardNumberErrors, // 유효성 검사 오류 메시지
  isCardNumberValid, // 카드 번호 유효한지 여부 (boolean)
  maxCardLength, // 카드 종류에 따른 최대 입력 길이 (공백 포함)
} = useCardNumberField();
```

#### 사용 예시

```tsx
import React from 'react';
import { useCardNumberField } from '@sanghee01/card-field-hooks';

function CardNumberInput() {
  const {
    cardNumbers,
    formattedCardNumber,
    cardBrand,
    handleCardNumberChange,
    cardNumberErrors,
    isCardNumberValid,
    maxCardLength,
  } = useCardNumberField();

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
const {
  cardExpiration, // { month: string, year: string } 형태의 객체
  handleCardExpirationChange, // 카드 유효기간 변경 핸들러 함수
  cardExpirationError, // { month: string, year: string } 형태의 오류 메시지
  isCardExpirationValid, // 유효기간이 유효한지 여부 (boolean)
} = useExpirationDateField();
```

### useCardPasswordField

- 카드 비밀번호 입력 관리 (앞 2자리)
- 유효성 검사 및 마스킹 처리

```tsx
const {
  cardPassword, // 카드 비밀번호 값 (string)
  handleCardPasswordChange, // 비밀번호 변경 핸들러 함수
  cardPasswordError, // 비밀번호 오류 메시지
  isCardPasswordValid, // 비밀번호가 유효한지 여부 (boolean)
} = useCardPasswordField();
```

### useCvcField

- 카드 CVC 입력 관리
- 입력값 유효성 검사 자동 처리

```tsx
const {
  cvc, // CVC 값 (string)
  handleCvcChange, // CVC 변경 핸들러 함수
  cvcError, // CVC 오류 메시지
  isCvcValid, // CVC가 유효한지 여부 (boolean)
} = useCvcField();
```

### useCardCompanyField

- 카드 회사 선택 관리

```tsx
const {
  cardCompany, // 선택된 카드 회사 (string)
  handleSelectChange, // 카드 회사 선택 변경 핸들러 함수
} = useCardCompanyField();
```

---

## 📦 유틸리티

- **카드 유효성 검사**: 카드 번호, 유효기간, 비밀번호, CVC 입력에 대한 유효성 검사 로직을 제공합니다.
- **카드 브랜드 감지**: 카드 번호를 기반으로 카드 브랜드를 자동으로 감지합니다.
- **포맷팅**: 카드 번호, 유효기간 등의 입력값을 적절한 형식으로 자동 포맷팅합니다.

```tsx
import {
  validateNumberError,
  validateCardBrandLength,
  validateMonthRangeError,
  validateYearLengthError,
  validateCardPasswordLengthError,
  validateCvcLengthError,
} from '@sanghee01/card-field-hooks';

// 예시 사용법
const isNumberValid = !validateNumberError('1234'); // true
```

---

## 📌 사용 예시

```tsx
import React from 'react';
import {
  useCardNumberField,
  useExpirationDateField,
  useCardPasswordField,
  useCvcField,
  useCardCompanyField,
  CardCompany,
} from '@sanghee01/card-field-hooks';

const CardForm = () => {
  // 카드 번호 관리
  const { cardNumbers, formattedCardNumber, handleCardNumberChange, cardNumberErrors, isCardNumberValid } =
    useCardNumberField();

  // 유효기간 관리
  const { cardExpiration, handleCardExpirationChange, cardExpirationError, isCardExpirationValid } =
    useExpirationDateField();

  // 비밀번호 관리
  const { cardPassword, handleCardPasswordChange, cardPasswordError, isCardPasswordValid } = useCardPasswordField();

  // CVC 관리
  const { cvc, handleCvcChange, cvcError, isCvcValid } = useCvcField();

  // 카드 회사 관리
  const { cardCompany, handleSelectChange } = useCardCompanyField();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 모든 입력값이 유효한지 확인
    if (isCardNumberValid && isCardExpirationValid && isCardPasswordValid && isCvcValid && cardCompany) {
      console.log('카드 정보 제출:', {
        cardNumbers,
        expirationMonth: cardExpiration.month,
        expirationYear: cardExpiration.year,
        cardPassword,
        cvc,
        cardCompany,
      });
      // 결제 처리 로직...
    } else {
      console.log('유효하지 않은 카드 정보가 있습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">카드 번호</label>
        <input
          id="cardNumber"
          value={formattedCardNumber}
          onChange={(e) => handleCardNumberChange(e.target.value)}
          placeholder="카드 번호를 입력해주세요"
        />
        {!isCardNumberValid && <p className="error">{cardNumberErrors}</p>}
      </div>

      <div>
        <label htmlFor="expirationMonth">유효기간 (월)</label>
        <input
          id="expirationMonth"
          value={cardExpiration.month}
          onChange={(e) => handleCardExpirationChange('month', e.target.value)}
          placeholder="MM"
          maxLength={2}
        />
        {cardExpirationError.month && <p className="error">{cardExpirationError.month}</p>}
      </div>

      <div>
        <label htmlFor="expirationYear">유효기간 (년)</label>
        <input
          id="expirationYear"
          value={cardExpiration.year}
          onChange={(e) => handleCardExpirationChange('year', e.target.value)}
          placeholder="YY"
          maxLength={2}
        />
        {cardExpirationError.year && <p className="error">{cardExpirationError.year}</p>}
      </div>

      <div>
        <label htmlFor="cardPassword">비밀번호 앞 2자리</label>
        <input
          id="cardPassword"
          type="password"
          value={cardPassword}
          onChange={(e) => handleCardPasswordChange(e.target.value)}
          placeholder="앞 2자리"
          maxLength={2}
        />
        {!isCardPasswordValid && <p className="error">{cardPasswordError}</p>}
      </div>

      <div>
        <label htmlFor="cvc">CVC</label>
        <input id="cvc" value={cvc} onChange={(e) => handleCvcChange(e.target.value)} placeholder="CVC" maxLength={4} />
        {!isCvcValid && <p className="error">{cvcError}</p>}
      </div>

      <div>
        <label htmlFor="cardCompany">카드 회사</label>
        <select
          id="cardCompany"
          value={cardCompany}
          onChange={(e) => handleSelectChange(e.target.value as CardCompany)}
        >
          <option value="">카드사 선택</option>
          <option value="BC카드">BC카드</option>
          <option value="신한카드">신한카드</option>
          <option value="카카오뱅크">카카오뱅크</option>
          <option value="현대카드">현대카드</option>
          <option value="우리카드">우리카드</option>
          <option value="롯데카드">롯데카드</option>
          <option value="하나카드">하나카드</option>
          <option value="국민카드">국민카드</option>
        </select>
      </div>

      <button type="submit">결제하기</button>
    </form>
  );
};
```

---
