# Hooks Module

> A library of Custom Hooks for React to validate payment card information.

# installation

```bash
npm install @jaymyong66/payments-hooks
```

# Hooks spec

## useCardNumber

> Returns the validated number of the payment card, formatted and card brand. This input accepts only numeric input to validate the total card number. The length of the total card number input is dynamically changed based on the card brand.

### Simple Example

```tsx
const SimpleComponent = () => {
    const { cardNumbers, cardBrand, cardNumberError, handleChangeCardNumber } = useCardNumber();

    return (
        <h1>Card Numbers</h1>
        <input value={cardNumbers} onChange={(e) => handleChangeCardNumber(e.target.value)} />
        <div>{cardNumberError.errorMessage}</div>
    )
}
```

> 💡 If the input to this hook is non-numeric, it is not entered and cardNumberError's isError = true, errorMessage is returned.

If you want to show the user a formatted card number from the value of the input tag, you can call the 'formattingValue' function to apply it.

```tsx
const SimpleComponent = () => {
    const { cardNumbers, cardBrand, cardNumberError, handleChangeCardNumber } = useCardNumber();

    return (
        <h1>Card Numbers</h1>
        <input value={formattingValue(cardNumbers)} onChange={(e) => handleChangeCardNumber(e.target.value)} />
        <div>{cardNumberError.errorMessage}</div>
    )
}
```

### Return Value

| Return Value                                                          | type     | description                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `{ cardNumbers, cardBrand, cardNumberError, handleChangeCardNumber }` | `object` | Contains the Card number formatted according to card brand (`number[]`), card brand (`string`) , card number error (`{errorConditions: boolean[], errorMessage: string}`) state, and a handler (`(cardIndex: number, value: string) => void`) to change the card number. |

If the card number starts with '36', cardNumbers will be returned in the form ['3600','000000','0000'], which is the card number of DINERS.

The following brands are supported for card brand identification and formatting.

| Card Brand | Card identification rules                                                                                                                                                                                                              | Example Return Values                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| VISA       | `the first digit of the card number starts with '4'`                                                                                                                                                                                   | cardNumbers : ['4000','0000','0000','0000'], cardBrand : 'VISA'    |
| MASTER     | `both digits of the card number start with a number between '51' and '55'`                                                                                                                                                             | cardNumbers : ['5100','0000','0000','0000'], cardBrand : 'MASTER'  |
| DINERS     | `If both digits of the card number start with '36'`                                                                                                                                                                                    | cardNumbers : ['3600','000000','0000'], cardBrand : 'DINERS'       |
| AMEX       | `If two digits of the card number start with '34' or '37'`                                                                                                                                                                             | cardNumbers : ['3400','000000','00000'], cardBrand : 'AMEX'        |
| UNION      | `Six digits of the card number start with a number between 622126 and 622925, or three digits of the card number begin with a number between 624 and 626, orfour digits of the card number start with a number between 6282 and 6288.` | cardNumbers : ['6221','2600','0000','0000'], cardBrand : 'UNION'   |
| Default    | `default`                                                                                                                                                                                                                              | cardNumbers : ['0000','0000','0000','0000'], cardBrand : 'DEFAULT' |

---

## useExpiration

> Return validated Card Expiration Date based on the current month. It takes a two-digit month consisting of January through December and a two-digit year. Also can only accept numeric input.

### Simple Example

```tsx
const SimpleComponent = () => {
    const { expiration, expirationError, handleChangeExpiration } = useExpiration();

    return (
        <h1>Card Expiration</h1>
        <input value={expiration.month} onChange={(e) => handleChangeExpiration('month', e.target.value)} />
        <input value={expiration.year} onChange={(e) => handleChangeExpiration('year', e.target.value)} />
        <div>{expirationError.errorMessage}</div>
    )
}
```

> 💡 If the input for that hook is non-numeric, it is not entered and expirationError's isError = true, errorMessage is returned.
> Additionally, if the card expiration is not valid, expirationError is returned.

### Return Value

| Return Value                                              | type     | description                                                                                                                                                       |
| --------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | 
| `{ expiration, expirationError, handleChangeExpiration }` | `object` | Contains the expiration (`{year : string; month : string;}`), expiration error (`{isError: boolean, errorMessage: string}`) state, and a handler (`(field: 'year' | 'month', value: string) => void`) to change the card number. |

---

## useOwnerName

> Return validated Card Owner Name for the payment card. It takes a name of up to 20 characters. Also can only accept English capital letters.

### Simple Example

```tsx
const SimpleComponent = () => {
    const { ownerName, ownerNameError, handleChangeOwnerName } = useOwnerName();

    return (
        <h1>Card Owner Name</h1>
        <input value={ownerName} onChange={(e) => handleChangeOwnerName(e.target.value)} />
        <div>{ownerNameError.errorMessage}</div>
    )
}
```

> 💡 The input value for this hook can only be in upper case English letters, and will be automatically capitalized when lower case letters are entered. If an invalid value is entered, it will not be entered and ownerNameError will be returned.

### Return Value

| Return Value                                           | type     | description                                                                                                                                                   |
| ------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{ ownerName, ownerNameError, handleChangeOwnerName }` | `object` | Contains owner Name(`string`), ownerNameError(`{isError : boolean; errorMessage : string;}`), and handleChangeOwnerName(`(value : string) => void`) function. |

---

## useCVCNumber

> Return validated CVC Number for the payment card. It takes a consisting of three-digit number. Also can only accept numeric input.

### Simple Example

```tsx
const SimpleComponent = () => {
    const { cvcNumber, cvcError, handleChangeCVCNumber } = useCVCNumber();

    return (
      <h1>Card CVC</h1>
      <input value={cvcNumber} onChange={(e) => handleChangeCVCNumber(e.target.value)} />
      <div>{cvcError.errorMessage}</div>
    )
}
```

> 💡 If the input for that hook is non-numeric, it is not entered and expirationError's isError = true, errorMessage is returned.

### Return Value

| Return Value                                           | type     | description                                                                                                                                                      |
| ------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{ cvcNumber, cvcNumberError, handleChangeCVCNumber }` | `object` | Contains cvc nuember(`string`), cvc number error(`{isError : boolean; errorMessage : string;}`), and handleChangeCVCNumber(`(value : string) => void`) function. |

---

## useCardPassword

It takes a consisting of three-digit number.twoAlso can only accept numeric input.> Return validated Card Password for the payment card. It takes a name of up to 20 characters. Also can only accept English capital letters.

### Simple Example

```tsx
const SimpleComponent = () => {
    const { cardPassword, cardPasswordError, handleChangeCardPassword } = useCardPassword();

    return (
      <h1>Card Password</h1>
      <input value={cardPassword} onChange={(e) => handleChangeCardPassword(e.target.value)} />
      <div>{cardPasswordError.errorMessage}</div>
    )
}
```

> 💡 If the input for that hook is non-numeric, it is not entered and expirationError's isError = true, errorMessage is returned.

### Return Value

| Return Value                                                    | type     | description                                                                                                                                                              |
| --------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `{ cardPassword, cardPasswordError, handleChangeCardPassword }` | `object` | Contains card password(`string`), card password error(`{isError : boolean; errorMessage : string;}`), and handleChangeCardPassword(`(value : string) => void`) function. |

---

# util Functions

## formattingValue

The formattingValue function formats the return value of the useCardNumber hook, `cardNumbers: string[]`, as '-'.

### Simple Example

```tsx
import { useCardNumber, formattingValue } from '@jaymyong66/payments-hooks';

function SimpleComponent() {
  const { cardNumbers, cardNumberError, handleChangeCardNumber } = useCardNumber();
  return (
    <>
      <h1>Card Numbers</h1>
      <input value={formattingValue(cardNumbers)} onChange={(e) => handleChangeCardNumber(e.target.value)} />
    </>
  );
}
```

### Return Value

| Return Value       | type     | description                                                                 |
| ------------------ | -------- | --------------------------------------------------------------------------- |
| `joinedCardNumber` | `string` | Returns joinedCardNumber, the argument `cardNumbers:string[]` joined by '-' |
