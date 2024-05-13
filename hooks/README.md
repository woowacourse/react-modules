# river-payments-validation-hooks

## Install

이 라이브러리를 사용하기 위해서는 다음 패키지를 설치해야 합니다

```bash
npm install river-payments-validation-hooks
```

## Usage

React 컴포넌트에서 payments validation 라이브러리를 사용하려면 다음 단계를 따르세요

```jsx
import {
  useCVC,
  useCardHolder,
  useCardIssuer,
  useCardNumber,
  useExpiryDate,
  usePassword,
} from "river-payments-validation-hooks";

function App() {
  const { cardHolder, handleCardHolderChange, validateCardHolder } = useCardHolder();
  const { password, handlePasswordChange, validatePassword } = usePassword();
  const { CVC, handleCVCChange, validateCVC } = useCVC();
  const { expiryDate, handleExpiryDateChange, validateExpiryDate } = useExpiryDate();
  const { cardNumbers, handleCardNumberChange, cardNumbersValidation, cardIdentifier } =
    useCardNumber();
  const { cardIssuer, handleCardIssuerChange, validateCardIssuer } = useCardIssuer();

  return (
    <>
      {/* Card Holder Input */}
      <div>
        <label htmlFor="cardHolder">Card Holder:</label>
        <input
          type="text"
          id="cardHolder"
          value={cardHolder}
          onChange={(e) => handleCardHolderChange(e.target.value)}
        />
        {!validateCardHolder(cardHolder).isValid && (
          <span style={{ color: "red" }}>{validateCardHolder(cardHolder).errorMessage}</span>
        )}
      </div>

      {/* Card Password Input */}
      <div>
        <label htmlFor="cardPassword">Card Password:</label>
        <input
          type="text"
          id="cardPassword"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        {!validatePassword(password).isValid && (
          <span style={{ color: "red" }}>{validatePassword(password).errorMessage}</span>
        )}
      </div>

      {/* Card CVC Input */}
      <div>
        <label htmlFor="cardCVC">Card CVC:</label>
        <input
          type="text"
          id="cardCVC"
          value={CVC}
          onChange={(e) => handleCVCChange(e.target.value)}
        />
        {!validateCVC(CVC).isValid && (
          <span style={{ color: "red" }}>{validateCVC(CVC).errorMessage}</span>
        )}
      </div>

      {/* Card Expiry Date Input */}
      <div>
        <label htmlFor="cardExpiryDate">Card Expiry Date:</label>
        <input
          type="text"
          id="cardExpiryDateMonth"
          value={expiryDate.month}
          onChange={(e) => handleExpiryDateChange("month", e.target.value)}
        />
        <input
          type="text"
          id="cardExpiryDateYear"
          value={expiryDate.year}
          onChange={(e) => handleExpiryDateChange("year", e.target.value)}
        />
        {!validateExpiryDate(expiryDate).isValid && (
          <span style={{ color: "red" }}>{validateExpiryDate(expiryDate).errorMessage}</span>
        )}
      </div>

      {/* Card Number Input */}
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumbers}
          onChange={(e) => handleCardNumberChange(e.target.value)}
        />
        {!cardNumbersValidation(cardNumbers).isValid && (
          <span style={{ color: "red" }}>{cardNumbersValidation(cardNumbers).errorMessage}</span>
        )}
      </div>

      {/* Card Issuer Input */}
      <div>
        <label htmlFor="cardIssuer">Card Issuer:</label>
        <input
          type="text"
          id="cardIssuer"
          value={cardIssuer}
          onChange={(e) => handleCardIssuerChange(e.target.value)}
        />
        {!validateCardIssuer(cardIssuer).isValid && (
          <span style={{ color: "red" }}>{validateCardIssuer(cardIssuer).errorMessage}</span>
        )}
      </div>
    </>
  );
}

export default App;
```

## API

각 훅은 다음과 같은 값을 반환합니다:

- 첫 번째 값: 해당 필드의 현재 값을 나타내는 문자열 또는 객체입니다.
- 두 번째 값: 해당 필드의 값을 업데이트하는 함수입니다.
- 세 번째 값: 해당 필드의 유효성 검사 결과를 반환하는 함수입니다. 이 함수는 다음과 같은 객체를 반환합니다:
  - `isValid`: 필드의 값이 유효한지 여부를 나타내는 boolean 값입니다.
  - `errorMessage`: 유효성 검사에 실패한 경우 표시할 에러 메시지입니다.

### useCardHolder

| 반환값                   | 설명                                                          |
| ------------------------ | ------------------------------------------------------------- |
| `cardHolder`             | 카드 소유자 이름 값을 나타내는 문자열입니다.                  |
| `handleCardHolderChange` | 카드 소유자 이름 값을 업데이트하는 함수입니다.                |
| `validateCardHolder`     | 카드 소유자 이름 값의 유효성 검사 결과를 반환하는 함수입니다. |

### usePassword

| 반환값                 | 설명                                                  |
| ---------------------- | ----------------------------------------------------- |
| `password`             | 비밀번호 값을 나타내는 문자열입니다.                  |
| `handlePasswordChange` | 비밀번호 값을 업데이트하는 함수입니다.                |
| `validatePassword`     | 비밀번호 값의 유효성 검사 결과를 반환하는 함수입니다. |

### useCVC

| 반환값            | 설명                                                  |
| ----------------- | ----------------------------------------------------- |
| `CVC`             | 카드 CVC 값을 나타내는 문자열입니다.                  |
| `handleCVCChange` | 카드 CVC 값을 업데이트하는 함수입니다.                |
| `validateCVC`     | 카드 CVC 값의 유효성 검사 결과를 반환하는 함수입니다. |

### useExpiryDate

| 반환값                   | 설명                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `expiryDate`             | 만료 일자 값을 나타내는 객체입니다. `month`와 `year` 속성을 가집니다.                        |
| `handleExpiryDateChange` | 만료 일자 값을 업데이트하는 함수입니다. `"month"` 또는 `"year"` 옵션과 값을 인자로 받습니다. |
| `validateExpiryDate`     | 만료 일자 값의 유효성 검사 결과를 반환하는 함수입니다.                                       |

### useCardNumber

| 반환값                   | 설명                                                    |
| ------------------------ | ------------------------------------------------------- |
| `cardNumbers`            | 카드 번호 값을 나타내는 문자열입니다.                   |
| `handleCardNumberChange` | 카드 번호 값을 업데이트하는 함수입니다.                 |
| `cardNumbersValidation`  | 카드 번호 값의 유효성 검사 결과를 반환하는 함수입니다.  |
| `cardIdentifier`         | 카드 종류를 식별한 결과를 나타내는 문자열입니다. (옵션) |

`useCardNumber` 훅은 다음과 같은 옵션 객체를 인자로 받을 수 있습니다:

- `useNumberFormatting`: 카드 번호 포맷팅 기능을 사용할지 여부를 나타내는 boolean 값입니다. 기본값은 `true`입니다.
- `useCardIdentifier`: 카드 종류 식별 기능을 사용할지 여부를 나타내는 boolean 값입니다. 기본값은 `true`입니다.

### useCardIssuer

| 반환값                   | 설명                                                     |
| ------------------------ | -------------------------------------------------------- |
| `cardIssuer`             | 카드 발급사 값을 나타내는 문자열입니다.                  |
| `handleCardIssuerChange` | 카드 발급사 값을 업데이트하는 함수입니다.                |
| `validateCardIssuer`     | 카드 발급사 값의 유효성 검사 결과를 반환하는 함수입니다. |

이 훅들을 사용하여 React 컴포넌트에서 payments validation을 쉽게 구현할 수 있습니다. 각 훅은 해당 필드의 값과 유효성 검사 결과를 반환하므로, 이를 활용하여 사용자 입력을 처리하고 에러 메시지를 표시할 수 있습니다.
