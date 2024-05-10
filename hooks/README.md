# Card Validation Hook for React

Card Validation Hook is a custom React hook designed to validate credit card inputs. It facilitates the validation process by checking if the input is valid, enhancing form validation in your React application.

## Installation

```
npm i ollie-card-validation-hooks
```

## Types

- `useCardCompany`: Verifies if the card company has been selected.
- `useCardCVC`: Checks if the CVC number satisfies the specified length.
- `useCardExpiration`: Validates if the card expiration date is valid.
- `useCardNumbers`: Verifies if the card number satisfies the specified length.
- `useCardPassword`: Checks if the password satisfies the specified length.
- `useCardUserName`: Validates if the user name is uppercased and within the specified length limit.

## Description

### card_Info Object

This object contains the current state of user input and the associated validation results.

- `card_`: The value of the name entered by the user. This value is directly input into the field.
- `isValid`: Indicates whether the input meets the validation conditions. It is true if all validations pass, and false otherwise.
- `errorMessage`: A list of error messages to display when validation fails. For example, if the input value is empty or does not meet the required length, an error message is added to this array.

### handleCard\_ Function

The handleCardUserName function handles changes in the user input field and validates the input value. This function takes the ChangeEvent that occurs in the input field as a parameter.

## Usage (With useCardCVC)

First, import useCardCVC into your component:
Then, you can use the useCardCVC hook inside your component like so:

```javascript
import useCardCVC from 'path/to/useCardCVC';

const MyComponent = () => {
  const cardCVCLength = 3; // Set the expected length of the CVC
  const { cardCVCInfo, handleCardCVC } = useCardCVC(cardCVCLength);

  return (
    <input
      type="text"
      onChange={handleCardCVC}
      placeholder="Enter CVC"
    />
    {cardCVCInfo.isValid ? null : <p>{cardCVCInfo.errorMessages.join(", ")}</p>}
  );
};
```

## Detailed Description of the useCardNumbers Hook
### Interface
```ts
interface CardNumberInfo {
  cardNumber: string | undefined;
  paymentCompany: string;
  isValid: boolean;
  maxLength: number;
  errorMessages: string[];
}
```
- `cardNumber`: The inputted card number. Formatted according to the rules of the respective company.
- `paymentCompany`: Indicates which company the card belongs to based on the card number.
- `isValid`: Indicates whether the card number is valid.
- `maxLength`: The maximum length allowed for the input element. Varies depending on the company.
- `errorMessages`: Array containing error messages for the card number.


### Company Types and Identification Rules
- VISA: 16-digit number starting with 4.
  - Example: 4082 4739 0391 3827
- MASTER: 16-digit number starting with 51 to 55.
  - Example: 5123 1234 2345 8421
- Diners: 14-digit number starting with 36.
  - Example: 3612 345678 9012
- AMEX: 15-digit number starting with 34 or 37.
  - Example (starting with 34): 3412 345678 90123
  - Example (starting with 37): 3712 345678 90123
- UnionPay: 16-digit number meeting one of the following conditions:
  - Starting with 622126 to 622925: 6221 2612 3456 7890
  - Starting with 624 to 626: 6240 1234 5678 9012
  - Starting with 6282 to 6288: 6282 1234 5678 9012


### Usage Example
```javascript
function App() {
  const { cardNumberInfo, onChangeCardNumbers } = useCardNumbers();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        type="text"
        value={cardNumberInfo.cardNumber ? cardNumberInfo.cardNumber : ""}
        maxLength={cardNumberInfo.maxLength}
        onChange={onChangeCardNumbers}
        placeholder="Card Number"
      />
      {cardNumberInfo.isValid ? (
        <p>Valid</p>
      ) : (
        <p>{cardNumberInfo.errorMessages[0]}</p>
      )}
    </>
  );
}
```

## Features

### Validation Check

Automatically validates inputs to ensure it is numeric and matches the specified length.

### Error Messaging

Provides informative error messages for invalid inputs.
