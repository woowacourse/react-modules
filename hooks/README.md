# Hooks Module

> A library of Custom Hooks for React to validate payment card information.

# installation

```bash
npm install @jaymyong66/payments-hooks
```

# Hooks spec

## useCardNumber

> Return validated the number on the payment card. It takes an array of four-digit \* four inputs and validates a total of 16 numbers. Also can only accept numeric input.

### Simple Example

```tsx
const SimpleComponent = () => {
    const { cardNumbers, cardNumberError, handleChangeCardNumber } = useCardNumber();

    return (
        <h1>Card Numbers</h1>
        <input value={cardNumbers[0]} onChange={(e) => handleChangeCardNumber(0, e.target.value)} />
        <input value={cardNumbers[1]} onChange={(e) => handleChangeCardNumber(1, e.target.value)} />
        <input value={cardNumbers[2]} onChange={(e) => handleChangeCardNumber(2, e.target.value)} />
        <input value={cardNumbers[3]} onChange={(e) => handleChangeCardNumber(3, e.target.value)} />
        <div>{cardNumberError.errorMessage}</div>
    )
}
```

### Return Value

| Return Value                                               | type     | description                                                                                                                                                                                                    |
| ---------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{ cardNumbers, cardNumberError, handleChangeCardNumber }` | `object` | Contains the card number (`number[]`), card number error (`{errorConditions: boolean[], errorMessage: string}`) state, and a handler (`(cardIndex: number, value: string) => void`) to change the card number. |

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

### Return Value

| Return Value | type | description |
| ------------ | ---- | ----------- |
| `{ expiration, expirationError, handleChangeExpiration }` | `object` | Contains the expiration (`{year : string; month : string;}`), expiration error (`{isError: boolean, errorMessage: string}`) state, and a handler (`(field: 'year' | 'month', value: string) => void`) to change the card number. |  

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

### Return Value

| Return Value                                           | type     | description                                                                                                                                                   |
| ------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{ ownerName, ownerNameError, handleChangeOwnerName }` | `object` | Contains owner Name(`string`), ownerNameError(`{isError : boolean; errorMessage : string;}`), and handleChangeOwnerName(`(value : string) => void`) function. |

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

### Return Value

| Return Value                                           | type     | description                                                                                                                                                      |
| ------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{ cvcNumber, cvcNumberError, handleChangeCVCNumber }` | `object` | Contains cvc nuember(`string`), cvc number error(`{isError : boolean; errorMessage : string;}`), and handleChangeCVCNumber(`(value : string) => void`) function. |

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

### Return Value

| Return Value                                                    | type     | description                                                                                                                                                              |
| --------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `{ cardPassword, cardPasswordError, handleChangeCardPassword }` | `object` | Contains card password(`string`), card password error(`{isError : boolean; errorMessage : string;}`), and handleChangeCardPassword(`(value : string) => void`) function. |
