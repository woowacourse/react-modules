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

## Features

### Validation Check

Automatically validates the CVC input to ensure it is numeric and matches the specified length.

### Customizable Length

Allows you to set a custom length for the CVC to match different card types.

### Error Messaging

Provides informative error messages for invalid inputs.
