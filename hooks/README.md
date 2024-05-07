# choco-payments-validation-hooks

## Install

이 라이브러리를 사용하기 위해서는 다음 패키지를 설치해야 합니다:

```bash
npm install choco-payments-validation-hooks
```

## Usage

React 컴포넌트에서 모달 라이브러리를 사용하려면 다음 단계를 따르세요

```jsx
import { useCVC } from "choco-payments-validation-hooks";

function App() {
  const [cardCVC, handleCardCVCChange, cardCVCValidation] = useCVC();

  return (
    <>
      <label htmlFor="cardCVC">Card CVC:</label>
      <input
        type="text"
        id="cardCVC"
        value={cardCVC}
        onChange={(e) => handleCardCVCChange(e.target.value)}
      />
      {!cardCVCValidation.isValid && (
        <span style={{ color: "red" }}>{cardCVCValidation.errorMessage}</span>
      )}
    </div>
  );
}

export default App;
```

## API

각 훅은 다음과 같은 값을 반환합니다:

- 첫 번째 값: 해당 필드의 현재 값을 나타내는 문자열 또는 객체입니다.
- 두 번째 값: 해당 필드의 값을 업데이트하는 함수입니다.
- 세 번째 값: 해당 필드의 유효성 검사 결과를 나타내는 객체입니다.
  - `isValid`: 필드의 값이 유효한지 여부를 나타내는 boolean 값입니다.
  - `errorMessage`: 유효성 검사에 실패한 경우 표시할 에러 메시지입니다.

### useCVC

| 반환값                | 설명                                                  |
| --------------------- | ----------------------------------------------------- |
| `cardCVC`             | 카드 CVC 값을 나타내는 문자열입니다.                  |
| `handleCardCVCChange` | 카드 CVC 값을 업데이트하는 함수입니다.                |
| `cardCVCValidation`   | 카드 CVC 값의 유효성 검사 결과를 나타내는 객체입니다. |

### useCardHolder

| 반환값                   | 설명                                                          |
| ------------------------ | ------------------------------------------------------------- |
| `cardHolder`             | 카드 소유자 이름 값을 나타내는 문자열입니다.                  |
| `handleCardHolderChange` | 카드 소유자 이름 값을 업데이트하는 함수입니다.                |
| `cardHolderValidation`   | 카드 소유자 이름 값의 유효성 검사 결과를 나타내는 객체입니다. |

### useCardIssuer

| 반환값                   | 설명                                                     |
| ------------------------ | -------------------------------------------------------- |
| `cardIssuer`             | 카드 발급사 값을 나타내는 문자열입니다.                  |
| `handleCardIssuerChange` | 카드 발급사 값을 업데이트하는 함수입니다.                |
| `cardIssuerValidation`   | 카드 발급사 값의 유효성 검사 결과를 나타내는 객체입니다. |

### useCardNumber

| 반환값                    | 설명                                                   |
| ------------------------- | ------------------------------------------------------ |
| `cardNumbers`             | 카드 번호 값을 나타내는 객체입니다.                    |
| `handleCardNumbersChange` | 카드 번호 값을 업데이트하는 함수입니다.                |
| `cardNumbersValidation`   | 카드 번호 값의 유효성 검사 결과를 나타내는 객체입니다. |

### useExpiryDate

| 반환값                   | 설명                                                   |
| ------------------------ | ------------------------------------------------------ |
| `expiryDate`             | 만료 일자 값을 나타내는 객체입니다.                    |
| `handleExpiryDateChange` | 만료 일자 값을 업데이트하는 함수입니다.                |
| `expiryDateValidation`   | 만료 일자 값의 유효성 검사 결과를 나타내는 객체입니다. |

### usePassword

| 반환값                 | 설명                                                  |
| ---------------------- | ----------------------------------------------------- |
| `password`             | 비밀번호 값을 나타내는 문자열입니다.                  |
| `handlePasswordChange` | 비밀번호 값을 업데이트하는 함수입니다.                |
| `passwordValidation`   | 비밀번호 값의 유효성 검사 결과를 나타내는 객체입니다. |

이 훅들을 사용하여 React 컴포넌트에서 payments validation을 쉽게 구현할 수 있습니다. 각 훅은 해당 필드의 값과 유효성 검사 결과를 반환하므로, 이를 활용하여 사용자 입력을 처리하고 에러 메시지를 표시할 수 있습니다.
