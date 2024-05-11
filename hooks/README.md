# woowacourse-6th-card-custom-hook Library

## Description

This library provides a set of custom React hooks to handle various aspects of credit card input validation and formatting. It simplifies the process of building credit card forms by encapsulating the logic for validating and formatting card numbers, expiry dates, CVC codes, and more.

The library offers several hooks, each responsible for a specific part of the credit card input process:

1. **useCardBrand**: This hook detects the card brand (e.g., Visa, Mastercard, American Express) based on the user's input for the card number. It uses regular expressions to match the card number patterns and determines the corresponding brand.

2. **useCardNumbers**: This hook handles the card number input, including formatting, validation, and error handling. It formats the card number according to the rules of the detected card brand and provides error messages if the input is invalid or exceeds the maximum length.

3. **useCardHolder**: This hook manages the input for the cardholder's name, ensuring it follows the specified naming pattern and providing error messages if the input is invalid.

4. **useCVCNumber**: This hook validates the CVC (Card Verification Code) number input, checking if it matches the expected length and format for the detected card brand.

5. **useExpiryDate**: This hook handles the expiry date input, allowing the user to enter the month and year separately. It validates the input and checks if the provided date is in the future.

6. **usePassword**: This hook is responsible for validating the password input, ensuring it meets the specified requirements (e.g., minimum length, character composition).

By using these hooks, developers can easily incorporate credit card input functionality into their React applications without having to worry about the intricate details of validation and formatting. The hooks provide a consistent and reusable solution, making it easier to build robust and user-friendly credit card forms.

<br />

## Install

```
npm i woowacourse-6th-card-custom-hook
```

<br />

## **Usage & API**

... (rest of the documentation remains the same)
<br />

## Install

```
npm i woowacourse-6th-card-custom-hook
```

<br />

## **Usage & API**

### useCardBrand hook

```tsx
// useCardBrand

import React from "react";
import { useCardBrand } from "woowacourse-6th-card-custom-hook";

function App() {
  const { cardBrand, handleCardBrandChange } = useCardBrand();

  return (
    <>
      <input
        value={cardNumbers}
        onChange={(e) => handleCardBrandChange(e.target.value)}
      />
      <div>Card Brand: {cardBrand}</div>
    </>
  );
}
```

### API

| Property Name         | Type     | Description                                                                                                 |
| --------------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| cardBrand             | string   | The detected card brand based on the input card number. It can be one of the supported brands or "unknown". |
| handleCardBrandChange | function | A function to update the cardBrand state based on the input card number.                                    |

<br />

### useCardCompany hook

```tsx
// useCardCompany

import React from "react";
import { useCardCompany } from "woowacourse-6th-card-custom-hook";

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

<br />

### useCardHolder hook

```tsx
// useCardHolder

import React from "react";
import { useCardHolder } from "woowacourse-6th-card-custom-hook";

function App() {
  const {
    cardHolder,
    cardHolderError,
    getCardHolderErrorMessage,
    handleCardHolderChange,
  } = useCardHolder();

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

| Property Name             | Type     | Description                                                                                                                                                                 |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cardHolder                | string   | The current value of the card holder's name.                                                                                                                                |
| cardHolderError           | boolean  | Indicates whether there is an error with the card holder's name. Becomes true if there's an error.                                                                          |
| getCardHolderErrorMessage | function | Returns the error message for the card holder's name if there's an error, otherwise undefined. The error message is sourced from ERROR_MESSAGES.holder.                     |
| handleCardHolderChange    | function | A function to update the card holder's name based on user input. It checks the validity against a regex pattern (INPUT_REGEX.cardHolder) and updates the state accordingly. |

<br />
### useCardNumbers hook

```tsx
// useCardNumbers

import React from "react";
import { useCardNumbers } from "woowacourse-6th-card-custom-hook";

function App() {
  const {
    cardNumbers,
    cardNumbersError,
    getCardNumbersErrorMessage,
    cardBrand,
    handleCardNumbersChange,
  } = useCardNumbers();

  return (
    <>
      <input
        value={cardNumbers.join(" ")}
        onChange={(e) => handleCardNumbersChange(e.target.value)}
      />
      <div>{getCardNumbersErrorMessage()}</div>
      <div>Card Brand: {cardBrand}</div>
    </>
  );
}
```

### API

| Property Name              | Type          | Description                                                                                                                                                                                                            |
| -------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cardNumbers                | Array<string> | An array of formatted card number strings based on the detected card brand.                                                                                                                                            |
| cardNumbersError           | boolean       | Indicates whether there is an error with the card number input.                                                                                                                                                        |
| getCardNumbersErrorMessage | function      | A function that checks if there are any errors in the card number input and returns the appropriate error message if any errors are found; otherwise, it returns undefined.                                            |
| cardBrand                  | string        | The detected card brand based on the input card number. It can be one of the supported brands or "unknown".                                                                                                            |
| handleCardNumbersChange    | function      | A function that must be called whenever the user changes the value in the card number input field. It takes value (the new string value of the input) as a parameter and updates the cardBrand and cardNumbers states. |

<br />

### useCVCNumber

```tsx
// useCVCNumber

import React from "react";
import { useCVCNumber } from "woowacourse-6th-card-custom-hook";

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

<br />

### useExpiryDate hook

```tsx
// useExpiryDate

import React from "react";
import { useExpiryDate } from "woowacourse-6th-card-custom-hook";

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

<br />

### usePassword hook

```tsx
// usePassword

import React from "react";
import { usePassword } from "woowacourse-6th-card-custom-hook";

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

| Property Name           | Type     | Description                                                                                                                                      |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| password                | string   | The current state of the password input.                                                                                                         |
| passwordError           | boolean  | A flag indicating whether the current password input meets the specified validity criteria (e.g. matches a certain regex pattern).               |
| getPasswordErrorMessage | Function | A function that returns an error message if the current password input fails validation. If the input is valid, it returns undefined.            |
| handlePasswordChange    | Function | A function to be called whenever the user modifies the password input. It updates both the password and passwordError states based on the input. |
