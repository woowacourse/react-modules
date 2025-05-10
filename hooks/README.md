# 💳 useCardFormHooks

Reusable React custom hooks for building validated credit card forms. Supports card number, expiration date, and CVC input with automatic brand detection and validation.

## ✨ Features

💡 Modular hooks for card number, expiration date, and CVC
✅ Built-in validation and error message handling
🧠 Automatic card brand detection (Visa, Master, AMEX, Diners, UnionPay)
⚛️ React state integration for controlled components

## 🚀 Usage - example

```tsx
import { useCardNumber, useExpirationDate, useCardCVC } from 'use-card-form-hooks';

const CardForm = () => {
  const {
    cardNumber,
    setCardNumber,
    handleCardNumber,
    isValid: numberValid,
    errorMessage: numberError,
    cardBrand,
  } = useCardNumber();
  const { expirationDate, handleExpirationDate, isValid: dateValid, errorMessage: dateError } = useExpirationDate();
  const { cardCVC, setCardCVC, handleCVCValidate, isValid: cvcValid, errorMessage: cvcError } = useCardCVC();

  return (
    <>
      <input value={cardNumber.input1} onChange={(e) => handleCardNumber({ ...cardNumber, input1: e.target.value })} />
      <input
        value={expirationDate.month}
        onChange={(e) => handleExpirationDate({ ...expirationDate, month: e.target.value })}
      />
      <input
        value={cardCVC}
        onChange={(e) => {
          setCardCVC(e.target.value);
          handleCVCValidate(e.target.value);
        }}
      />
      <p>Card brand: {cardBrand}</p>
    </>
  );
};
```

## 🧩 Hook APIs

### useCardNumber()

Manages state and validation for a 4-field credit card number input.

| Key                | Description                            |
| ------------------ | -------------------------------------- |
| `cardNumber`       | Object of 4 inputs (`input1`–`input4`) |
| `setCardNumber`    | State setter function                  |
| `handleCardNumber` | Validates and updates number           |
| `isValid`          | Per-input validity object              |
| `errorMessage`     | Latest validation error message        |
| `cardBrand`        | Detected card brand (e.g., 'Visa')     |

### useExpirationDate()

Handles expiration date validation for month/year inputs.

| Key                    | Description                         |
| ---------------------- | ----------------------------------- |
| `expirationDate`       | Object with `month` and `year`      |
| `handleExpirationDate` | Updates + validates date            |
| `isValid`              | `{ month: boolean, year: boolean }` |
| `errorMessage`         | Validation message                  |

### useCardCVC()

Validates 3-digit CVC values.

| Key                 | Description             |
| ------------------- | ----------------------- |
| `cardCVC`           | Current CVC input       |
| `setCardCVC`        | State setter            |
| `handleCVCValidate` | Validation trigger      |
| `isValid`           | Boolean                 |
| `errorMessage`      | Validation error string |

## 🔍 Validation Rules

### Card Number

- 4 input fields: input1 to input4
- Brand-specific digit length and format checks:
  - Visa/Master: 4-4-4-4
  - AMEX: 4-6-5
  - Diners: 4-6-4
  - UnionPay supported with range matching

### Expiration Date

- 2-digit month (01–12)
- 2-digit year (current or future)
- Date must be valid (not expired)

### CVC

- Must be a 3-digit number

## Card Brand Detection

Card brand is inferred from the first few digits using IIN ranges.

Supported brands:

- Visa (4)
- MasterCard (51–55)
- AMEX (34, 37)
- Diners Club (36)
- UnionPay (62, or valid 6/3/4-digit ranges)
- etc: Unknown

# 🛠 Utils

All validations are exposed internally. You can customize or override the logic by modifying:

- validateCardNumber(cardNumbers)
- validateExpirationDate({ month, year })
- validateCVC({ input, setIsValid, setErrorMessage })
- matchCardBrand(input1, input2)

# 📦 Installation

```bash
npm install use-card-form-hooks
```

```bash
yarn add use-card-form-hooks
```
