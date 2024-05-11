# Hooks Module

- Custom card validation hooks made by paran and fe

## Quick Start

- install with npm:

```bash
npm install fe-card-validation-hooks
```

## Hooks

- 에러가 발생하면 아래 문서에 작성된 순서대로 해당하는 에러 문자열이 `validationResult`의 `errorMessages` 배열에 저장합니다.
- 사용하고 싶은 에러 메시지를 각 handler가 반환하는 배열에서 문자열로 찾아 사용하거나 배열을 순회하면서 모두 사용할 수 있습니다.

### useCardNumber

- 입력한 카드 번호에 맞는 카드 브랜드를 반환합니다.
- 카드 브랜드에 맞는 카드 번호 자릿수를 제한합니다.
- 숫자 이외의 입력을 차단합니다.
- 카드 브랜드마다 다른 포맷팅 규칙을 적용해서 배열 형태로 반환합니다. `join`을 통해 사용하세요.

`return { cardNumberInfo, handleCardNumberChange }`

```ts
cardNumberInfo {
  cardNumber: string[];
  cardType: CardBrand;
  isValid: boolean;
  errorMessages?: string[];
}

handleCardNumberChange(cardNumber: string)
```

사용 예시:

```tsx
const { cardNumberInfo, handleCardNumberChange } = useCardNumber();

{
  return (
    <input
      type='text'
      value={cardNumberInfo.cardNumber.join(' ')}
      onChange={(e) => handleCardNumberInputChange(e.target.value)}
    />
  );
}
```

반환 에러 문자열:

- cardNumber의 길이가 해당 카드 브랜드의 길이가 아닌 경우: `{해당 카드 브랜드 자릿수}자리 숫자를 입력해주세요.`

### useExpiryDateValidation

`return { validationResult, handleExpiryDateChange }`

```ts
validationResult {
  isValidMonth: boolean;
  monthErrorMessage?: string[];

  isValidYear: boolean;
  yearErrorMessage?: string[];
}

handleExpiryDateChange(month: string, year: string)
```

반환 에러 문자열:

- 월 입력이 숫자가 아닌 경우: `숫자로 입력해주세요.`
- 월 입력이 범위를 벗어난 경우: `올바른 월을 입력해주세요 (01~12).`

- 연 입력이 숫자가 아닌 경우: `숫자로 입력해주세요.`

- 월 입력이 2자가 아닌 경우: `2자로 입력해주세요.`
- 연 입력이 2자가 아닌 경우: `2자로 입력해주세요.`

- 현재 년/월 이전의 값을 입력한 경우: `만료된 카드입니다.`

사용 예시:

```tsx
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  const { validationResult: expiryValidationResult, handleExpiryDateChange } = useExpiryDateValidation();

  <input
    type='text'
    value={expiryMonth}
    maxLength={2}
    onChange={(e) => {
      setExpiryMonth(e.target.value);
      handleExpiryDateChange(e.target.value, expiryYear);
    }}
  />

  <input
    type='text'
    value={expiryYear}
    maxLength={2}
    onChange={(e) => {
      setExpiryYear(e.target.value);
      handleExpiryDateChange(expiryMonth, e.target.value);
    }}
  />
```

### useCVCValidation

`return { validationResult, handleCVCChange }`

```ts
validationResult {
  isValid: boolean;
  errorMessage?: string[];
}

handleCVCChange(value: string, maxLength: number)
```

반환 에러 문자열:

- value가 숫자가 아닌 경우: `숫자로 입력해주세요.`
- value의 길이가 maxLength가 아닌 경우: `{maxLength}자로 입력해주세요.`

사용 예시:

```tsx
const [cvc, setCVC] = useState('');
const { validationResult: cvcValidationResult, handleCVCChange } = useCVCValidation();

<input
  type='text'
  value={cvc}
  onChange={(e) => {
    setCVC(e.target.value);
    handleCVCChange(e.target.value, 4);
  }}
/>;
```

### useCardHolderValidation

`return { validationResult, handleCardHolderChange };`

```ts
validationResult {
  isValid: boolean;
  errorMessage?: string[];
}

handleCardHolderChange = (value: string, maxLength: number)
```

반환 에러 문자열:

- value가 대문자 영어가 아닌 경우: `1개 이하의 공백이 연속된 대문자 영어로 입력해주세요.`
- value의 길이가 maxlength를 넘을 경우: `${maxLength}자 이내로 입력해주세요.`

사용 예시:

```tsx
const [cardHolder, setCardHolder] = useState('');
const { validationResult: holderValidationResult, handleCardHolderChange } = useCardHolderValidation();

<input
  type='text'
  value={cardHolder}
  onChange={(e) => {
    setCardHolder(e.target.value);
    handleCardHolderChange(e.target.value, 15);
  }}
/>;
```

### useCardPasswordValidation

`return { validationResult, handleCardPasswordChange }`

```ts
validationResult {
  isValid: boolean;
  errorMessage?: string[];
}

handleCardPasswordChange(value: string, maxLength: number)
```

반환 에러 문자열:

- value가 숫자가 아닌 경우: `숫자로 입력해주세요.`
- value의 길이가 maxLength가 아닌 경우: `${maxLength}자리 비밀번호를 입력해주세요.`

사용 예시:

```tsx
const [cardPassword, setCardPassword] = useState('');
const { validationResult: passwordValidationResult, handleCardPasswordChange } = useCardPasswordValidation();

<input
  type='text'
  value={cardPassword}
  maxLength={2}
  onChange={(e) => {
    setCardPassword(e.target.value);
    handleCardPasswordChange(e.target.value);
  }}
/>;
```

### useCardType

- (참고) `useCardNumber` 훅 내부에서 `useCardType`을 사용하고 있습니다. 일반적인 상황에서는 `useCardNumber`를 사용하세요.

`return { handleCardTypeChange };`

```ts
handleCardTypeChange = (value: string)
```

반환값:

- value가 4로 시작하는 경우: `Visa`
- value가 51~55 사이의 숫자로 시작하는 경우: `Mastercard`
- value가 36으로 시작하는 경우: `Diners`
- value가 34 또는 37로 시작하는 경우: `AMEX`
- value가 622126~622925로 시작하거나, 624~626으로 시작하거나, 6282~6288로 시작하는 경우: `Unionpay`
- 그 외: `None`
