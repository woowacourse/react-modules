# Custom Hooks for Form Validation 사용 가이드

이 패키지는 카드 폼 입력값에 대한 유효성 검사를 위한 여러 가지 커스텀 React 훅을 제공합니다.

## 설치

```bash
npm install chico-card-custom-hooks
```

## 훅 목록 및 설명

### 1. `useCardHolderValidation`

**카드 소유자 이름의 유효성을 검증하는 훅입니다.**

#### 반환 값

- cardHolderValidation: 다음의 객체 구조를 가집니다.
  - errorMessage: 사용자 이름 오류 메시지를 담고 있습니다. 기본값은 ''입니다.
  - isError: 입력 필드가 오류 상태인지를 boolean 값으로 표시합니다. 기본값은 false입니다.
- cardHolderValidateHandler : value : string을 입력해 cardHolderValidateHandler 업데이트하는 함수입니다. 최신화된 cardHolderValidation 반환합니다.

#### cardHolderValidateHandler 인자

- `value` (string): 사용자 입력값.

#### 사용법

```jsx
import { useCardHolderValidation } from "your-custom-hooks-package-name";

function Component() {
  const { cardHolderValidation, cardHolderValidateHandler } =
    useCardHolderValidation();

  return (
    <input
      type="text"
      onChange={(e) => cardHolderValidateHandler(e.target.value)}
      placeholder="Card Holder Name"
    />
  );
}
```

### 2. `useCardNumberValidation`

**카드 번호의 각 부분을 검증하는 훅입니다.**

#### 반환 값

- cardNumberValidation: 다음의 객체 구조를 가집니다.
  - errorMessage: : 카드 번호의 오류 메시지를 담고 있습니다.
  - isError: : 카드 번호가 오류 상태인지를 boolean 값으로 표시합니다.
- cardNumberValidateHandler : value : string을 입력해 cardNumberValidateHandler 업데이트하는 함수입니다. 최신화된 cardNumberValidation 반환합니다.
#### cardNumberValidateHandler 인자

- `value` (string): 사용자 입력값
- `cardType` (string) : 카드 타입

#### 사용법

```jsx
import { useCardNumberValidation } from "your-custom-hooks-package-name";

function Component() {
  const { cardNumberValidation, cardNumberValidateHandler } =
    useCardNumberValidation();

  return (
      <input
        type="text"
        onChange={(e) => cardNumberValidateHandler(e.target.value)}
        placeholder={`Card Number Part`}
      />
  );
}
```

### 3. `usePasswordValidation`

**비밀번호의 유효성을 검사하는 훅입니다.**

#### 반환 값

- passwordValidation: 다음의 객체 구조를 가집니다.
  - errorMessage: 입력값의 오류 메시지를 담고 있습니다.
  - isError: 입력값이 오류 상태인지를 boolean 값으로 표시합니다.
- passwordValidateHandler : value : string을 입력해 passwordValidation을 업데이트하는 함수입니다. 최신화된 passwordValidation을 반환합니다.

#### passwordValidateHandler 인자

- `value` (string): 사용자 입력값.

#### 사용법

```jsx
import { usePasswordValidation } from "your-custom-hooks-package-name";

function Component() {
  const { passwordValidation, passwordValidateHandler } =
    usePasswordValidation();

  return (
    <input
      type="password"
      onChange={(e) => passwordValidateHandler(e.target.value)}
      placeholder="Password"
    />
  );
}
```

### 4. `useCVCValidation`

**카드 CVC 번호의 유효성을 검사하는 훅입니다.**

#### 반환 값

- CVCValidation: 다음의 객체 구조를 가집니다.
  - errorMessage: 입력값에 대한 오류 메시지를 담고 있습니다.
  - isError: 입력값이 오류 상태인지를 boolean 값으로 표시합니다.
- CVCValidateHandler: value : string을 입력해 CVCValidation를 업데이트 하는 함수입니다. 최신화된 CVCValidation 반환합니다.
#### CVCValidateHandler 인자

- `value` (string): 사용자 입력값.

#### 사용법

```jsx
import { useCVCValidation } from "your-custom-hooks-package-name";

function Component() {
  const { CVCValidation, CVCValidateHandler } = useCVCValidation();

  return (
    <input
      type="text"
      onChange={(e) => CVCValidateHandler(e.target.value)}
      placeholder="CVC"
    />
  );
}
```

### 5. `useExpiryDateValidation`

**카드 만료 날짜의 유효성을 검사하는 훅입니다.**

#### 반환 값

- expiryDateValidation: 다음의 객체 구조를 가집니다.
  - errorMessage
    - month : 입력값에 대한 에러메세지를 담고 있습니다.
    - year : 입력값에 대한 에러메세지를 담고 있습니다.
  - isError
    - month : 입력값이 오류 상태인지를 boolean 값으로 표시합니다.
    - year : 입력값이 오류 상태인지를 boolean 값으로 표시합니다.
- expiryDateValidateHandler : value : string과 name : 'month' | 'year'을 인자로 받아 유효일자를 업데이트하는 함수입니다. 최신화된 expiryDateValidation 반환합니다.

#### expiryDateValidateHandler 인자

- `value` (string): 사용자 입력값.

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

- cardType: 현재 식별된 카드 유형과 해당 유형의 최대 길이를 포함하는 객체입니다.
  - name: 식별된 카드 유형의 이름 ('Visa', 'MasterCard', 'AMEX', 'Diners', 'UnionPay', 'Empty').
  - maxLength: 식별된 카드 유형에 따라 정의된 카드 번호의 최대 길이입니다.
- formatCardNumber: 현재 카드 유형에 맞게 입력된 카드 번호를 형식화하는 함수입니다. 이 함수는 카드 번호를 적절한 형식(예: 4자리-4자리-4자리-4자리)으로 나누어 표시합니다.
- cardTypeHandler : value : string을 받아 카드 타입을 업데이트하는 함수입니다. 

#### cardTypeHandler 인자

- `value` (string): 카드 번호

#### 사용법

```jsx
import useCardType from 'your-custom-hooks-package-name';

function CardInputComponent() {
  const { cardType, formatCardNumber, cardTypeHandler } = useCardType();

  const handleInputChange = (e) => {
    const formattedNumber = formatCardNumber(e.target.value);
    cardTypeHandler(formattedNumber);
    e.target.value = formattedNumber; // Update input with formatted number
  };

  return (
    <input
      type="text"
      onChange={handleInputChange}
      placeholder="Enter card number"
      maxLength={cardType.maxLength}
    />
  );
}

```

