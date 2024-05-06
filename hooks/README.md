# hain-tain-hooks

### Features

🚨 This is a module created for practice, so be careful what you download.

- It's easy to implement custom hooks for card payments.

### Install

```
npm install hain-tain-hooks
```

### Quick start

- **useCardNumbers**

```js
import { useCardNumbers } from 'hain-tain-hooks';

const CardNumbers = () => {
  const {
    values,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardNumbers(['', '', '', '']);

  return (
    <>
      {[...Array(4)].map((_, index) => (
        <input
          value={values[index]}
          onChange={(e) => onChangeHandler(e, index)}
          onBlur={() => onBlurHandler(index)}
          onFocus={() => onFocusHandler(index)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
              e.currentTarget.blur();
            }
          }}
        />
      ))}
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};
```

- **useCardCompany**

```js
import { useCardCompany } from 'hain-tain-hooks';

const CARD_COMPANY_LIST = ['카카오뱅크', '현대카드', '신한카드', '국민카드'];

const CardCompany = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardCompany('', CARD_COMPANY_LIST);

  return (
    <>
      <input
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'Enter') {
            e.currentTarget.blur();
          }
        }}
      />
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardCompany;
```

- **useCardExpirationDate**

```js
import { useCardExpirationDate } from 'hain-tain-hooks';

const CardExpirationDate = () => {
  const {
    values,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardExpirationDate(['', '']);

  return (
    <>
      {[...Array(2)].map((_, index) => (
        <input
          value={values[index]}
          onChange={(e) => onChangeHandler(e, index)}
          onBlur={() => onBlurHandler(index)}
          onFocus={() => onFocusHandler(index)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
              e.currentTarget.blur();
            }
          }}
        />
      ))}
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};
```

- **useCardHolderName**

```js
import { useCardHolderName } from 'hain-tain-hooks';

const CardHolderName = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardHolderName('');

  return (
    <>
      <input
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'Enter') {
            e.currentTarget.blur();
          }
        }}
      />
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardHolderName;
```

- **useCardCVC**

```js
import { useCardCVC } from 'hain-tain-hooks';

const CardCVC = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardCVC('');

  return (
    <>
      <input
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'Enter') {
            e.currentTarget.blur();
          }
        }}
      />
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardCVC;
```

- **useCardPassword**

```js
import { useCardPassword } from 'hain-tain-hooks';

const CardPassword = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardPassword('');

  return (
    <>
      <input
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'Enter') {
            e.currentTarget.blur();
          }
        }}
      />
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardPassword;
```

### API

#### Top-Level Exports

- `useValidateInput`
- `useValidateArrayInput`
- `useCardNumbers`
- `useCardCompany`
- `useCardExpiration`
- `useCardHolderName`
- `useCardCVC`
- `useCardPassword`

### Contributors

[`@hain-tain`](https://github.com/Hain-tain)
[`@Todari`](https://github.com/Todari)
