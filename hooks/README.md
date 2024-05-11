# Hooks Module

## Description

This is a custom hook for validation and state management of FORM that captures card information upon registration.

It can handle the card company, card holder, card numbers, CVC number, expiry date, and password.

## Install

`npm i woowacourse-card-custom-hook`

## **Usage & API**

### useCardCompany hook

```tsx
// useCardCompany

import React from "react";
import { useCardCompany } from "woowacourse-card-custom-hook";

function App() {
  const {
    cardCompany,
    cardCompanyError,
    getCardCompanyErrorMessage,
    handleCardCompanyChange,
  } = useCardCompany();

  return (
    <>
      <select
        defaultValue=""
        value={cardCompany}
        onChange={(e) => handleCardCompanyChange(e.target.value)}
      >
        <option></option>
        {cardHolder.map((company, index) => {
          return (
            <option value={company} key={index}>
              {company}
            </option>
          );
        })}
      </select>
      <div>{getCardCompanyErrorMessage()}</div>
    </>
  );
}
```

### API

| Property Name              | Type     | Description                                                                                                                                                                                                                        |
| -------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cardCompany                | string   | The name of the currently selected card company.                                                                                                                                                                                   |
| cardCompanyError           | boolean  | Becomes true when a card company has not been selected.                                                                                                                                                                            |
| getCardCompanyErrorMessage | function | A function that returns an error message when a card company has not been selected. This function returns an error message applicable when cardCompanyError is true, and the error message is defined in [ERROR_MESSAGES.company]. |
| handleCardCompanyChange    | function | A function that handles changes in the card company selection dropdown. This function needs to be called whenever a user selects or changes the selected card company.                                                             |

### useCardHolder hook

```tsx
// useCardHolder

import React from "react";
import { useCardHolder } from "woowacourse-card-custom-hook";

function App() {
  const {
    cardHolder,
    cardHolderError,
    getCardHolderErrorMessage,
    handleCardHolderChange,
  } = useCardHolder(3);

  return (
    <>
      <input
        value={cardHolder}
        onChange={(e) => handleCardHolderChange(e.target.value)}
      />
      <div>{getCardHolderErrorMessage()}</div>
    </>
  );
}
```

### API

| Property Name             | Type     | Description                                                                                                                                                                        |
| ------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cardHolder                | string   | The current value of the card holder's name.                                                                                                                                       |
| cardHolderError           | boolean  | Indicates whether there is an error with the card holder's name. Becomes true if there's an error.                                                                                 |
| getCardHolderErrorMessage | function | Returns the error message for the card holder's name if there's an error, otherwise undefined. The error message is sourced from ERROR_MESSAGES.holder.                            |
| handleCardHolderChange    | function | A function to update the card holder's name based on user input. It checks the validity against a regex pattern (INPUT_REGEX_PARAMS.cardHolder) and updates the state accordingly. |

### useCardNumbers hook

```tsx
// useCardNumbers

import React from "react";
import { useCardNumbers } from "woowacourse-card-custom-hook";

function App() {
  const {
    cardNumbers,
    formattedCardNumbers,
    cardNumberMaxLength,
    cardBrand,
    cardNumberError,
    getCardNumbersErrorMessage,
    handleCardNumbersChange,
  } = useCardNumbers();

  return (
    <>
      <input onChange={(e) => handleCardNumbersChange(e.target.value)} />
      <div>Card Numbers : {cardNumbers}</div>
      <div>Formatted : {formattedCardNumbers}</div>
      <div>Card Brand : {cardBrand}</div>
      <div>Error : {cardNumberError.toString()}</div>
      <div>Error Message : {errorMessage}</div>
      <div>Max Length : {cardNumberMaxLength}</div>
    </>
  );
}
```

### API

|                            | Type     | Description                                                                                                                                                                                                                                                                                                  |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cardNumbers                | string   | A string representing the current value of the card number input field. Initially, it is an empty string.                                                                                                                                                                                                    |
| formattedCardNumbers       | string   | A string that holds the formatted card number based on the card brand. The formatting divides the card number into different parts (first, second, third, and possibly last), separated by spaces. For Diners and Amex cards, the formatting is different compared to other card brands.                     |
| cardNumberMaxLength        | integer  | An integer that represents the maximum length of the card number. It varies depending on the detected card brand (16 for Visa, MasterCard, and UnionPay; 14 for Diners; 15 for Amex).                                                                                                                        |
| cardBrand                  | string   | A string that indicates the detected card brand based on the card number's prefix. It can be "domestic", "visa", "masterCard", "diners", "amex", or "unionPay".                                                                                                                                              |
| cardNumberError            | boolean  | A boolean that indicates whether there is an error in the card number input. Initially, it is set to false. The error status is updated based on the validity of the card number against a regular expression determined by cardNumberMaxLength.                                                             |
| getCardNumbersErrorMessage | function | A function that checks if there is an error in the card number input and returns the appropriate error message if any errors are found. If there are no errors, it returns null. The error message is determined by MAX_LENGTH_ERROR_MESSAGE, which likely generates a message based on cardNumberMaxLength. |
| handleCardNumbersChange    | function | A function that must be called whenever the user changes the value in the card number input field. |

### useCVCNumber hook

```tsx
// useCVCNumber

import React from "react";
import { useCVCNumber } from "woowacourse-card-custom-hook";

function App() {
  const {
    CVCNumber,
    CVCNumberError,
    getCVCNumberErrorMessage,
    handleCVCNumberChange,
  } = useCVCNumber(3);

  return (
    <>
      <input
        value={CVCNumber}
        onChange={(e) => handleCVCNumberChange(e.target.value)}
      />
      <div>{getCVCNumberErrorMessage()}</div>
    </>
  );
}
```

### API

| Property Name            | Type     | Description                                                                                                                                                          |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CVCNumber                | string   | A string representing the CVC number entered by the user. Initially set to an empty string.                                                                          |
| CVCNumberError           | boolean  | A boolean flag indicating the validity of the CVC number input. Initially set to false, indicating no error.                                                         |
| getCVCNumberErrorMessage | function | A function that checks if there is an error in the CVC number input and returns the appropriate error message if an error is found; otherwise, it returns undefined. |
| handleCVCNumberChange    | function | A function that must be called whenever the user changes the value in the CVC number input field. It takes value (the new string value of the input) as a parameter. |

### useExpiryDate hook

```tsx
// useExpiryDate

import React from "react";
import { useExpiryDate } from "woowacourse-card-custom-hook";

function App() {
  const { period, getPeriodErrorMessage, handlePeriodChange } = useExpiryDate();

  return (
    <>
      <input
        value={period.month}
        onChange={(e) => handlePeriodChange("month", e.target.value)}
      />
      <input
        value={period.year}
        onChange={(e) => handlePeriodChange("year", e.target.value)}
      />
      <div>{getPeriodErrorMessage()}</div>
    </>
  );
}
```

### API

| Property Name         | Type                                                | Description                                                                                                                                         |
| --------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| period                | { month: string, year: string}                      | An object holding the expiry date's month and year as strings.                                                                                      |
| isPeriodError         | { month: boolean, year: boolean, expired: boolean } | An object indicating the presence of errors in the period inputs, including an expired date error.                                                  |
| getPeriodErrorMessage | Function                                            | A function that returns error messages related to the period input, based on the type of error found. If no errors are found, it returns undefined. |
| handlePeriodChange    | Function                                            | A function to handle changes in the period inputs. It accepts a type ('month' or 'year') and the value of the input.                                |

### usePassword hook

```tsx
// usePassword

import React from "react";
import { usePassword } from "woowacourse-card-custom-hook";

function App() {
  const {
    password,
    passwordError,
    getPasswordErrorMessage,
    handlePasswordChange,
  } = usePassword(2);

  return (
    <>
      <input
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      <div>{getPasswordErrorMessage()}</div>
    </>
  );
}
```

### API

| Property Name           | Type     | Description                                                                                                                                      |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| password                | string   | The current state of the password input.                                                                                                         |
| passwordError           | boolean  | A flag indicating whether the current password input meets the specified validity criteria (e.g. matches a certain regex pattern).               |
| getPasswordErrorMessage | Function | A function that returns an error message if the current password input fails validation. If the input is valid, it returns undefined.            |
| handlePasswordChange    | Function | A function to be called whenever the user modifies the password input. It updates both the password and passwordError states based on the input. |
