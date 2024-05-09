# Hooks Module

> A library of Custom Hooks for React to validate payment card information.

# installation

```bash
npm install @jinyyy/react-payments
```

# Hooks spec

## useCardNumber

> Returns a formatted value with the card company(amex, diners, visa, master, union pay) rules applied through validation.

### Simple Example

```tsx
const SimpleComponent = () => {
  const { cardNumbers, cardNumberError, handleChangeCardNumber } = useCardNumber();

  return (
    <>
      <h1>Card Numbers</h1>
      <input value={cardNumbers.join(' ')} onChange={(e) => handleChangeCardNumber(e.target.value.replace(/ /g, ''))} />
      <div>{cardNumberError.errorMessage}</div>
    </>
  );
};
```

### Return Value

| Return Value                                               | Type     | Description                                                                              |
| ---------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------- |
| `{ cardNumbers, cardNumberError, handleChangeCardNumber }` | `object` | Contains the card numbers (`string[]`), card number error state, and a handler function. |

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

| Return Value                                              | Type     | Description                                                                                   |
| --------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `{ expiration, expirationError, handleChangeExpiration }` | `object` | Contains the expiration date, expiration error state, and a handler to change the expiration. |

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

| Return Value                                          | Type     | Description                                                     |
| ----------------------------------------------------- | -------- | --------------------------------------------------------------- |
| `{ ownerName, ownerNameError, handleChangeOwnerName}` | `object` | Contains the owner's name, error state, and a handler function. |

## useCVCNumber

Also can only accept numeric input.> Return validated CVC Number for the payment card. It takes a consisting of three-digit number.

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

| Return Value                                     | Type     | Description                                                   |
| ------------------------------------------------ | -------- | ------------------------------------------------------------- |
| `{ cvcNumber, cvcError, handleChangeCVCNumber }` | `object` | Contains the CVC number, error state, and a handler function. |

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

| Return Value                                                    | Type     | Description                                                      |
| --------------------------------------------------------------- | -------- | ---------------------------------------------------------------- |
| `{ cardPassword, cardPasswordError, handleChangeCardPassword }` | `object` | Contains the card password, error state, and a handler function. |
