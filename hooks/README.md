# Payment 라이브러리

@kaori-killer/payment-hooks는 카드 유효성 검증을 쉽게 할 수 있도록 돕는 라이브러리 입니다.

# 유효성 검증 Hook

- useCardBrandValidate: 카드 브랜드

  - input
    - validateCardBrand: 카드 브랜드 유효성 검증 함수 (`(cardBrand: string) => boolean`)
    - CARD_BRANDS: 카드 브랜드 목록 (`string[]`)
  - output
    - cardBrand: 카드 브랜드 `string`
    - handleCardBrand: 입력받은 값을 유효성 검증을 통해 카드 브랜드 목록에 넣을 함수 (`event => void`)

- useCardCVCValidate: 카드 CVC

  - input
    - validateCardCVC: 카드 브랜드 유효성 검증 함수 (`(cardCVC: string) => boolean`)
  - output
    - cardCVC: 카드 CVC `string`
    - handleCardCVC: 입력받은 값을 유효성 검증을 통해 CVC로 만들 함수 (`event => void`)

- useCardExpireDateValidate: 카드 유효기간

  - input
    - validateCardExpireDate: 카드 유효기간 유효성 검증 함수 (`(expireDate: month: string;year: string;, key: "month" | "year") => boolean`)
  - output
    - expireDate: 카드 유효기간 `string`
    - handleCardExpire: 입력받은 값을 유효성 검증을 통해 유효기간으로 만들 함수 (`event, key => void`)

- useCardNumbersValidate: 카드 번호

  - input
    - validateCardNumbers: 카드 번호 유효성 검증 함수
  - output
    - cardNumbers: 카드 번호
    - handleCardNumber: 입력받은 값을 유효성 검증을 통해 카드번호로 만들 함수 (`event, key => void`)

- useCardPasswordValidate: 카드 비밀번호

  - input
    - validateCardPassword: 카드 비밀번호 유효성 검증 함수
  - output
    - cardPassword: 카드 비밀번호
    - handleCardPassword: 입력받은 값을 유효성 검증을 통해 카드 비밀번호로 만들 함수 (`event`)

# 상태 관리 Hook

- useCardBrandState: 카드 브랜드
- useCardCVCState: 카드 CVC
- useCardExpireDateState: 카드 유효기간
- useCardNumbersState: 카드 번호
- useCardPasswordState: 카드 비밀번호

## useCardBrandValidate

- 유효성 검증 목록
  - `cardBrands` 내에 있는 `cardBrand`인지 검증한다.
- input
  - cardBrands: 카드 브랜드 목록 (`string[]`)
- output
  - isValid: 유효성 검증 결과 (`boolean`)
  - errorMessage: 에러 메시지 (`string | null`)
  - validateCardBrand: 카드 브랜드 유효성 검증 유틸 함수
    - input
      - cardBrand: 카드 브랜드 (`string`)
    - output
      - 유효성 검증 결과 `boolean`

## useCardCVCValidate

- 유효성 검증 목록
  - 각 자리가 숫자가 맞는지 검증한다.
  - 3자리를 초과하지 않는지 검증한다.
- input
  - 없음
- output
  - isValid: 유효성 검증 결과 (`boolean`)
  - errorMessage: 에러 메시지 (`string | null`)
  - validateCardCVC: 카드 CVC 유효성 검증 유틸 함수
    - input
      - cardCVC: 카드 CVC `string`
    - output
      - 유효성 검증 결과 `boolean`

## useCardExpireDateValidate

- 유효성 검증 목록
  - 공통 검증
    - 각 자리가 숫자가 맞는지 검증한다.
    - 2자리를 초과하지 않는지 검증한다.
  - 월
    - 1~12 사이의 숫자인지 검증한다.
  - 년도
    - 현재 년도를 포함해서 +5년 이내의 숫자인지 검증한다.
  - 월, 년도 모두 채워져 있는 경우 & 모두 2자리의 값이 들어온 경우
    - 년도가 올해일 때 월이 현재 월보다 이전의 숫자가 아닌지 검증한다.
- input
  - 없음
- output
  - isValid: 유효성 검증 결과 (`boolean`)
  - errorMessage: 에러 메시지 (`string | null`)
  - validateCardExpireDate: 카드 유효 기간 유효성 검증 유틸 함수
    - input
      - expireDate: 카드 유효 기간 (`{ month: string; year: string;}`)
      - key: 키 값 (`month | year`)
    - output
      - 유효성 검증 결과 `boolean`

## useCardNumbersValidate

- 유효성 검증 목록
  - 각 자리가 숫자가 맞는지 검증한다.
  - 4자리를 초과하지 않는지 검증한다.
- input
  - 없음
- output
  - isValid: 유효성 검증 결과 (`boolean`)
  - errorMessage: 에러 메시지 (`string | null`)
  - validateCardNumbers: 카드 번호 유효성 검증 유틸 함수
    - input
      - key: 키 값: (`"first" | "second" | "third" | "fourth"`)
      - value: 유효성 검증을 할 카드 번호 (`string`)
      - cardNumbers: 기존 카드 번호
    - output
      - 유효성 검증 결과 `boolean`

```tsx
type cardNumbers = {
  numbers: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  network: {
    name: "NOTHING" | "VISA" | "MASTER_CARD" | "AMEX" | "DINERS" | "UNION_PAY";
    length: number;
    formatting: number[];
  };
};
```

## useCardPasswordValidate

- 유효성 검증 목록
  - 각 자리가 숫자가 맞는지 검증한다.
  - 2자리를 초과하지 않는지 검증한다.
- input
  - cardPassword: 카드 비밀번호 (`string`)
- output
  - isValid: 유효성 검증 결과 `(boolean)`
  - errorMessage: 에러 메시지 `(string | null)`
  - validateCardPassword: 카드 비밀번호 유효성 검증 유틸 함수
    - input
      - cardPassword: 카드 비밀번호 (`string`)
    - output
      - 유효성 검증 결과 `boolean`

## 유틸 함수

formatCardNumber: 카드 번호 포맷팅 기능

- input
  - cardNumbers: 카드 번호 `{
first: string;
second: string;
third: string;
fourth: string;
}`
  - formatting: 포메팅 방식 (`number[]`)
- output: 포매팅된 카드 번호 (`string`)
