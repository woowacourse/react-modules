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

### useCardNumberValidation

`return { validationResults, handleCardNumberChange }`

```ts
validationResult {
  isValid: boolean;
  errorMessage?: string[];
}

handleCardNumberChange(cardNumber: string, index: number)
```

사용 예시:

```tsx
const [cardNumber, setCardNumber] = useState(['', '', '', '']);

const { validationResults: numberValidationResults, handleCardNumberChange } = useCardNumberValidation();

{
  cardNumber.map((number, index) => (
    return (
      <input
        key={index}
        type='text'
        value={number}
        maxLength={4}
        onChange={(e) => handleCardNumberInputChange(e.target.value, index)}
      />
    );
  ));
}
```

반환 에러 문자열:

- cardNumber가 숫자가 아닌 경우: `숫자를 입력해주세요.`
- cardNumber의 길이가 4가 아닌 경우: `4자리 숫자를 입력해주세요.`

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

### useCardTypeValidation

`return { validationResult, handleCardTypeChange };`

```ts
validationResult {
  cardType: 'Visa' | 'Mastercard' | 'none';
}

handleCardTypeChange = (value: string)
```

사용 예시:

```tsx
const [cardType, setCardType] = useState('');
const { validationResult: typeValidationResult, handleCardTypeChange } = useCardTypeValidation();

<input
  type='text'
  value={cardType}
  onChange={(e) => {
    setCardType(e.target.value);
    handleCardTypeChange(e.target.value);
  }}
/>;
```

반환값:

- value의 첫 글자가 4일 경우: `Visa`
- value의 첫 두 글자가 51~55 사이의 숫자일 경우: `Mastercard`
- 그 외: `none`
