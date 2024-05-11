# woowacourse-todari-hooks

## Install

```
npm i woowacourse-todari-hooks
```

## API

### Top-Level Exports

- `useCardCompany`
- `useCardCVC`
- `useCardExpiration`
- `useCardHolderName`
- `useCardNumbers`
- `useCardPassword`
- `useInputValidate`

### useCardCompany

Add the `useCardCompany` hook near the top of your application's tree.

```tsx
import { useCardCompany } from 'woowacourse-todari-hooks';

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

### useCardCVC

Add the `useCardCVC` hook near the top of your application's tree.

```tsx
import { useCardCVC } from 'woowacourse-todari-hooks';

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

### useCardExpiration

Add the `useCardExpiration` hook near the top of your application's tree.

```tsx
import { useCardExpirationDate } from 'woowacourse-todari-hooks';

const CardExpirationDate = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardExpirationDate(['', '']);

  return (
    <>
      {[...Array(2)].map((_, index) => (
        <input
          value={value[index]}
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

export default CardExpirationDate;
```

### useCardHolderName

Add the `useCardHolderName` hook near the top of your application's tree.

```tsx
import { useCardHolderName } from 'woowacourse-todari-hooks';

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

### useCardNumbers

Add the `useCardNumbers` hook near the top of your application's tree.

```tsx
import { useCardNumbers } from 'woowacourse-todari-hooks';

const CardNumbers = () => {
  const {
    value,
    cardBrand,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardNumbers('');

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
      <p>brand : {cardBrand}</p>
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardNumbers;
```

### useCardPassword

Add the `useCardPassword` hook near the top of your application's tree.

```tsx
import { useCardPassword } from 'woowacourse-todari-hooks';

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
