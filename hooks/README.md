# Payment 라이브러리

@ohgus/payment-hooks는 카드 입력 상태 관리를 도와주는 훅입니다.

## useCardNumbers

### 카드 타입 규칙

```ts
const cardTypeRules = {
  Visa: {
    length: 16,
    format: ['4', '4', '4', '4']
  },
  Master: {
    length: 16,
    format: ['4', '4', '4', '4']
  },
  Amex: {
    length: 15,
    format: ['4', '6', '5']
  },
  Diners: {
    length: 14,
    format: ['4', '6', '4']
  },
  UnionPay: {
    length: 16,
    format: ['4', '4', '4', '4']
  }
};
```

### 데이터 타입 (output)

- cardNumbers `string`

- formattedCardNumbers: `string`

  - 카드사별 포맷에 맞게 입력을 포매팅한다.
  - ex) 4213-1234-1234-1234 (visa)

- cardType `visa | master | amex | diners | unionpay | null`

- carNumberMaxLength: `number`

- errorMessage `(string | null)`

- handleCardNumberChange

- handleCardNumberBlur

### 어떤 검증하는지

- 숫자를 입력했는지 검증
- 카드 타입별 정해진 길이만큼 입력이 되었는지 채크

## useCardExpireDate

### 데이터 타입 (output)

- expireDate:

```ts
{
  month: string;
  year: string;
}
```

- errorMessage: `string | null`
- isValid:

```ts
{
  month: boolean;
  year: boolean;
}
```

- handleExpireDateChange:

```ts
(
  e: React.ChangeEvent<HTMLInputElement>,
  key: 'month' | 'year'
) => void;
```

- handleExpireDateBlur:

```ts
(
  e: React.FocusEvent<HTMLInputElement>,
  key: 'month' | 'year'
) => void;
```

### 어떤 검증하는지

- 공통 검증
  - 각 자리가 숫자가 맞는지 검증한다.
  - 2자리를 초과하지 않는지 검증한다.
- 월
  - 1~12 사이의 숫자인지 검증한다.
- 년도
  - 현재 년도를 포함해서 +5년 이내의 숫자인지 검증한다.
- 월, 년도 모두 채워져 있는 경우 & 모두 2자리의 값이 들어온 경우
  - 년도가 올해일 때 월이 현재 월보다 이전의 숫자가 아닌지 검증한다.

## useCardCVC

### 데이터 타입 (output)

- cvc: `string`
- errorMessage: `string | null`
- handleCvcChange: `(e: React.ChangeEvent<HTMLInputElement>) => void`
- handleCvcBlur: `(e: React.FocusEvent<HTMLInputElement>) => void`

### 어떤 검증하는지

- 각 자리가 숫자가 맞는지 검증한다.
- 3자리가 맞는지 검증한다.

# useCardBrand

### 데이터 타입 (input)

- cardBrands `(string[])`

### 데이터 타입 (output)

- cardBrand: `string | null`
- errorMessage: `string | null`
- handleBrandSelect: `(e: React.ChangeEvent<HTMLSelectElement>) => void`

### 어떤 검증하는지

- `cardBrands` 내에 있는 `cardBrand`인지 검증한다.

## useCardPassword

### 데이터 타입 (output)

- password: `string`
- errorMessage: `string | null`
- handlePasswordChange: `(e: React.ChangeEvent<HTMLInputElement>) => void`
- handlePasswordBlur: `(e: React.FocusEvent<HTMLInputElement>) => void`

### 어떤 검증하는지

- 각 자리가 숫자가 맞는지 검증한다.
- 2자리가 맞는지 검증한다.
