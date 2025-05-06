# Payment 라이브러리

@kaori-killer/payment-hooks는 카드 유효성 검증을 쉽게 할 수 있도록 돕는 라이브러리 입니다.

## useCardNumbersValidate

### 데이터 타입 (output)

- validationState

```ts
{
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
}
```

- errorMessage `(string | null)`

- validateCardNumbers

  - input `(cardNumber: string, key: string)`
  - return `(void)`

### 어떤 검증하는지

- 각 자리가 숫자가 맞는지 검증한다.
- 4자리를 초과하지 않는지 검증한다.

## useCardExpireDateValidate

### 데이터 타입 (output)

- validationState

```ts
{
  month: true,
  year: true
}
```

- errorMessage `(string | null)`

- validateCardExpireDate

  - input `(expireDate: {month: string, year: string }, key: month | year)`
  - return `(void)`

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

## useCardCVCValidate

### 데이터 타입 (output)

- isValid `(boolean)`

- errorMessage `(string | null)`

- validateCardCVC

  - input `(cardCVC: string)`
  - return `(void)`

### 어떤 검증하는지

- 각 자리가 숫자가 맞는지 검증한다.
- 3자리를 초과하지 않는지 검증한다.

# useCardBrandValidate

### 데이터 타입 (input)

- cardBrands `(string[])`

### 데이터 타입 (output)

- isValid `(boolean)`

- errorMessage `(string | null)`

- validateCardBrand

  - input `(cardBrand: string)`
  - return `(void)`

### 어떤 검증하는지

- `cardBrands` 내에 있는 `cardBrand`인지 검증한다.

## useCardPasswordValidate

### 데이터 타입 (output)

- isValid `(boolean)`

- errorMessage `(string | null)`

- validateCardPassword

  - input `(cardPassword: string)`
  - return `(void)`

### 어떤 검증하는지

- 각 자리가 숫자가 맞는지 검증한다.
- 2자리를 초과하지 않는지 검증한다.
