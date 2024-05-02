# Custom Hooks for Form Validation 사용 가이드

이 패키지는 카드 폼 입력값에 대한 유효성 검사를 위한 여러 가지 커스텀 React 훅을 제공합니다.

## 설치

```bash
npm install your-custom-hooks-package-name
```

## 훅 목록 및 설명

### 1. `useCardHolderValidation`

**카드 소유자 이름의 유효성을 검증하는 훅입니다.**

#### 반환 값

- cardHolderValidation: 다음의 객체 구조를 가집니다.
  - errorMessage: 입력 필드별 오류 메시지를 담고 있습니다.
  - isError: 입력 필드가 오류 상태인지를 boolean 값으로 표시합니다.

#### cardHolderValidateHandler 인자

- `value` (string): 사용자 입력값.
- `name` (CardHolderName): 입력 필드의 이름, 이 경우에는 'cardHolder'.

#### 사용법

```jsx
import { useCardHolderValidation } from "your-custom-hooks-package-name";

function Component() {
  const { cardHolderValidation, cardHolderValidateHandler } =
    useCardHolderValidation();

  return (
    <input
      type="text"
      onChange={(e) => cardHolderValidateHandler(e.target.value, "cardHolder")}
      placeholder="Card Holder Name"
    />
  );
}
```

### 2. `useCardNumberValidation`

**카드 번호의 각 부분을 검증하는 훅입니다.**

#### 반환 값

- cardNumberValidation: 다음의 객체 구조를 가집니다.
  - errorMessage: : 각 카드 번호 부분(cardNumber1, cardNumber2, cardNumber3, cardNumber4) 오류 메시지를 담고 있습니다.
  - isError: : 각 카드 번호 부분(cardNumber1, cardNumber2, cardNumber3, cardNumber4) 오류 상태인지를 boolean 값으로 표시합니다.

#### 인자

- `value` (string): 사용자 입력값.
- `name` (CardNumberName): 각 카드 번호 부분의 이름 (cardNumber1, cardNumber2, cardNumber3, cardNumber4).

#### 사용법

```jsx
import { useCardNumberValidation } from "your-custom-hooks-package-name";

function Component() {
  const { cardNumberValidation, cardNumberValidateHandler } =
    useCardNumberValidation();

  return (
    <>
      {["cardNumber1", "cardNumber2", "cardNumber3", "cardNumber4"].map(
        (name, index) => (
          <input
            key={index}
            type="text"
            onChange={(e) => cardNumberValidateHandler(e.target.value, name)}
            placeholder={`Card Number Part ${index + 1}`}
          />
        )
      )}
    </>
  );
}
```

### 3. `usePasswordValidation`

**비밀번호의 유효성을 검사하는 훅입니다.**

#### 반환 값

- passwordValidation: 다음의 객체 구조를 가집니다.
  - errorMessage: 입력 필드별 오류 메시지를 담고 있습니다.
  - isError: 입력 필드가 오류 상태인지를 boolean 값으로 표시합니다.

#### passwordValidateHandler 인자

- `value` (string): 사용자 입력값.
- `name` (passwordName): 입력 필드의 이름, 이 경우에는 'password'.

#### 사용법

```jsx
import { usePasswordValidation } from "your-custom-hooks-package-name";

function Component() {
  const { passwordValidation, passwordValidateHandler } =
    usePasswordValidation();

  return (
    <input
      type="password"
      onChange={(e) => passwordValidateHandler(e.target.value, "password")}
      placeholder="Password"
    />
  );
}
```

### 4. `useCVCValidation`

**카드 CVC 번호의 유효성을 검사하는 훅입니다.**

#### 반환 값

- CVCValidation: 다음의 객체 구조를 가집니다.
  - errorMessage: 입력 필드별 오류 메시지를 담고 있습니다.
  - isError: 입력 필드가 오류 상태인지를 boolean 값으로 표시합니다.

#### CVCValidateHandler 인자

- `value` (string): 사용자 입력값.
- `name` (CardCVCName): 입력 필드의 이름, 이 경우에는 'CVC'.

#### 사용법

```jsx
import { useCVCValidation } from "your-custom-hooks-package-name";

function Component() {
  const { CVCValidation, CVCValidateHandler } = useCVCValidation();

  return (
    <input
      type="text"
      onChange={(e) => CVCValidateHandler(e.target.value, "CVC")}
      placeholder="CVC"
    />
  );
}
```

### 5. `useExpiryDateValidation`

**카드 만료 날짜의 유효성을 검사하는 훅입니다.**

#### 반환 값

- expiryDateValidation: 다음의 객체 구조를 가집니다.
  - errorMessage: 입력 필드별 오류 메시지를 담고 있습니다.
  - isError: 입력 필드가 오류 상태인지를 boolean 값으로 표시합니다.

#### expiryDateValidateHandler 인자

- `value` (string): 사용자 입력값.
- `name` (CardExpiryName): 'month' 또는 'year' 중 하나.

#### 사용법

```jsx
import { useExpiryDateValidation } from "your-custom-hooks-package-name";

function Component() {
  const { expiryDateValidation, expiryDateValidateHandler } =
    useExpiryDateValidation();

  return (
    <>
      <input
        type="text"
        onChange={(e) => expiryDateValidateHandler(e.target.value, "month")}
        placeholder="MM"
      />
      <input
        type="text"
        onChange={(e) => expiryDateValidateHandler(e.target.value, "year")}
        placeholder="YY"
      />
    </>
  );
}
```

### 6. `useCardType`

**카드 유형을 식별하는 훅입니다.**

#### 반환값

cardType : cardType을 string 으로 제공합니다.

- Visa : 카드 번호가 4로 시작 할 경우.
- MasterCard : 카드 번호가 51~55 로 시작 할 경우.
- Empty : 그 외.

cardTypeHandler

#### cardTypeHandler 인자

- `value` (string): 첫 번째 카드 번호 부분.
- `name` (CardNumberName): 이 훅에서는 주로 'cardNumber1'가 사용됩니다.

#### 사용법

```jsx
import { useCardType } from "your-custom-hooks-package-name";

function Component() {
  const { cardType, cardTypeHandler } = useCardType();

  return (
    <input
      type="text"
      onChange={(e) => cardTypeHandler(e.target.value, "cardNumber1")}
      placeholder="Enter first part of card number"
    />
  );
}
```

## 스타일링

이 훅들은 기본적인 HTML 요소와 함께 사용할 수 있으며, 필요에 따라 추가적인 스타일링을 적용할 수 있습니다. 사용법에 따라 스타일을 커스터마이즈하고, 보다 사용자 친화적인 인터페이스를 구현하세요.

---

## Hooks 요구사항

값 변경, 에러 변경, validation ,동적 렌더링

- [x] useCardHolderValidation

  - 카드 소유자 이름에 대한 유효성 검사 로직
  - [x] cardHolder 는 영대문자여야 한다.
  - [x] cardHolder 에는 공백이 2번 이상 입력되면 안된다.
  - [x] cardHolder 에는 공백으로 시작하거나 끝나면 안된다.

- [x] useCardNumberValidation

  - [x] 카드 번호에는 숫자만 입력되어야 한다.
  - [x] 카드 번호는 공백으로 시작하거나 끝나면 안된다.
  - [x] 카드 번호는 4자리여야 한다.

- [x] useCardPasswordValidation

  - [x] 카드 비밀번호에는 숫자만 입력되어야 한다.
  - [x] 카드 비밀번호는 공백으로 시작하거나 끝나면 안된다.
  - [x] 카드 비밀번호는 2자리여야 한다.

- [x] useCVCValidation

  - [x] CVC에는 숫자만 입력되어야 한다.
  - [x] CVC는 공백으로 시작하거나 끝나면 안된다.
  - [x] CVC는 3자여야 한다.

- [x] useExpiryDateValidation

  - [x] 카드 만료기간에는 숫자만 입력되어야 한다.
  - [x] 카드 만료기간는 공백으로 시작하거나 끝나면 안된다.
  - [x] 카드 만료기간의 월 에는 1~12 사이의 값이 입력되어야 한다.
  - [x] 카드 만료기간의 년도 에는 0~99 사이의 값이 입력되어야 한다.

- [x] useCardType
  - [x] 카드 번호가 51~55 로 시작하면 카드타입이 MasterCard 가 되어야 한다.
  - [x] 카드 번호가 4 로 시작하면 카드타입이 Visa 가 되어야 한다.
  - [x] 카드 번호가 위 경우가 아닐경우 카드타입이 Empty 가 되어야 한다.
